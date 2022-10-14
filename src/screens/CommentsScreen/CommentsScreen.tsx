import React from 'react';
import {View, FlatList, Text} from 'react-native';
import comments from '@assets/comments.json';
import Comment from '@components/Comment';
import Input from './Input';
import {useRoute} from '@react-navigation/native';
import {CommentsRouteProp} from '@navigation/types';
import {useQuery} from '@apollo/client';
import {getCommentsByPost} from './queries';
import {GetCommentsByPostQuery, GetCommentsByPostQueryVariables} from 'src/API';
import Loading from '@components/Loading';
import ApiErrorMessage from '@components/ApiErrorMessage';
import {useAuthContext} from '@context/AuthContext';

const CommentsScreen = () => {
  const route = useRoute<CommentsRouteProp>();

  const {postId} = route.params;

  const {data, loading, error} = useQuery<
    GetCommentsByPostQuery,
    GetCommentsByPostQueryVariables
  >(getCommentsByPost, {variables: {postID: postId}});

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
          />
        )}
      </View>
      <Input postId={postId} />
    </>
  );
};

export default CommentsScreen;
