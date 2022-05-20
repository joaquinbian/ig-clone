import React from 'react';
import {View, Text, Image, useWindowDimensions, StyleSheet} from 'react-native';
import {IPost} from '@interfaces/Post';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {colors} from '@theme/colors';

interface IFeedGridItem {
  post: IPost;
}
const FeedGridItem = ({post}: IFeedGridItem) => {
  const {width} = useWindowDimensions();

  return (
    <View
      style={{
        flex: 1,
        aspectRatio: 1,
        padding: 1,
        //check 33.33%
        maxWidth: '33.33%',
      }}>
      <Image
        source={{uri: post.images ? post.images[0] : post.image}}
        style={{
          flex: 1,
        }}
      />
      {post.images && (
        <MaterialIcons
          name="collections"
          color={colors.white}
          size={16}
          style={styles.icon}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  icon: {position: 'absolute', right: 5, top: 5},
});

export default FeedGridItem;
