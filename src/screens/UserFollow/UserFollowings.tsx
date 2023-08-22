import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useRoute} from '@react-navigation/native';
import {useQuery} from '@apollo/client';
import {userFollowings} from './queries';
import {UserFollowingsQuery, UserFollowingsQueryVariables} from 'src/API';
import Loading from '@components/Loading';
import UserItem from '@components/UserItem/UserItem';
import ApiErrorMessage from '@components/ApiErrorMessage/ApiErrorMessage';

interface UserFollowingsProps {
  followerID: string;
}
export default function UserFollowings({followerID}: UserFollowingsProps) {
  const {data, loading, error, refetch} = useQuery<
    UserFollowingsQuery,
    UserFollowingsQueryVariables
  >(userFollowings, {variables: {followerID}});

  const USER_FOLLOWINGS = data?.userFollowings?.items.filter(i => !i?._deleted);

  if (loading) {
    return <Loading />;
  }
  if (error) {
    return (
      <ApiErrorMessage
        onRetry={refetch}
        title="error fetching user followings"
        message={error.message}
      />
    );
  }
  return (
    <View>
      <FlatList
        data={USER_FOLLOWINGS}
        ItemSeparatorComponent={() => <View style={{padding: 5}} />}
        renderItem={({item}) => (
          <UserItem
            username={item?.Followee?.username}
            name={item?.Followee?.name ?? ''}
            image={item?.Followee?.image}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
