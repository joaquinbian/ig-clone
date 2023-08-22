import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useQuery} from '@apollo/client';
import {userFollowers} from './queries';
import {UserFollowersQuery, UserFollowersQueryVariables} from 'src/API';
import Loading from '@components/Loading';
import UserItem from '@components/UserItem/UserItem';
import ApiErrorMessage from '@components/ApiErrorMessage/ApiErrorMessage';

interface UserFollowersProps {
  followeeID: string;
}
export default function UserFollowers({followeeID}: UserFollowersProps) {
  const {data, loading, error, refetch} = useQuery<
    UserFollowersQuery,
    UserFollowersQueryVariables
  >(userFollowers, {variables: {followeeID}});

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return (
      <ApiErrorMessage
        onRetry={refetch}
        title="error fetching user followers"
        message={error.message}
      />
    );
  }

  const USER_FOLLOWERS = data?.userFollowers?.items.filter(i => !i?._deleted);

  return (
    <View>
      <FlatList
        data={USER_FOLLOWERS}
        ItemSeparatorComponent={() => <View style={{padding: 5}} />}
        renderItem={({item}) => (
          <UserItem
            username={item?.Follower?.username}
            name={item?.Follower?.name ?? ''}
            image={item?.Follower?.image}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
