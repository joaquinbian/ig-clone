import {Alert} from 'react-native';
import {useMutation, useQuery} from '@apollo/client';
import {
  createLike as createLikeQuery,
  createNotification,
  deleteLike as deleteLikeQuery,
  likeForPostByUserId,
  updatePost,
} from './queries';
import {
  CreateLikeMutation,
  CreateLikeMutationVariables,
  DeleteLikeMutation,
  DeleteLikeMutationVariables,
  Like,
  LikeForPostByUserIdQuery,
  LikeForPostByUserIdQueryVariables,
  Post as IPost,
  UpdatePostMutation,
  UpdatePostMutationVariables,
  CreateNotificationMutation,
  CreateNotificationMutationVariables,
  NotificationType,
} from 'src/API';
import {useAuthContext} from '@context/AuthContext';
export const useLikes = (post: IPost) => {
  const {userId} = useAuthContext();

  const {data, loading, error} = useQuery<
    LikeForPostByUserIdQuery,
    LikeForPostByUserIdQueryVariables
  >(likeForPostByUserId, {
    variables: {postID: post.id, userID: {eq: userId}},
  });

  const like = data?.likeForPostByUserId?.items.filter(
    likes => !likes?._deleted,
  )[0];

  const [onUpdatePost] = useMutation<
    UpdatePostMutation,
    UpdatePostMutationVariables
  >(updatePost);
  const [onDeleteLike] = useMutation<
    DeleteLikeMutation,
    DeleteLikeMutationVariables
  >(deleteLikeQuery);

  const [likePost, {loading: loadingLike, error: errorLike}] = useMutation<
    CreateLikeMutation,
    CreateLikeMutationVariables
  >(createLikeQuery, {
    variables: {input: {postID: post.id, userID: userId}},
    refetchQueries: ['LikeForPostByUserId'],
  });

  const [onCreateNotification] = useMutation<
    CreateNotificationMutation,
    CreateNotificationMutationVariables
  >(createNotification, {
    variables: {
      input: {
        type: NotificationType.NEW_LIKE,
        userID: post.userID,
        actorID: userId,
        readAt: 0,
        notificationPostId: post.id,
      },
    },
  });

  const incrementLikes = async () => {
    try {
      const res = await onUpdatePost({
        variables: {
          input: {
            id: post.id,
            numberOfLikes: (post.numberOfLikes += 1),
            _version: post._version,
          },
        },
      });
    } catch (error) {
      Alert.alert('error during like operation');
    }
  };
  const decrementLikes = async () => {
    try {
      const res = await onUpdatePost({
        variables: {
          input: {
            id: post.id,
            numberOfLikes:
              post.numberOfLikes === 0 ? 0 : (post.numberOfLikes -= 1),
            _version: post._version,
          },
        },
      });
    } catch (error) {
      Alert.alert('error during dislike');
    }
  };

  const deleteLike = async (like: Like) => {
    await onDeleteLike({
      variables: {input: {id: like?.id, _version: like?._version}},
    });
  };

  const toggleLike = () => {
    if (like) {
      //delete like
      deleteLike(like);
      decrementLikes();
    } else {
      onLikePost();
    }
  };

  const onLikePost = () => {
    likePost();
    incrementLikes();
    onCreateNotification();
  };

  return {
    isLiked: !!like,
    toggleLike,
    onLikePost,
  };
};
