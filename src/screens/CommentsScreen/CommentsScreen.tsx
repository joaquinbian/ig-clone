import React from 'react';
import {View, Text, FlatList, ListRenderItem} from 'react-native';
import comments from '@assets/comments.json';
import Comment from '@components/Comment';

const CommentsScreen = () => {
  return (
    <View>
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
    </View>
  );
};

export default CommentsScreen;
