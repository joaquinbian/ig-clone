import React, {useState} from 'react';
import {Image, Text, View} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {Comment as IComment, User} from 'src/API';
import BoldText from '@components/BoldText';
import {colors} from '@theme/colors';
import {styles} from './styles';
import Pressable from '@components/Pressable';

interface Props {
  comment: IComment;
}
const Comment = ({comment}: Props) => {
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
      {comment.User?.image && (
        <Image source={{uri: comment.User?.image}} style={[styles.userImage]} />
      )}
      <View style={{flex: 1}}>
        <Text style={{color: colors.black}}>
          <BoldText>{comment.User?.username ?? 'rober'}</BoldText>{' '}
          {comment.comment}
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
