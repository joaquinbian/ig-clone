import useUserAvatar from '@hooks/useUserAvatar/useUserAvatar';
import {styles} from './styles';
import {Image, Text, View} from 'react-native';
import {User} from 'src/API';
import {DEFAULT_USER_IMAGE} from 'src/config';
import Pressable from '@components/Pressable/Pressable';

interface UserItemProps {
  onPressUser?: () => void;
}
export default function UserItem({
  username,
  image,
  name,
  onPressUser,
}: Pick<User, 'username' | 'name' | 'image'> & UserItemProps) {
  const avatar = useUserAvatar(image);

  return (
    <Pressable onPress={onPressUser} style={styles.container}>
      <Image
        source={{uri: avatar ?? DEFAULT_USER_IMAGE}}
        style={styles.image}
      />
      <View>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.username}>{username}</Text>
      </View>
    </Pressable>
  );
}
