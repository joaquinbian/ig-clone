import React, {useEffect, useState} from 'react';
import {View, FlatList, Text, ActivityIndicator} from 'react-native';
import comments from '@assets/comments.json';
import Comment from '@components/Comment';
import Input from './Input';
import {useRoute} from '@react-navigation/native';
import {CommentsRouteProp} from '@navigation/types';
import {useQuery} from '@apollo/client';
import {
  getCommentsByPost,
  onCreateCommentByPostIdSubscription,
} from './queries';
import {
  GetCommentsByPostQuery,
  GetCommentsByPostQueryVariables,
  ModelSortDirection,
  OnCreateCommentByPostIdSubscription,
  OnCreateCommentByPostIdSubscriptionVariables,
} from 'src/API';
import Loading from '@components/Loading';
import ApiErrorMessage from '@components/ApiErrorMessage';
import {colors} from '@theme/colors';

const CommentsScreen = () => {
  const route = useRoute<CommentsRouteProp>();
  const [isFetchingMore, setIsFetchingMore] = useState(false);

  const {postId} = route.params;

  const {data, loading, error, fetchMore, subscribeToMore} = useQuery<
    GetCommentsByPostQuery,
    GetCommentsByPostQueryVariables
  >(getCommentsByPost, {
    variables: {
      postID: postId,
      sortDirection: ModelSortDirection.DESC,
      limit: 10,
    },
  });

  useEffect(() => {
    if (!subscribeToMore) {
      return;
    }
    subscribeToMore<
      OnCreateCommentByPostIdSubscription,
      OnCreateCommentByPostIdSubscriptionVariables
    >({
      document: onCreateCommentByPostIdSubscription,
      variables: {
        postID: postId,
      },

      updateQuery: (prev, {subscriptionData}) => {
        if (!subscriptionData.data) return prev;
        const newComment = subscriptionData.data.onCreateCommentByPostId;

        return Object.assign({}, prev, {
          getCommentsByPost: {
            ...prev.getCommentsByPost,
            items: [newComment],
          },
        });
      },
    });
  }, [subscribeToMore]);

  if (loading) {
    return <Loading text="loading comments..." />;
  }

  if (error) {
    return (
      <ApiErrorMessage
        title="error fetching comments"
        message={error.message}
      />
    );
  }

  const COMMENTS_FILTERED =
    data?.getCommentsByPost?.items.filter(comment => !comment?._deleted) ?? [];

  //console.log(postId, {userId});
  //console.log({COMMENTS_FILTERED});

  const nextToken = data?.getCommentsByPost?.nextToken;
  //console.log({nextToken});

  const loadComments = async () => {
    if (!nextToken || isFetchingMore) {
      return;
    }

    setIsFetchingMore(true);
    const response = await fetchMore({variables: {nextToken}});
    //console.log('Loading more comments');4
    console.log({response}, 'is fetching mroe');

    setIsFetchingMore(false);
  };

  return (
    <>
      <View style={{flex: 1}}>
        {COMMENTS_FILTERED.length === 0 ? (
          <Text>Be the first one on comment the post!</Text>
        ) : (
          <FlatList
            data={COMMENTS_FILTERED}
            renderItem={({item}) => item && <Comment comment={item} />}
            ItemSeparatorComponent={() => <View style={{marginVertical: 5}} />}
            onEndReached={loadComments}
            ListFooterComponent={
              <View style={{opacity: isFetchingMore ? 1 : 0}}>
                <ActivityIndicator
                  color={colors.primary}
                  style={{alignSelf: 'center'}}
                />
              </View>
            }
          />
        )}
      </View>
      <Input postId={postId} />
    </>
  );
};

export default CommentsScreen;
