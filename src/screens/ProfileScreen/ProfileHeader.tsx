import Button from '@components/Button';
import React, {useEffect, useState} from 'react';
import {View, Text, Image, ActivityIndicator} from 'react-native';
import {styles} from './styles';
import {colors} from '@theme/colors';
import {useNavigation, useRoute} from '@react-navigation/native';
import {ProfileNavigatorProps} from '@navigation/types';
import {Auth, Storage} from 'aws-amplify';
import {User} from 'src/API';
import {DEFAULT_USER_IMAGE} from 'src/config';
import {useAuthContext} from '@context/AuthContext';
import UserImage from '@components/UserImage';

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
  console.log({image}, 'IMAGE EN PROFILE HEADER');

  const {user} = useAuthContext();

  const navigateToEditProfile = () => {
    navigation.navigate('EditProfile');
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
          <View style={{alignItems: 'center'}}>
            <Text style={styles.data}>{numberOfFollowers}</Text>
            <Text style={styles.dataTitle}>followers</Text>
          </View>
          <View style={{alignItems: 'center'}}>
            <Text style={styles.data}>{numberOfFollowings}</Text>
            <Text style={styles.dataTitle}>following</Text>
          </View>
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
              title="follow"
              onPress={navigateToEditProfile}
              style={[styles.button, styles.buttonFollow]}
              titleStyle={{color: colors.white}}
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
