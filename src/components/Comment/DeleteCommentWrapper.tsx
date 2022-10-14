import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {styles} from './styles';
import {
  Menu,
  MenuOption,
  MenuOptions,
  MenuTrigger,
  renderers,
} from 'react-native-popup-menu';
import {colors} from '@theme/colors';
import BoldText from '@components/BoldText';
import {useMutation, useQuery} from '@apollo/client';
import {
  Comment,
  DeleteCommentMutation,
  DeleteCommentMutationVariables,
  GetPostQuery,
  GetPostQueryVariables,
  UpdatePostMutation,
  UpdatePostMutationVariables,
} from 'src/API';
import {deleteComment, getPost, updatePost} from './queries';

interface IDeleteCommentMenu {
  comment: Comment;
}
export default function DeleteCommentWrapper({comment}: IDeleteCommentMenu) {
  const {data} = useQuery<GetPostQuery, GetPostQueryVariables>(getPost, {
    variables: {id: comment.postID},
  });

  const [onDeleteComment] = useMutation<
    DeleteCommentMutation,
    DeleteCommentMutationVariables
  >(deleteComment, {
    variables: {input: {id: comment.id, _version: comment._version}},
  });

  const [onUpdatePost, {loading: loadingUpdatingPost}] = useMutation<
    UpdatePostMutation,
    UpdatePostMutationVariables
  >(updatePost);

  const handleDeleteComment = async () => {
    try {
      let nOfComments = data?.getPost?.numberOfComments ?? 0;
      await onDeleteComment();
      await onUpdatePost({
        variables: {
          input: {
            _version: data?.getPost?._version,
            id: comment.postID,
            numberOfComments: nOfComments === 0 ? 0 : (nOfComments -= 1),
          },
        },
      });
    } catch (error) {}
  };

  return (
    <Menu renderer={renderers.SlideInMenu}>
      <MenuTrigger triggerOnLongPress>
        <Text style={{color: colors.black}}>{comment.comment}</Text>
        <Text style={styles.labelsFooterText}>5 likes</Text>
      </MenuTrigger>
      <MenuOptions
        customStyles={{
          optionsContainer: styles.menuContainer,
        }}>
        <MenuOption style={{padding: 15}} onSelect={handleDeleteComment}>
          <BoldText style={{color: colors.error}}>Delete comment</BoldText>
        </MenuOption>
      </MenuOptions>
    </Menu>
  );
}
