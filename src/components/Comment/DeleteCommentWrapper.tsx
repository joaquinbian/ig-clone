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
import {useComment} from '@hooks/useComment';

interface IDeleteCommentMenu {
  comment: Comment;
}
export default function DeleteCommentWrapper({comment}: IDeleteCommentMenu) {
  const {deleteComment} = useComment(comment.postID);

  const handleDeleteComment = async () => {
    try {
      await deleteComment(comment);
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
