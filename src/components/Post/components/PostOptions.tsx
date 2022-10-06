import {Alert, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {
  Menu,
  MenuOption,
  MenuOptions,
  MenuTrigger,
  renderers,
} from 'react-native-popup-menu';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import {
  DeletePostMutation,
  DeletePostMutationVariables,
  Post as IPost,
} from 'src/API';
import {useAuthContext} from '@context/AuthContext';
import {size, weight} from '@theme/fonts';
import {colors} from '@theme/colors';
import {useMutation} from '@apollo/client';
import {deletePost} from '../queries';
import {FeedNavigatorProps} from '@navigation/types';
import {useNavigation} from '@react-navigation/native';

interface IPostOptions {
  post: IPost;
}

export default function PostOptions({post}: IPostOptions) {
  const {userId} = useAuthContext();
  const navigation = useNavigation<FeedNavigatorProps>();

  const [onDeletePost] = useMutation<
    DeletePostMutation,
    DeletePostMutationVariables
  >(deletePost, {variables: {input: {id: post.id, _version: post._version}}});

  const startDeletingPost = async () => {
    const response = await onDeletePost();
    console.log({response}, 'delete post');
  };

  const onDeletePressed = () => {
    Alert.alert(
      'Are you sure you want to delete the post?',
      'Deleting posts is destructive',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'Delete',
          style: 'destructive',
          onPress: startDeletingPost,
        },
      ],
    );
  };

  const onEditPressed = () => {
    navigation.navigate('EditPostScreen', {postID: post.id});
  };

  return (
    <Menu renderer={renderers.SlideInMenu}>
      <MenuTrigger>
        <SimpleLineIcons name="options-vertical" size={16} color="black" />
      </MenuTrigger>
      <MenuOptions
        customStyles={{
          optionsContainer: styles.menuContainer,
        }}>
        <MenuOption onSelect={() => Alert.alert(`edit`)}>
          <Text style={styles.optionText}>Save</Text>
        </MenuOption>
        {post.userID === userId && (
          <>
            <MenuOption onSelect={onDeletePressed}>
              <Text style={[styles.optionText, {color: 'red'}]}>Delete</Text>
            </MenuOption>
            <MenuOption onSelect={onEditPressed}>
              <Text style={styles.optionText}>Edit</Text>
            </MenuOption>
          </>
        )}
      </MenuOptions>
    </Menu>
  );
}

const styles = StyleSheet.create({
  optionText: {
    fontWeight: weight.semi,
    textAlign: 'center',
    padding: 10,
  },
  menuContainer: {
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    borderWidth: 1,
    borderColor: colors.lightgray,
  },
});
