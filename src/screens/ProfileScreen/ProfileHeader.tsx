import Button from '@components/Button';
import React from 'react';
import {View, Text, Image} from 'react-native';
import {styles} from './styles';
import {colors} from '@theme/colors';
import {useNavigation, useRoute} from '@react-navigation/native';
import {ProfileNavigatorProps} from '@navigation/types';
import {Auth} from 'aws-amplify';
import {User} from 'src/API';
import {DEFAULT_USER_IMAGE} from 'src/config';
import {LoneSchemaDefinition} from 'graphql/validation/rules/LoneSchemaDefinition';
import {useAuthContext} from '@context/AuthContext';

type ProfileHeaderProps = Pick<
  User,
  | 'numberOfFollowers'
  | 'numberOfPosts'
  | 'numberOfFollowings'
  | 'username'
  | 'bio'
  | 'id'
  | 'image'
>;

const ProfileHeader = ({
  numberOfFollowers,
  numberOfPosts,
  username,
  bio,
  numberOfFollowings,
  id,
  image,
}: ProfileHeaderProps) => {
  const navigation = useNavigation<ProfileNavigatorProps>();

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
        <Image
          source={{uri: image ?? DEFAULT_USER_IMAGE}}
          style={styles.avatar}
        />

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
        <Text style={styles.data}>{username}</Text>
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
