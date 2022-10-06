import {StyleSheet, Text, View, Alert} from 'react-native';
import React from 'react';
import {useNavigation, useRoute} from '@react-navigation/native';
import {CreatePostNavigationProp, EditPostRouteProp} from '@navigation/types';
import CustomInput from '@components/CustomInput';
import {useForm} from 'react-hook-form';
import {ApolloError, useMutation, useQuery} from '@apollo/client';
import CustomButton from '@screens/Auth/components/CustomButton';
import {getPost, updatePost} from './queries';
import {
  GetPostQuery,
  GetPostQueryVariables,
  UpdatePostMutation,
  UpdatePostMutationVariables,
} from 'src/API';
import {size, weight} from '@theme/fonts';
import Loading from '@components/Loading';
import ApiErrorMessage from '@components/ApiErrorMessage';

interface IEditPost {
  description: string | null;
}

export default function EditPostScreen() {
  const route = useRoute<EditPostRouteProp>();

  const navigation = useNavigation<CreatePostNavigationProp>();
  const {postID} = route.params;

  const [onUpdatePost, {loading, error}] = useMutation<
    UpdatePostMutation,
    UpdatePostMutationVariables
  >(updatePost);

  const {control, handleSubmit, resetField} = useForm<IEditPost>({
    mode: 'all',
    defaultValues: {description: null},
  });

  const {
    data,
    loading: loadingPost,
    error: errorPost,
  } = useQuery<GetPostQuery, GetPostQueryVariables>(getPost, {
    variables: {id: postID},
    onCompleted(data) {
      console.log({data});
      resetField('description', {defaultValue: data.getPost?.description});
    },
  });
  console.log({data, loadingPost});

  const createPostHandler = async ({description}: IEditPost) => {
    try {
      const response = await onUpdatePost({
        /*  variables: {
          input: {
            
          },
        }, */
      });

      navigation.popToTop();
      navigation.navigate('HomeStack');
    } catch (error) {
      Alert.alert('error fetching posts', (error as Error).message);
    }
  };

  if (loadingPost) {
    return <Loading text="loading post..." />;
  }

  if (errorPost) {
    return (
      <ApiErrorMessage
        message={errorPost.message}
        title="error fetching post..."
      />
    );
  }

  return (
    <>
      <View style={{alignItems: 'center', margin: 10}}>
        <View style={{marginVertical: 10, alignSelf: 'stretch'}}>
          <View style={{marginBottom: 15}}>
            <Text style={styles.label}>Update descripion</Text>
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
          </View>
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
  label: {
    fontSize: size.md,
    fontWeight: weight.semi,
  },
});
