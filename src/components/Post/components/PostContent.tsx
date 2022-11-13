import {ActivityIndicator, StyleSheet, Text, View, Image} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Post} from 'src/API';
import Pressable from '@components/Pressable';
import Carousel from '@components/Carousel';
import VideoPlayer from '@components/VideoPlayer';
import {styles} from '../styles';
import {Storage} from 'aws-amplify';
import {PossibleTypeExtensions} from 'graphql/validation/rules/PossibleTypeExtensions';

interface IPostContent {
  post: Post;
  onLikePost: () => void;
  isVisible: boolean;
}

export default function PostContent({
  post,
  isVisible,
  onLikePost,
}: IPostContent) {
  const [image, setImage] = useState<string | null>(null);
  useEffect(() => {
    downloadMedia();
  }, []);

  const downloadMedia = async () => {
    try {
      if (post.image) {
        const uri = await Storage.get(post.image);
        setImage(uri);
      }
    } catch (error) {}
  };

  if (image) {
    return (
      <Pressable onDoublePress={onLikePost}>
        <Image
          source={{uri: post.image?.startsWith('http') ? post.image : image}}
          style={styles.postImage}
          resizeMode="cover"
        />
      </Pressable>
    );
  } else if (post.images) {
    return <Carousel images={post.images} onLikePost={onLikePost} />;
  } else if (post.video) {
    <VideoPlayer
      source={post.video}
      isVisible={isVisible}
      onLikePost={onLikePost}
    />;
  }
  return (
    <View
      style={[
        styles.postImage,
        {alignItems: 'center', justifyContent: 'center'},
      ]}>
      <ActivityIndicator />
    </View>
  );
}
