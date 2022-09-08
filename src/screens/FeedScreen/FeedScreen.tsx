import React, {useEffect, useInsertionEffect, useRef, useState} from 'react';
import {ViewToken, ViewabilityConfig, FlatList, View} from 'react-native';
import posts from '@assets/posts.json';
import Post from '@components/Post';
import {API, graphqlOperation} from 'aws-amplify';
import {Post as IPost} from 'src/API';

interface IOnViewableItemsChanged {
  viewableItems: ViewToken[];
  changed: ViewToken[];
}
const viewabilityConfig: ViewabilityConfig = {
  itemVisiblePercentThreshold: 50,
};

export const listPosts = /* GraphQL */ `
  query ListPosts(
    $filter: ModelPostFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPosts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        description
        video
        image
        images
        numberOfComments
        numberOfLikes
        userID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        User {
          id
          name
          username
          image
        }
        Comments {
          items {
            id
            comment
            User {
              username
            }
          }
        }
      }
      nextToken
      startedAt
    }
  }
`;

const FeedScreen = () => {
  const [currentItem, setCurrentItem] = useState<null | string>(null);
  const [remotePosts, setRemotePosts] = useState<IPost[] | null>(null);

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

  const fetchPosts = async () => {
    const response = await API.graphql(graphqlOperation(listPosts));
    console.log(response.data.listPosts.items);

    setRemotePosts(response.data.listPosts.items);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <FlatList
      data={remotePosts}
      renderItem={({item}) => (
        <Post post={item} isVisible={currentItem === item.id} />
      )}
      viewabilityConfig={viewabilityConfig}
      onViewableItemsChanged={onViewableItemsChanged.current}
      keyExtractor={item => item.id}
      showsVerticalScrollIndicator={false}
    />
  );
};

export default FeedScreen;
