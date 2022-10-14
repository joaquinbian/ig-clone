import Pressable from '@components/Pressable';
import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import {colors} from '@theme/colors';
import {weight} from '@theme/fonts';
import {useMutation, useQuery} from '@apollo/client';
import {createComment, getPost, updatePost} from './queries';
import {
  CreateCommentMutation,
  CreateCommentMutationVariables,
  GetPostQuery,
  GetPostQueryVariables,
  Post,
  UpdatePostMutation,
  UpdatePostMutationVariables,
} from 'src/API';
import {useAuthContext} from '@context/AuthContext';

interface CommentInput {
  postId: any;
}

const Input = ({postId}: CommentInput) => {
  const [text, setText] = useState<string>('');
  const {userId} = useAuthContext();

  const {data} = useQuery<GetPostQuery, GetPostQueryVariables>(getPost, {
    variables: {id: postId},
  });
  const [onCreateComment, {loading}] = useMutation<
    CreateCommentMutation,
    CreateCommentMutationVariables
  >(createComment, {
    variables: {input: {comment: text, postID: postId, userID: userId}},
    //TODO: ver si puedo sincronizar la lista con la data que devuevle
    refetchQueries: ['GetCommentsByPost'],
  });

  const [onUpdatePost, {loading: loadingUpdatingPost}] = useMutation<
    UpdatePostMutation,
    UpdatePostMutationVariables
  >(updatePost);

  const onPost = async () => {
    //send to backend
    try {
      let nOfComments = data?.getPost?.numberOfComments ?? 0;
      await onUpdatePost({
        variables: {
          input: {
            _version: data?.getPost?._version,
            id: postId,
            numberOfComments: (nOfComments += 1),
          },
        },
      });
      await onCreateComment();
      setText('');
    } catch (error) {
      console.log((error as Error).message);
    }
    //console.warn(text);
  };
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/2.jpg',
        }}
        style={styles.avatar}
      />
      <TextInput
        placeholder="add your comment..."
        multiline
        value={text}
        onChangeText={setText}
        style={styles.input}
        editable={!loading}
      />
      <Pressable style={styles.button} onPress={onPost} disabled={!text}>
        {loading || loadingUpdatingPost ? (
          <ActivityIndicator />
        ) : (
          <Text style={{color: colors.primary, fontWeight: weight.bold}}>
            Post
          </Text>
        )}
      </Pressable>
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderTopWidth: 1,
    borderColor: colors.lightgray,
    padding: 5,
    alignItems: 'flex-end',
  },
  button: {marginBottom: 10},
  avatar: {width: 40, aspectRatio: 1, borderRadius: 20},
  input: {
    flex: 1,
    marginHorizontal: 3,
  },
});
