import useUserAvatar from '@hooks/useUserAvatar/useUserAvatar';
import {styles} from './styles';
import {Image, Text, View} from 'react-native';
import {User} from 'src/API';
import {DEFAULT_USER_IMAGE} from 'src/config';

export default function UserItem({
  username,
  image,
  name,
}: Pick<User, 'username' | 'name' | 'image'>) {
  const avatar = useUserAvatar(image);

  return (
    <View style={styles.container}>
      <Image
        source={{uri: avatar ?? DEFAULT_USER_IMAGE}}
        style={styles.image}
      />
      <View>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.username}>{username}</Text>
      </View>
    </View>
  );
}
