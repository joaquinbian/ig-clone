import React, {useState} from 'react';
import {View, Text, Image} from 'react-native';
import {styles} from './styles';
import {colors} from '@theme/colors';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import BoldText from '@components/BoldText';

const Comment = ({user, comment}: {comment: string; user: string}) => {
  const [isLiked, setIsLiked] = useState<boolean>(false);

  const toggleLike = () => {
    setIsLiked(isLiked => !isLiked);
  };
  return (
    <View style={{flexDirection: 'row', alignItems: 'center'}}>
      <Text style={{color: colors.black, flex: 1}}>
        <BoldText>{user}</BoldText> {comment}
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

const PostHeader = () => {
  return (
    <View
      style={{
        paddingHorizontal: 5,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Image
          source={{
            uri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/1.jpg',
          }}
          resizeMode="cover"
          style={{
            width: 50,
            height: 50,
            borderRadius: 25,
            marginRight: 10,
          }}
        />
        <BoldText style={{color: colors.black}}>joaquinbianchi</BoldText>
      </View>
      <SimpleLineIcons
        name="options-vertical"
        size={16}
        color="black"
        //  style={styles.threeDots}
      />
    </View>
  );
};

const PostFooter = () => {
  const [isLiked, setIsLiked] = useState<boolean>(false);
  const [isSaved, setIsSaved] = useState<boolean>(false);

  const toggleLike = () => {
    setIsLiked(isLiked => !isLiked);
  };

  const toggleSave = () => {
    setIsSaved(isSaved => !isSaved);
  };

  return (
    <View>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <AntDesign
          onPress={toggleLike}
          name={isLiked ? 'heart' : 'hearto'}
          size={24}
          style={styles.icon}
          color={isLiked ? 'red' : colors.black}
        />
        <Ionicons
          name="chatbubble-outline"
          size={24}
          style={styles.icon}
          color={colors.black}
        />
        <Feather
          name="send"
          size={24}
          style={styles.icon}
          color={colors.black}
        />
        <FontAwesome
          onPress={toggleSave}
          name={isSaved ? 'bookmark' : 'bookmark-o'}
          size={24}
          style={{marginLeft: 'auto', marginHorizontal: 5}}
          color={colors.black}
        />
      </View>
      {/* likes */}
      <Text style={styles.postInfo}>
        liked by <BoldText>vadim sadim</BoldText> and{' '}
        <BoldText>85 others</BoldText>
      </Text>
      {/* description */}
      <Text style={{color: colors.black}}>
        <BoldText>joaquin bianchi</BoldText> djsajdsajdsajdjsadjs djsajsanfndsaf
        kjsankjsnfkjsanfkjsnsjnkjsanf nfskjnfjsanfs
      </Text>
      {/* comments */}
      <Comment user="vadimsadim" comment="hola joaqui com andas ajajadjada" />
    </View>
  );
};

const Post = () => {
  console.log('post executed');

  return (
    <View style={styles.post}>
      <PostHeader />
      <Image
        source={{
          uri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/images/1.jpg',
        }}
        style={{width: '100%', aspectRatio: 1}}
        resizeMode="cover"
      />
      <PostFooter />
    </View>
  );
};

export default Post;
