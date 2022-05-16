import React, {useState} from 'react';
import {Text, View} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import BoldText from '@components/BoldText';
import {IUser} from '@interfaces/Post';
import {colors} from '@theme/colors';
import {styles} from './styles';
interface Props {
  user: IUser;
  comment: string;
}
const Comment = ({user, comment}: Props) => {
  const [isLiked, setIsLiked] = useState<boolean>(false);

  const toggleLike = () => {
    setIsLiked(isLiked => !isLiked);
  };
  return (
    <View
      style={{flexDirection: 'row', alignItems: 'center', marginHorizontal: 5}}>
      <Text style={{color: colors.black, flex: 1}}>
        <BoldText>{user.username}</BoldText> {comment}
      </Text>
      <AntDesign
        onPress={toggleLike}
        name={isLiked ? 'heart' : 'hearto'}
        size={15}
        style={styles.icon}
        color={isLiked ? 'red' : colors.black}
      />
    </View>
  );
};

export default Comment;
