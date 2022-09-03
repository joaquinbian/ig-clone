import React, {useRef, useState} from 'react';
import {ViewToken, ViewabilityConfig, FlatList, View} from 'react-native';
import posts from '@assets/posts.json';
import Post from '@components/Post';
interface IOnViewableItemsChanged {
  viewableItems: ViewToken[];
  changed: ViewToken[];
}
const viewabilityConfig: ViewabilityConfig = {
  itemVisiblePercentThreshold: 50,
};
const FeedScreen = () => {
  const [currentItem, setCurrentItem] = useState<null | string>(null);

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
  return (
    <FlatList
      data={posts}
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
