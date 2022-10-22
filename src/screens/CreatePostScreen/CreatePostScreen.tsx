import {
  StyleSheet,
  Text,
  View,
  Image,
  Alert,
  useWindowDimensions,
} from 'react-native';
import React from 'react';
import {useNavigation, useRoute} from '@react-navigation/native';
import {CreatePostNavigationProp, CreatePostRouteProp} from '@navigation/types';
import CustomInput from '@components/CustomInput';
import {useForm} from 'react-hook-form';
import {ApolloError, useMutation} from '@apollo/client';
import CustomButton from '@screens/Auth/components/CustomButton';
import {createPost} from './queries';
import {CreatePostMutation, CreatePostMutationVariables} from 'src/API';
import {useAuthContext} from '@context/AuthContext';
import Carousel from '@components/Carousel';
import VideoPlayer from '@components/VideoPlayer';

interface ICreatePost {
  description: string | null;
}

export default function CreatePostScreen() {
  const route = useRoute<CreatePostRouteProp>();

  const navigation = useNavigation<CreatePostNavigationProp>();
  const {image, video, images} = route.params;
  const {width} = useWindowDimensions();
  const {userId} = useAuthContext();
  const {control, handleSubmit} = useForm<ICreatePost>({
    defaultValues: {description: null},
    mode: 'all',
  });
  const [onCreatePost, {loading, error}] = useMutation<
    CreatePostMutation,
    CreatePostMutationVariables
  >(createPost);

  const createPostHandler = async ({description}: ICreatePost) => {
    //   console.log({description});
    try {
      const response = await onCreatePost({
        variables: {
          input: {
            description: description ?? null,
            type: 'POST',
            image,
            images,
            video,
            numberOfComments: 0,
            numberOfLikes: 0,
            userID: userId,
          },
        },
      });

      //console.log({response});
      //para que no quede la segunda pantalla en el historial
      navigation.popToTop();

      navigation.navigate('HomeStack');
    } catch (error) {
      Alert.alert('error fetching posts', (error as Error).message);
    }
  };

  //checking if the post is a soloimage, a carousel or a video

  let content;
  if (image) {
    content = (
      <Image
        source={{
          uri: image,
        }}
        style={styles.postImage}
        resizeMode="cover"
      />
    );
  } else if (images) {
    content = <Carousel images={images} imageWidth={width - 20} />;
  } else if (video) {
    content = <VideoPlayer source={video} />;
  }

  return (
    <>
      <View style={{alignItems: 'center', margin: 10}}>
        <View style={styles.contentContainer}>{content}</View>
        <View style={{marginVertical: 10, alignSelf: 'stretch'}}>
          <CustomInput
            control={control}
            name="description"
            placeholder="insert a description here..."
            rules={{
              maxLength: {
                value: 500,
                message: 'description can not exceed 500 characters',
              },
            }}
            multiline
          />
          <CustomButton
            type="PRIMARY"
            text="Submit"
            onPress={handleSubmit(createPostHandler)}
            isLoading={loading}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  contentContainer: {
    width: '100%',
    aspectRatio: 1,
  },
  postImage: {width: '100%', aspectRatio: 1},
});
