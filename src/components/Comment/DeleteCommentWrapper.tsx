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
import {useMutation} from '@apollo/client';
import {
  Comment,
  DeleteCommentMutation,
  DeleteCommentMutationVariables,
} from 'src/API';
import {deleteComment} from './queries';

interface IDeleteCommentMenu {
  comment: Comment;
}
export default function DeleteCommentWrapper({comment}: IDeleteCommentMenu) {
  const [onDeleteComment] = useMutation<
    DeleteCommentMutation,
    DeleteCommentMutationVariables
  >(deleteComment, {
    variables: {input: {id: comment.id, _version: comment._version}},
  });

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
        <MenuOption style={{padding: 15}} onSelect={onDeleteComment}>
          <BoldText style={{color: colors.error}}>Delete comment</BoldText>
        </MenuOption>
      </MenuOptions>
    </Menu>
  );
}
