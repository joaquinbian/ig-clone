import {StyleProp, ImageStyle, Image} from 'react-native';
import React, {useState, useEffect} from 'react';
import {DEFAULT_USER_IMAGE} from 'src/config';
import {styles} from './styles';
import {Storage} from 'aws-amplify';

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
  const [avatar, setAvatar] = useState<string | undefined>();
  useEffect(() => {
    getUserAvatar();
  }, []);

  const getUserAvatar = async () => {
    try {
      if (image) {
        const userAvatar = await Storage.get(image);
        setAvatar(userAvatar);
      }
    } catch (error) {}
  };
  return (
    <Image
      source={{uri: image ? avatar : DEFAULT_USER_IMAGE}}
      style={[styles.avatar, style]}
    />
  );
}
