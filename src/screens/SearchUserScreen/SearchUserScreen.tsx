import {FlatList, View} from 'react-native';
import React from 'react';
import comments from '@assets/comments.json';
import UserItem from '@components/UserItem';
import {listSearchUsers} from './queries';
import {useQuery} from '@apollo/client';
import {ListUsersQuery, ListUsersQueryVariables} from 'src/API';
import ApiErrorMessage from '@components/ApiErrorMessage';
import Loading from '@components/Loading';
import {useNavigation} from '@react-navigation/native';
import {SearchScreenNavigationProp} from '@navigation/types';

const users = comments.map(comment => comment.user);

const SearchUserScreen = () => {
  const {data, loading, error, refetch} = useQuery<
    ListUsersQuery,
    ListUsersQueryVariables
  >(listSearchUsers);

  const navigation = useNavigation<SearchScreenNavigationProp>();

  const onPressUser = (userId: string, username: string) => {
    navigation.navigate('ProfileStack', {
      screen: 'Profile',
      params: {userId, username},
    });
  };

  const users = data?.listUsers?.items.filter(user => !user?._deleted);

  if (error) {
    return (
      <ApiErrorMessage
        title="error searching users... "
        message={error.message}
        onRetry={refetch}
      />
    );
  }

  if (loading) {
    return <Loading text="loading users..." />;
  }

  return (
    <View>
      <FlatList
        data={users}
        ItemSeparatorComponent={() => <View style={{padding: 5}} />}
        renderItem={({item}) => (
          <UserItem
            username={item?.username}
            name={item?.name ?? ''}
            image={item?.image}
            onPressUser={() =>
              onPressUser(item?.id as string, item?.username as string)
            }
          />
        )}
      />
    </View>
  );
};

export default SearchUserScreen;
