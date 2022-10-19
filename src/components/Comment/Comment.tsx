import React, {useState} from 'react';
import {Image, Text, View} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {
  Comment as IComment,
  CreateCommentLikeMutation,
  CreateCommentLikeMutationVariables,
  DeleteCommentLikeMutation,
  DeleteCommentLikeMutationVariables,
  LikeForCommentByUserIdQuery,
  LikeForCommentByUserIdQueryVariables,
  UpdateCommentMutation,
  UpdateCommentMutationVariables,
} from 'src/API';
import BoldText from '@components/BoldText';
import {colors} from '@theme/colors';
import {styles} from './styles';
import Pressable from '@components/Pressable';
import {DEFAULT_USER_IMAGE} from 'src/config';

import {useAuthContext} from '@context/AuthContext';
import DeleteCommentWrapper from './DeleteCommentWrapper';
import {useMutation, useQuery} from '@apollo/client';
import {
  createCommentLike,
  deleteCommentLike,
  likeForCommentByUserId,
  updateComment,
} from './queries';
import {LoneSchemaDefinition} from 'graphql/validation/rules/LoneSchemaDefinition';

interface Props {
  comment: IComment;
}
const Comment = ({comment}: Props) => {
  //const [isLiked, setIsLiked] = useState<boolean>(false);
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

  const [onDeleteComment] = useMutation<
    DeleteCommentLikeMutation,
    DeleteCommentLikeMutationVariables
  >(deleteCommentLike);

  const toggleLike = async () => {
    try {
      let numberOfLikes = comment.numberOfLikes;
      if (!isLiked) {
        const response = await onLikeComment();

        const updateComment = await onUpdateComment({
          variables: {
            input: {
              id: comment.id,
              _version: comment._version,
              numberOfLikes: (numberOfLikes += 1),
            },
          },
        });
        //console.log({response, updateComment});
      } else {
        const updateComment = await onUpdateComment({
          variables: {
            input: {
              id: comment.id,
              _version: comment._version,
              numberOfLikes: (numberOfLikes -= 1),
            },
          },
        });
        await onDeleteComment({
          variables: {input: {id: isLiked.id, _version: isLiked._version}},
        });
      }
      // setIsLiked(isLiked => !isLiked);
    } catch (error) {
      console.log((error as Error).message);
    }
  };

  /*   console.log(comment); */

  const isLiked = data?.likeForCommentByUserId?.items.filter(
    like => !like?._deleted,
  )[0];
  console.log({isLiked}, comment.comment);

  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 5,
        // flex: 1,
      }}>
      <Image
        source={{uri: comment.User?.image ?? DEFAULT_USER_IMAGE}}
        style={[styles.userImage]}
      />
      <View style={{flex: 1}}>
        <View style={styles.usernameContainer}>
          <BoldText
            numberOfLines={1}
            style={{marginRight: 10, maxWidth: '85%'}}>
            {comment.User?.username ?? 'rober'}
          </BoldText>
          <Text style={styles.labelsFooterText}>5d</Text>
        </View>
        {userId === comment.userID ? (
          <DeleteCommentWrapper comment={comment} />
        ) : (
          <>
            <Text style={{color: colors.black}}>{comment.comment}</Text>
            <Text style={styles.labelsFooterText}>
              {comment.numberOfLikes} likes
            </Text>
          </>
        )}
      </View>
      <Pressable onPress={toggleLike} hitSlop={15}>
        <AntDesign
          name={!!isLiked ? 'heart' : 'hearto'}
          size={15}
          style={[styles.icon]}
          color={!!isLiked ? 'red' : colors.black}
        />
      </Pressable>
    </View>
  );
};

export default Comment;
