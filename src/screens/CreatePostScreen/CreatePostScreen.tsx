import {StyleSheet, Text, View, Image, Alert} from 'react-native';
import React from 'react';
import {useRoute} from '@react-navigation/native';
import {CreatePostRouteProp} from '@navigation/types';
import CustomInput from '@components/CustomInput';
import {useForm} from 'react-hook-form';
import {ApolloError, useMutation} from '@apollo/client';
import Button from '@components/Button';
import {colors} from '@theme/colors';
import CustomButton from '@screens/Auth/components/CustomButton';
import {createPost} from './queries';
import {CreatePostMutation, CreatePostMutationVariables} from 'src/API';
import {useAuthContext} from '@context/AuthContext';

interface ICreatePost {
  description: string | null;
}

export default function CreatePostScreen() {
  const route = useRoute<CreatePostRouteProp>();
  const {image} = route.params;
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
            image,
            numberOfComments: 0,
            numberOfLikes: 0,
            userID: userId,
          },
        },
      });
      //console.log({response});
    } catch (error) {
      Alert.alert('error fetching posts', (error as Error).message);
    }
  };

  return (
    <View style={{alignItems: 'center', padding: 10}}>
      <Image source={{uri: image}} style={styles.image} />
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
  );
}

const styles = StyleSheet.create({
  image: {
    width: 150,
    aspectRatio: 1,
  },
});
