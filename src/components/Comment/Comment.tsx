import React, {useState} from 'react';
import {Image, Text, View} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import BoldText from '@components/BoldText';
import {IUser} from '@interfaces/Post';
import {colors} from '@theme/colors';
import {styles} from './styles';
import Pressable from '@components/Pressable';
interface Props {
  user: IUser;
  comment: string;
  image?: string;
}
const Comment = ({user, comment, image}: Props) => {
  const [isLiked, setIsLiked] = useState<boolean>(false);

  const toggleLike = () => {
    setIsLiked(isLiked => !isLiked);
  };
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 5,
        // flex: 1,
      }}>
      {image && <Image source={{uri: image}} style={[styles.userImage]} />}
      <View style={{flex: 1}}>
        <Text style={{color: colors.black}}>
          <BoldText>{user.username}</BoldText> {comment}
        </Text>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Text style={{color: colors.lightgray, marginHorizontal: 5}}>5d</Text>
          <Text style={{color: colors.lightgray, marginHorizontal: 5}}>
            5 likes
          </Text>
          <Text style={{color: colors.lightgray, marginHorizontal: 5}}>
            reply
          </Text>
        </View>
      </View>
      <Pressable onPress={toggleLike} hitSlop={15}>
        <AntDesign
          name={isLiked ? 'heart' : 'hearto'}
          size={15}
          style={[styles.icon]}
          color={isLiked ? 'red' : colors.black}
        />
      </Pressable>
    </View>
  );
};

export default Comment;
