import React, {useCallback, useMemo, useState} from 'react';
import {View, Text, Image, TouchableOpacity, Alert} from 'react-native';
import {styles} from './styles';
import {colors} from '@theme/colors';
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
import {Post as IPost, Like as ILike} from 'src/API';
import {DEFAULT_USER_IMAGE} from 'src/config';

import PostOptions from './components/PostOptions';
import {useLikes} from '@hooks/useLikes/useLikes';
import {size} from '@theme/fonts';
import dayjs from 'dayjs';
import PostContent from './components/PostContent';

interface Props {
  post: IPost;
  isVisible?: boolean;
}

const Post = ({post, isVisible}: Props) => {
  const [isSaved, setIsSaved] = useState<boolean>(false);
  const [viewMore, setViewMore] = useState<boolean>(false);
  const navigation = useNavigation<FeedNavigatorProps>();
  const {toggleLike, isLiked, onLikePost: likePost} = useLikes(post);

  const isTooLong = useMemo(
    () => post?.description?.length ?? 0 >= 20,
    [post?.description],
  );

  const onLikePost = useCallback(async () => {
    //setIsLiked(true);
    if (!isLiked) {
      likePost();
    }
  }, []);

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
    navigation.navigate('UserProfile', {
      userId: post.userID,
      username: post.User?.username ?? undefined,
    });
    //nos lleva al primer screen en el stack
    //navigation.popToTop();
  };

  const navigateToPostLikes = () => {
    navigation.navigate('PostLikesScreen', {postID: post.id});
  };

  const postLikes = post.Likes?.items.filter(like => !like?._deleted) ?? [];

  /*   const COMMENTS_FILTERED =
    post.Comments?.items.filter(comment => !comment?._deleted) ?? []; */
  //console.log({postLikes}, post.description, post.id);

  return (
    <View style={styles.post}>
      {/* POST HEADER */}
      <View style={styles.postHeader}>
        <Pressable onPress={navigateToProfile} style={styles.userInfo}>
          <Image
            source={{
              uri: post.User?.image ?? DEFAULT_USER_IMAGE,
            }}
            resizeMode="cover"
            style={styles.avatar}
          />
          <BoldText style={{color: colors.black}}>
            {post.User?.name ?? 'valeria'}
          </BoldText>
        </Pressable>
        <PostOptions post={post} />
      </View>

      {/* POST IMAGE */}

      <PostContent
        post={post}
        isVisible={!!isVisible}
        onLikePost={onLikePost}
      />

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
        {postLikes.length === 0 ? (
          <Text
            style={[styles.postInfo, {color: colors.gray, marginVertical: 3}]}>
            Be the first person on like the post!
          </Text>
        ) : (
          <Text style={styles.postInfo}>
            liked by <BoldText>{postLikes[0]?.User?.username!}</BoldText>
            {postLikes.length > 1 && (
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={navigateToPostLikes}
                style={{alignSelf: 'center'}}>
                <Text style={{textAlign: 'center', alignSelf: 'center'}}>
                  {' '}
                  and
                  <BoldText>{` ${post.numberOfLikes - 1} others`}</BoldText>
                </Text>
              </TouchableOpacity>
            )}
          </Text>
        )}

        {/* description */}
        {post.description?.length && (
          <Text
            style={{color: colors.black, marginHorizontal: 5}}
            numberOfLines={isTooLong && !viewMore ? 2 : 0}>
            <BoldText>{post.User?.name ?? 'el pepe'}</BoldText>{' '}
            {post.description ?? 'description'}
          </Text>
        )}
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
        <Text
          style={{
            color: colors.lightgray,
            marginHorizontal: 5,
            fontSize: size.sm,
          }}>
          {dayjs(post.createdAt).fromNow()}
        </Text>
        {/* comments */}
        {/*  {COMMENTS_FILTERED.map(
          comment => comment && <Comment comment={comment} key={comment.id} />,
        )} */}
      </View>
    </View>
  );
};

export default Post;
