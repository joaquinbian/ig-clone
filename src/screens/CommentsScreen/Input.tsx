import Pressable from '@components/Pressable';
import React, {useState} from 'react';
import {View, Text, Image, TextInput, StyleSheet} from 'react-native';
import {colors} from '@theme/colors';
import {weight} from '@theme/fonts';

const Input = () => {
  const [text, setText] = useState<string>('');

  const onPost = () => {
    //send to backend
    console.warn(text);
    setText('');
  };
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/2.jpg',
        }}
        style={styles.avatar}
      />
      <TextInput
        placeholder="add your comment..."
        multiline
        value={text}
        onChangeText={setText}
        style={styles.input}
      />
      <Pressable style={styles.button} onPress={onPost}>
        <Text style={{color: colors.primary, fontWeight: weight.bold}}>
          Post
        </Text>
      </Pressable>
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderTopWidth: 1,
    borderColor: colors.lightgray,
    padding: 3,
    alignItems: 'flex-end',
  },
  button: {marginBottom: 10},
  avatar: {width: 40, aspectRatio: 1, borderRadius: 20},
  input: {
    flex: 1,
    marginHorizontal: 3,
  },
});
