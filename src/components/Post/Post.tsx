import React, {useState} from 'react';
import {View, Text, Image} from 'react-native';
import {styles} from './styles';
import {colors} from '../../theme/colors';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import {weight} from '../../theme/fonts';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
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
        <Text style={{color: colors.black, fontWeight: weight.bold}}>
          joaquinbianchi
        </Text>
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

  const toggleLike = () => {
    setIsLiked(isLiked => !isLiked);
  };

  return (
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
      <Feather name="send" size={24} style={styles.icon} color={colors.black} />
      <Feather
        name="bookmark"
        size={24}
        style={{marginLeft: 'auto'}}
        color={colors.black}
      />
    </View>
  );
};

const Post = () => {
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
