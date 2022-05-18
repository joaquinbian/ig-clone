import React from 'react';
import {View, Text, FlatList, ListRenderItem} from 'react-native';
import comments from '@assets/comments.json';
import Comment from '@components/Comment';
import Input from './Input';

const CommentsScreen = () => {
  return (
    <View style={{flex: 1}}>
      <FlatList
        data={comments}
        renderItem={({item}) => (
          <Comment
            comment={item.comment}
            user={item.user}
            image={item.user.image}
          />
        )}
        ItemSeparatorComponent={() => <View style={{marginVertical: 5}} />}
      />
      <Input />
    </View>
  );
};

export default CommentsScreen;
