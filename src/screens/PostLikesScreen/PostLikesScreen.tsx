import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useRoute} from '@react-navigation/native';
import {PostLikesRouteProp} from '@navigation/types';
import {useQuery} from '@apollo/client';
import {likeForPostByUserId} from './queries';
import {
  LikeForPostByUserIdQuery,
  LikeForPostByUserIdQueryVariables,
} from 'src/API';
import Loading from '@components/Loading';
import UserItem from '@components/UserItem';
import ApiErrorMessage from '@components/ApiErrorMessage';

export default function PostLikesScreen() {
  const route = useRoute<PostLikesRouteProp>();
  const {postID} = route.params;
  const {data, loading, error, refetch} = useQuery<
    LikeForPostByUserIdQuery,
    LikeForPostByUserIdQueryVariables
  >(likeForPostByUserId, {variables: {postID}});

  const LIKES_FILTERED = data?.likeForPostByUserId?.items.filter(
    likes => !likes?._deleted,
  );

  if (loading) {
    return <Loading text="loading users..." />;
  }

  if (error) {
    return <ApiErrorMessage message="error fetching users..." title="error" />;
  }
  return (
    <View style={{flex: 1}}>
      <FlatList
        style={{flex: 1}}
        data={LIKES_FILTERED}
        renderItem={({item}) => (
          <UserItem
            name={item?.User?.name!}
            username={item?.User?.username}
            image={item?.User?.image}
          />
        )}
        onRefresh={refetch}
        refreshing={loading}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
