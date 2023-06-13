import {Storage} from 'aws-amplify';
import React from 'react';
export default function useUserAvatar(image: string | null | undefined) {
  const [avatar, setAvatar] = React.useState<string | undefined>();

  React.useEffect(() => {
    getUserAvatar();
  }, [image]);

  const getUserAvatar = async () => {
    try {
      if (image) {
        const userAvatar = await Storage.get(image);
        setAvatar(userAvatar);
      }
    } catch (error) {}
  };

  if (!image) return null;

  return avatar;
}
