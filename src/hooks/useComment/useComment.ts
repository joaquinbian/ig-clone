import {Alert} from 'react-native';
import {useMutation, useQuery} from '@apollo/client';
import {
  createComment,
  deleteComment as deleteCommentMutation,
  getPost,
  updatePost,
} from './queries';
import {
  Comment,
  CreateCommentMutation,
  CreateCommentMutationVariables,
  DeleteCommentMutation,
  DeleteCommentMutationVariables,
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
    // refetchQueries: ['GetCommentsByPost'],
  });
  const [onDeleteComment] = useMutation<
    DeleteCommentMutation,
    DeleteCommentMutationVariables
  >(deleteCommentMutation, {
    //variables: {input: {id: comment.id, _version: comment._version}},
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
      const response = await onCreateComment({
        variables: {input: {comment, postID, userID: userId, numberOfLikes: 0}},
      });
    } catch (error) {
      Alert.alert('error adding comment');
    }
  };

  const deleteComment = async (comment: Comment) => {
    try {
      let nOfComments = data?.getPost?.numberOfComments ?? 0;
      await onUpdatePost({
        variables: {
          input: {
            _version: data?.getPost?._version,
            id: comment.postID,
            numberOfComments: nOfComments === 0 ? 0 : (nOfComments -= 1),
          },
        },
      });
      await onDeleteComment({
        variables: {input: {id: comment.id, _version: comment._version}},
      });
    } catch (error) {
      Alert.alert('error deleting comment');
    }
  };

  return {
    addComment,
    isAddingComment: loading || loadingUpdatingPost,
    deleteComment,
  };
};
