import React, {useRef, useState} from 'react';
import {
  ViewToken,
  ViewabilityConfig,
  FlatList,
  View,
  ActivityIndicator,
  Text,
  RefreshControl,
} from 'react-native';
import Post from '@components/Post';
import {API, graphqlOperation} from 'aws-amplify';
import {
  GetPostsByDateQuery,
  GetPostsByDateQueryVariables,
  ListPostsQuery,
  ListPostsQueryVariables,
  ModelAttributeTypes,
  ModelSortDirection,
  Post as IPost,
} from 'src/API';
import {gql, useQuery} from '@apollo/client';
import {listPosts} from './queries';
import Loading from '@components/Loading';
import ApiErrorMessage from '@components/ApiErrorMessage';
import Pressable from '@components/Pressable';

interface IOnViewableItemsChanged {
  viewableItems: ViewToken[];
  changed: ViewToken[];
}
const viewabilityConfig: ViewabilityConfig = {
  itemVisiblePercentThreshold: 50,
};

const FeedScreen = () => {
  const [currentItem, setCurrentItem] = useState<null | string>(null);
  const {data, loading, error, refetch} = useQuery<
    GetPostsByDateQuery,
    GetPostsByDateQueryVariables
  >(listPosts, {
    variables: {sortDirection: ModelSortDirection.DESC, type: 'POST'},
  });

  //esta es la funcion que especifica los items que estan en pantalla
  const onViewableItemsChanged = useRef(
    ({viewableItems}: IOnViewableItemsChanged) => {
      if (viewableItems.length) {
        setCurrentItem(viewableItems[0].item.id);
      }
    },
  );

  if (error) {
    return (
      <ApiErrorMessage
        title="Error fetching posts..."
        message={error.message}
      />
    );
  }

  if (loading) {
    return <Loading text="loading posts..." />;
  }

  const posts = (data?.getPostsByDate?.items ?? []).filter(
    post => !post?._deleted,
  );

  console.log({posts});

  if (!posts.length) {
    return (
      <Text style={{alignItems: 'center'}}>
        no post so far! create one
        {/* 
          HACER QUE NAVEGUE A LA PANTALLA PARA CREAR POSTS
        <Pressable style={{alignItems: 'center'}} onPress={()=>nav}>
          <Text style={{textAlign: 'center'}}>create one!</Text>
        </Pressable> */}
      </Text>
    );
  }

  return (
    <FlatList
      data={posts}
      renderItem={({item}) =>
        item && <Post post={item} isVisible={currentItem === item.id} />
      }
      viewabilityConfig={viewabilityConfig}
      onViewableItemsChanged={onViewableItemsChanged.current}
      showsVerticalScrollIndicator={false}
      refreshing={loading}
      onRefresh={refetch}
    />
  );
};

export default FeedScreen;
