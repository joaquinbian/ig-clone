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
import {Post as IPost} from 'src/API';
import {useAuthContext} from '@context/AuthContext';
import {size, weight} from '@theme/fonts';
import {colors} from '@theme/colors';

interface IPostOptions {
  post: IPost;
}

export default function PostOptions({post}: IPostOptions) {
  const {userId} = useAuthContext();
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
            <MenuOption onSelect={() => Alert.alert(`Delete`)}>
              <Text style={[styles.optionText, {color: 'red'}]}>Delete</Text>
            </MenuOption>
            <MenuOption onSelect={() => Alert.alert(`edit`)}>
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
