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
import {colors} from '@theme/colors';
import {weight} from '@theme/fonts';

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

  if (!posts.length) {
    return (
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: 10,
        }}>
        <Text style={{color: colors.gray}}>No posts so far... </Text>
        <Pressable>
          <Text style={{color: colors.gray, fontWeight: weight.bold}}>
            create one!
          </Text>
        </Pressable>
      </View>
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
