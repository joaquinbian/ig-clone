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
  const [isFetchingMore, setIsFetchingMore] = useState(false);
  const {data, loading, error, refetch, fetchMore} = useQuery<
    GetPostsByDateQuery,
    GetPostsByDateQueryVariables
  >(listPosts, {
    variables: {
      sortDirection: ModelSortDirection.DESC,
      type: 'POST',
      limit: 3,
    },
  });

  //esta es la funcion que especifica los items que estan en pantalla
  const onViewableItemsChanged = useRef(
    ({viewableItems}: IOnViewableItemsChanged) => {
      if (viewableItems.length) {
        setCurrentItem(viewableItems[0].item.id);
      }
    },
  );

  const nextToken = data?.getPostsByDate?.nextToken;
  const getMorePosts = async () => {
    setIsFetchingMore(true);
    console.log({nextToken, isFetchingMore});

    try {
      console.log('FETCHING MORE ');

      if (nextToken || !isFetchingMore) {
        //console.log('entro a busca mas');

        await fetchMore({variables: {nextToken}});
      }
    } catch (error) {
    } finally {
      setIsFetchingMore(false);
    }
  };

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
      onEndReached={getMorePosts}
      //onEndReachedThreshold={0.01}
      style={{flex: 1}}
      ListFooterComponent={
        <View
          style={{
            opacity: isFetchingMore ? 1 : 0,
            justifyContent: 'center',
            alignContent: 'center',
          }}>
          <ActivityIndicator color={colors.black} />
        </View>
      }
    />
  );
};

export default FeedScreen;
