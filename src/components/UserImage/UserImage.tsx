import {StyleProp, ImageStyle, Image} from 'react-native';
import React, {useState, useEffect} from 'react';
import {DEFAULT_USER_IMAGE} from 'src/config';
import {styles} from './styles';
import {Storage} from 'aws-amplify';
import useUserAvatar from '@hooks/useUserAvatar/useUserAvatar';

interface IUserImage {
  image?: string | undefined | null;
  width?: number;
  style?: StyleProp<ImageStyle>;
}
export default function UserImage({
  image,
  width = 100,
  style = {},
}: IUserImage) {
  const avatar = useUserAvatar(image);

  return (
    <Image
      source={{uri: image ? avatar : DEFAULT_USER_IMAGE}}
      style={[styles.avatar, style]}
    />
  );
}
