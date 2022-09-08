import React, {useCallback, useMemo, useState} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {styles} from './styles';
import {colors} from '@theme/colors';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import BoldText from '@components/BoldText';
import Comment from '@components/Comment';
import Pressable from '@components/Pressable';
import Carousel from '@components/Carousel';
import VideoPlayer from '@components/VideoPlayer';
import {useNavigation} from '@react-navigation/native';
import {FeedNavigatorProps} from '@navigation/types';
import {Post as IPost} from 'src/API';

interface Props {
  post: IPost;
  isVisible?: boolean;
}
const Post = ({post, isVisible}: Props) => {
  const [isLiked, setIsLiked] = useState<boolean>(false);
  const [isSaved, setIsSaved] = useState<boolean>(false);
  const [viewMore, setViewMore] = useState<boolean>(false);
  const navigation = useNavigation<FeedNavigatorProps>();

  const isTooLong = useMemo(
    () => post?.description?.length ?? 0 >= 20,
    [post?.description],
  );

  const likePost = useCallback(() => {
    setIsLiked(true);
  }, []);
  const toggleLike = () => {
    setIsLiked(isLiked => !isLiked);
  };

  const toggleSave = () => {
    setIsSaved(isSaved => !isSaved);
  };

  const toggleViewMore = () => {
    setViewMore(viewMore => !viewMore);
  };

  const navigateToComments = () => {
    navigation.navigate('Comments', {postId: post.id});
  };
  const navigateToProfile = () => {
    navigation.navigate('UserProfile', {userId: post.userID});
    //navigation.popToTop() nos lleva al primer screen en el stack
  };
  return (
    <View style={styles.post}>
      {/* POST HEADER */}
      <View style={styles.postHeader}>
        <Pressable onPress={navigateToProfile} style={styles.userInfo}>
          <Image
            source={{
              uri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/1.jpg',
            }}
            resizeMode="cover"
            style={styles.avatar}
          />
          <BoldText style={{color: colors.black}}>
            {post.User?.name ?? 'valeria'}
          </BoldText>
        </Pressable>
        <SimpleLineIcons name="options-vertical" size={16} color="black" />
      </View>

      {/* POST IMAGE */}

      {post.image && (
        <Pressable onDoublePress={likePost}>
          <Image
            source={{
              uri: post.image,
            }}
            style={styles.postImage}
            resizeMode="cover"
          />
        </Pressable>
      )}
      {post.images && <Carousel images={post.images} onLikePost={likePost} />}
      {post.video && (
        <VideoPlayer
          source={post.video}
          isVisible={isVisible}
          onLikePost={likePost}
        />
      )}

      {/* POST FOOTER */}

      <View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginHorizontal: 10,
          }}>
          <TouchableOpacity onPress={toggleLike} activeOpacity={0.9}>
            <AntDesign
              name={isLiked ? 'heart' : 'hearto'}
              size={24}
              style={styles.icon}
              color={isLiked ? 'red' : colors.black}
            />
          </TouchableOpacity>
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
            {isLiked
              ? `${post.numberOfLikes + 1} others`
              : `${post.numberOfLikes} others`}
          </BoldText>
        </Text>
        {/* description */}
        <Text
          style={{color: colors.black, marginHorizontal: 5}}
          numberOfLines={isTooLong && !viewMore ? 2 : 0}>
          <BoldText>{post.User?.username ?? 'el pepe'}</BoldText>{' '}
          {post.description}
        </Text>
        {isTooLong && !viewMore && (
          <Text
            style={{color: colors.lightgray, marginHorizontal: 5}}
            onPress={toggleViewMore}>
            view more
          </Text>
        )}
        <Pressable onPress={navigateToComments}>
          <Text style={{color: colors.lightgray, marginHorizontal: 5}}>
            view all {post.numberOfComments} comments
          </Text>
        </Pressable>
        {/* comments */}
        {post.Comments?.items.map(
          comment => comment && <Comment comment={comment} />,
        )}
      </View>
    </View>
  );
};

export default Post;
