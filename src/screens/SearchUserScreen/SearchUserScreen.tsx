import {FlatList, View} from 'react-native';
import React from 'react';
import comments from '@assets/comments.json';
import UserItem from '@components/UserItem';

const users = comments.map(comment => comment.user);

const SearchUserScreen = () => {
  return (
    <View>
      <FlatList
        data={users}
        ItemSeparatorComponent={() => <View style={{padding: 5}} />}
        renderItem={({item}) => (
          <UserItem
            username={item.username}
            name={item.username}
            image={item.image}
          />
        )}
      />
    </View>
  );
};

export default SearchUserScreen;
