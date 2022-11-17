import {
  StyleSheet,
  View,
  Image,
  Alert,
  useWindowDimensions,
} from 'react-native';
import React, {useState} from 'react';
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
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import CustomVideo from '@components/CustomVideo';
import {uploadMedia} from '@utils/aws';

interface ICreatePost {
  description: string | null;
}

export default function CreatePostScreen() {
  const route = useRoute<CreatePostRouteProp>();

  const navigation = useNavigation<CreatePostNavigationProp>();
  const {image, video, images} = route.params;
  const {width} = useWindowDimensions();
  const {userId} = useAuthContext();

  const [isSubmitting, setIsSubmitting] = useState(false);

  const {control, handleSubmit} = useForm<ICreatePost>({
    defaultValues: {description: null},
    mode: 'all',
  });
  const [onCreatePost, {loading, error}] = useMutation<
    CreatePostMutation,
    CreatePostMutationVariables
  >(createPost);

  const createPostHandler = async ({description}: ICreatePost) => {
    let imageToUpload: string | undefined = undefined;
    let imagesToUpload: string[] | undefined = undefined;
    let videoToUpload: string | undefined = undefined;
    setIsSubmitting(true);

    if (isSubmitting) {
      return;
    }

    //store media files to S3 and get the key
    try {
      if (image) {
        const imageKey = await uploadMedia(image);
        imageToUpload = imageKey;
      } else if (images) {
        const imagesKeys = await Promise.all(
          images.map(image => uploadMedia(image)),
        );
        imagesToUpload = imagesKeys.filter(key => key) as string[];
      } else if (video) {
        videoToUpload = await uploadMedia(video);
      }
      const response = await onCreatePost({
        variables: {
          input: {
            description: description ?? null,
            type: 'POST',
            image: imageToUpload,
            images: imagesToUpload,
            video: videoToUpload,
            numberOfComments: 0,
            numberOfLikes: 0,
            userID: userId,
          },
        },
      });
      //para que no quede la segunda pantalla en el historial
      navigation.popToTop();

      navigation.navigate('HomeStack');
    } catch (error) {
      setIsSubmitting(false);
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
    content = (
      <CustomVideo
        width={width}
        uri={video}
        isMuted={true}
        isPaused={false}
        repeat
      />
    );
  }

  return (
    <KeyboardAwareScrollView
      contentContainerStyle={{alignItems: 'center', margin: 10}}>
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
          isLoading={isSubmitting}
        />
      </View>
    </KeyboardAwareScrollView>
  );
}

const styles = StyleSheet.create({
  contentContainer: {
    width: '100%',
    aspectRatio: 1,
  },
  postImage: {width: '100%', aspectRatio: 1},
});
