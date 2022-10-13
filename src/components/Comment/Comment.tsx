import React, {useState} from 'react';
import {Image, Text, View, TouchableOpacity} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {Comment as IComment, User} from 'src/API';
import BoldText from '@components/BoldText';
import {colors} from '@theme/colors';
import {styles} from './styles';
import Pressable from '@components/Pressable';
import {DEFAULT_USER_IMAGE} from 'src/config';

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
      <Image
        source={{uri: comment.User?.image ?? DEFAULT_USER_IMAGE}}
        style={[styles.userImage]}
      />
      <View style={{flex: 1, backgroundColor: 'red'}}>
        <View style={styles.usernameContainer}>
          <BoldText
            numberOfLines={1}
            style={{marginRight: 10, maxWidth: '85%'}}>
            {comment.User?.username ?? 'rober'}
          </BoldText>
          <Text style={styles.labelsFooterText}>5d</Text>
        </View>
        <TouchableOpacity
          //onPress={() => console.log('')}
          onLongPress={() => console.warn('que queres hacer pa', comment.id)}
          activeOpacity={0.6}
          delayLongPress={1000}>
          <Text style={{color: colors.black}}>{comment.comment}</Text>
          <Text style={styles.labelsFooterText}>5 likes</Text>
        </TouchableOpacity>
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
