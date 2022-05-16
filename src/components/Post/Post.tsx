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
import {IComment, IPost, IUser} from '@interfaces/Post';
import Comment from '@components/Comment';

const PostHeader = () => {
  return (
    <View
      style={{
        padding: 5,
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
            width: 40,
            height: 40,
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
interface FooterProps {
  nOfLikes: number;
  description: string;
  user: IUser;
  comments: IComment[];
  numOfComments: number;
}
const PostFooter = ({
  nOfLikes,
  description,
  user,
  comments,
  numOfComments,
}: FooterProps) => {
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
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginHorizontal: 10,
        }}>
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
        <BoldText>
          {isLiked ? `${nOfLikes + 1} others` : `${nOfLikes} others`}
        </BoldText>
      </Text>
      {/* description */}
      <Text style={{color: colors.black, marginHorizontal: 5}}>
        <BoldText>{user.username}</BoldText> {description}
      </Text>
      <Text style={{color: colors.lightgray, marginHorizontal: 5}}>
        view all {numOfComments} comments
      </Text>
      {/* comments */}
      {comments.map(comment => (
        <Comment
          key={comment.id}
          user={comment.user}
          comment={comment.comment}
        />
      ))}
    </View>
  );
};
interface Props {
  post: IPost;
}
const Post = ({post}: Props) => {
  console.log('post executed');

  return (
    <View style={styles.post}>
      <PostHeader />
      <Image
        source={{
          uri: post.image,
        }}
        style={styles.postImage}
        resizeMode="cover"
      />
      <PostFooter
        nOfLikes={post.nofLikes}
        description={post.description}
        user={post.user}
        comments={post.comments}
        numOfComments={post.nofComments}
      />
    </View>
  );
};

export default Post;
