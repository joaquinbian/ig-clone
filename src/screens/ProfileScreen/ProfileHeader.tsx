import Button from '@components/Button';
import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  Image,
  ActivityIndicator,
  Alert,
  Pressable,
} from 'react-native';
import {styles} from './styles';
import {colors} from '@theme/colors';
import {useNavigation, useRoute} from '@react-navigation/native';
import {ProfileNavigatorProps} from '@navigation/types';
import {Auth, Storage} from 'aws-amplify';
import {
  CreateUserFollowMutation,
  CreateUserFollowMutationVariables,
  DeleteUserFollowMutation,
  DeleteUserFollowMutationVariables,
  User,
  UserFollowersQueryVariables,
  UserFollowingsQuery,
} from 'src/API';
import {DEFAULT_USER_IMAGE} from 'src/config';
import {useAuthContext} from '@context/AuthContext';
import UserImage from '@components/UserImage';
import {createUserFollow, userFollowings, deleteUserFollow} from './queries';
import {useMutation, useQuery} from '@apollo/client';
type ProfileHeaderProps = Pick<
  User,
  | 'numberOfFollowers'
  | 'numberOfPosts'
  | 'numberOfFollowings'
  | 'name'
  | 'bio'
  | 'id'
  | 'image'
>;

const ProfileHeader = ({
  numberOfFollowers,
  numberOfPosts,
  name,
  bio,
  numberOfFollowings,
  id,
  image,
}: ProfileHeaderProps) => {
  const navigation = useNavigation<ProfileNavigatorProps>();
  const {user} = useAuthContext();

  const [follow, {loading}] = useMutation<
    CreateUserFollowMutation,
    CreateUserFollowMutationVariables
  >(createUserFollow, {
    variables: {
      input: {followeeID: id, followerID: user?.attributes?.sub},
    },
    refetchQueries: ['UserFollowings'],
  });
  const [unfollow, {loading: deleting}] = useMutation<
    DeleteUserFollowMutation,
    DeleteUserFollowMutationVariables
  >(deleteUserFollow);

  const {data: userFollowingData} = useQuery<
    UserFollowingsQuery,
    UserFollowersQueryVariables
  >(userFollowings, {
    variables: {
      followerID: user?.attributes?.sub,
      followeeID: {eq: id},
    },
  });

  const isUserFollowing = userFollowingData?.userFollowings?.items.filter(
    item => !item?._deleted,
  )[0];

  console.log(userFollowingData?.userFollowings?.items);

  const navigateToEditProfile = () => {
    navigation.navigate('EditProfile');
  };

  const navigateFollowerScreen = () => {
    navigation.navigate('UserFollowTab', {
      screen: 'Followers',
      id,
    });
    // navigation.navigate('FollowersScreen', {followeeId: id});
  };
  const navigateFolloweeScreen = () => {
    navigation.navigate('UserFollowTab', {
      screen: 'Followings',
      id,
    });
    // navigation.navigate('FollowersScreen', {followeeId: id});
  };

  const onFollow = async () => {
    if (!isUserFollowing) {
      try {
        await follow();
      } catch (error) {
        Alert.alert((error as Error).message);
      }
    } else {
      try {
        await unfollow({
          variables: {
            input: {
              id: isUserFollowing.id,
              _version: isUserFollowing._version,
            },
          },
        });
      } catch (error) {
        Alert.alert((error as Error).message);
      }
    }
  };

  const onLogOut = async () => {
    await Auth.signOut({global: true});
  };
  return (
    <View style={{padding: 10}}>
      <View style={styles.firstRow}>
        <UserImage image={image} />
        <View style={styles.dataRowContainer}>
          <View style={styles.dataContainer}>
            <Text style={styles.data}>{numberOfPosts}</Text>
            <Text style={styles.dataTitle}>post</Text>
          </View>
          <Pressable
            onPress={navigateFollowerScreen}
            style={{alignItems: 'center'}}>
            <Text style={styles.data}>{numberOfFollowers}</Text>
            <Text style={styles.dataTitle}>followers</Text>
          </Pressable>
          <Pressable
            onPress={navigateFolloweeScreen}
            style={{alignItems: 'center'}}>
            <Text style={styles.data}>{numberOfFollowings}</Text>
            <Text style={styles.dataTitle}>following</Text>
          </Pressable>
        </View>
      </View>
      <View style={{marginTop: 5}}>
        <Text style={styles.data}>{name}</Text>
        <Text style={{color: colors.black}}>{bio}</Text>
      </View>
      <View style={{flexDirection: 'row', marginVertical: 5}}>
        {user.attributes.sub === id ? (
          <>
            <Button
              title="edit profile"
              onPress={navigateToEditProfile}
              style={styles.button}
              titleStyle={styles.buttonTitle}
            />
            <Button
              title="sign out"
              onPress={onLogOut}
              style={[styles.button, styles.buttonSignOut]}
              titleStyle={{color: colors.white}}
            />
          </>
        ) : (
          <>
            <Button
              title={!!isUserFollowing ? 'unfollow' : 'follow'}
              onPress={onFollow}
              style={[
                styles.button,
                styles.buttonFollow,
                !!isUserFollowing && styles.buttonUnfollow,
              ]}
              titleStyle={{color: colors.white}}
              isLoading={loading || deleting}
              disabled={loading || deleting}
            />
            <Button
              title="message"
              onPress={onLogOut}
              style={styles.button}
              titleStyle={styles.buttonTitle}
            />
          </>
        )}
      </View>
    </View>
  );
};

export default ProfileHeader;
