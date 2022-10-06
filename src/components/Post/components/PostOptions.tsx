import {Alert, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {
  Menu,
  MenuOption,
  MenuOptions,
  MenuTrigger,
} from 'react-native-popup-menu';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import {Post as IPost} from 'src/API';
import {useAuthContext} from '@context/AuthContext';

interface IPostOptions {
  post: IPost;
}

export default function PostOptions({post}: IPostOptions) {
  const {userId} = useAuthContext();
  return (
    <Menu
    //renderer={renderers.SlideInMenu}
    >
      <MenuTrigger>
        <SimpleLineIcons name="options-vertical" size={16} color="black" />
      </MenuTrigger>
      <MenuOptions
        customStyles={{
          optionsContainer: {marginTop: 25},
        }}>
        <MenuOption onSelect={() => Alert.alert(`Save`)} text="Save" />
        {post.userID === userId && (
          <>
            <MenuOption onSelect={() => Alert.alert(`Delete`)}>
              <Text style={{color: 'red'}}>Delete</Text>
            </MenuOption>
            <MenuOption onSelect={() => Alert.alert(`edit`)} text="Edit" />
          </>
        )}
      </MenuOptions>
    </Menu>
  );
}

const styles = StyleSheet.create({});
