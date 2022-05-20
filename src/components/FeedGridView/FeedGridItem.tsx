import React from 'react';
import {View, Text, Image, useWindowDimensions, StyleSheet} from 'react-native';
import {IPost} from '@interfaces/Post';

interface IFeedGridItem {
  post: IPost;
}
const FeedGridItem = ({post}: IFeedGridItem) => {
  const {width} = useWindowDimensions();

  return (
    <View
      style={{
        flex: 1,
        maxWidth: width / 3,
        aspectRatio: 1,
        padding: 1,
      }}>
      <Image
        source={{uri: post.images ? post.images[0] : post.image}}
        style={{
          flex: 1,
        }}
      />
    </View>
  );
};

export default FeedGridItem;
