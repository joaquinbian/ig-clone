/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {colors} from '@theme/colors';
import {Post} from 'src/API';
import {DEFAULT_USER_IMAGE} from 'src/config';
import useUserAvatar from '@hooks/useUserAvatar/useUserAvatar';

interface IFeedGridItem {
  post: Post;
}
const FeedGridItem = ({post}: IFeedGridItem) => {
  const image = useUserAvatar(post.images ? post.images[0] : post.image);
  return (
    <View
      style={{
        flex: 1,
        aspectRatio: 1,
        padding: 1,
        maxWidth: '33.33%',
      }}>
      <Image
        source={{
          uri: image ?? DEFAULT_USER_IMAGE,
        }}
        style={{
          flex: 1,
        }}
        loadingIndicatorSource={{uri: image ?? DEFAULT_USER_IMAGE}}
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
