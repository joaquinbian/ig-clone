import {useMutation, useQuery} from '@apollo/client';
import {useAuthContext} from '@context/AuthContext';
import {
  Comment,
  CommentLike,
  CreateCommentLikeMutation,
  CreateCommentLikeMutationVariables,
  DeleteCommentLikeMutation,
  DeleteCommentLikeMutationVariables,
  LikeForCommentByUserIdQuery,
  LikeForCommentByUserIdQueryVariables,
  UpdateCommentMutation,
  UpdateCommentMutationVariables,
} from 'src/API';
import {
  createCommentLike,
  deleteCommentLike as deleteCommentLikeM,
  likeForCommentByUserId,
  updateComment,
} from './queries';

export default function useCommentLike(comment: Comment) {
  const {userId} = useAuthContext();
  const {data, loading} = useQuery<
    LikeForCommentByUserIdQuery,
    LikeForCommentByUserIdQueryVariables
  >(likeForCommentByUserId, {
    variables: {commentID: comment.id, userID: {eq: userId}},
  });

  const [onLikeComment] = useMutation<
    CreateCommentLikeMutation,
    CreateCommentLikeMutationVariables
  >(createCommentLike, {
    variables: {input: {commentID: comment.id, userID: userId}},
    //ver si se puede hacer de alguna forma la query para sacar esto
    refetchQueries: ['LikeForCommentByUserId'],
  });

  const [onUpdateComment] = useMutation<
    UpdateCommentMutation,
    UpdateCommentMutationVariables
  >(updateComment);

  const [onDeleteCommentLike] = useMutation<
    DeleteCommentLikeMutation,
    DeleteCommentLikeMutationVariables
  >(deleteCommentLikeM);

  const like = data?.likeForCommentByUserId?.items.filter(
    like => !like?._deleted,
  )[0];

  const deleteCommentLike = async (like: CommentLike) => {
    try {
      await onUpdateComment({
        variables: {
          input: {
            id: comment.id,
            _version: comment._version,
            numberOfLikes: (comment.numberOfLikes -= 1),
          },
        },
      });
      await onDeleteCommentLike({
        variables: {input: {id: like.id, _version: like._version}},
      });
    } catch (error) {}
  };

  const likeComment = async (comment: Comment) => {
    try {
      await onLikeComment();

      await onUpdateComment({
        variables: {
          input: {
            id: comment.id,
            _version: comment._version,
            numberOfLikes: (comment.numberOfLikes += 1),
          },
        },
      });
    } catch (error) {}
  };

  const toggleLike = async () => {
    if (like) {
      deleteCommentLike(like);
    } else {
      likeComment(comment);
    }
  };

  return {
    isLiked: !!like,
    toggleLike,
  };
}
