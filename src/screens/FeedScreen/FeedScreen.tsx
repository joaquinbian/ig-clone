import React, {useRef, useState} from 'react';
import {
  ViewToken,
  ViewabilityConfig,
  FlatList,
  View,
  ActivityIndicator,
  Text,
} from 'react-native';
import Post from '@components/Post';
import {API, graphqlOperation} from 'aws-amplify';
import {ListPostsQuery, ListPostsQueryVariables, Post as IPost} from 'src/API';
import {gql, useQuery} from '@apollo/client';
import {listPosts} from './queries';
import Loading from '@components/Loading/Loading';

interface IOnViewableItemsChanged {
  viewableItems: ViewToken[];
  changed: ViewToken[];
}
const viewabilityConfig: ViewabilityConfig = {
  itemVisiblePercentThreshold: 50,
};

const FeedScreen = () => {
  const [currentItem, setCurrentItem] = useState<null | string>(null);
  const {data, loading, error} = useQuery<
    ListPostsQuery,
    ListPostsQueryVariables
  >(listPosts, {});

  //esta es la funcion que especifica los items que estan en pantalla
  const onViewableItemsChanged = useRef(
    ({viewableItems}: IOnViewableItemsChanged) => {
      //console.log('Visible items in feed screen are', viewableItems);
      // console.log('Changed in this iteration', changed);
      if (viewableItems.length) {
        setCurrentItem(viewableItems[0].item.id);
      }
    },
  );
  /* 
  const fetchPosts = async () => {
    const response = await API.graphql(graphqlOperation(listPosts));

    setRemotePosts(response.data.listPosts.items);
  };

  useEffect(() => {
    fetchPosts();
  }, []);
 */

  if (loading) {
    return <Loading text="loading posts..." />;
  }

  return (
    <FlatList
      data={data?.listPosts?.items}
      renderItem={({item}) =>
        item && <Post post={item} isVisible={currentItem === item.id} />
      }
      viewabilityConfig={viewabilityConfig}
      onViewableItemsChanged={onViewableItemsChanged.current}
      showsVerticalScrollIndicator={false}
    />
  );
};

export default FeedScreen;
