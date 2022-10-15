import {Alert} from 'react-native';
import {useMutation, useQuery} from '@apollo/client';
import {createComment, getPost, updatePost} from './queries';
import {
  CreateCommentMutation,
  CreateCommentMutationVariables,
  GetPostQuery,
  GetPostQueryVariables,
  UpdatePostMutation,
  UpdatePostMutationVariables,
} from 'src/API';
import {useAuthContext} from '@context/AuthContext';

export const useComment = (postID: string) => {
  const {userId} = useAuthContext();
  const {data, loading: isLoadingPost} = useQuery<
    GetPostQuery,
    GetPostQueryVariables
  >(getPost, {
    variables: {id: postID},
  });
  const [onCreateComment, {loading}] = useMutation<
    CreateCommentMutation,
    CreateCommentMutationVariables
  >(createComment, {
    refetchQueries: ['GetCommentsByPost'],
  });

  const [onUpdatePost, {loading: loadingUpdatingPost}] = useMutation<
    UpdatePostMutation,
    UpdatePostMutationVariables
  >(updatePost);

  const addComment = async (comment: string) => {
    try {
      let nOfComments = data?.getPost?.numberOfComments ?? 0;
      await onUpdatePost({
        variables: {
          input: {
            _version: data?.getPost?._version,
            id: postID,
            numberOfComments: (nOfComments += 1),
          },
        },
      });
      await onCreateComment({
        variables: {input: {comment, postID, userID: userId}},
      });
    } catch (error) {
      Alert.alert('error adding comment');
    }
  };

  return {
    addComment,
    isAddingComment: loading || loadingUpdatingPost,
  };
};
