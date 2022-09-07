import Button from '@components/Button';
import React from 'react';
import {View, Text, Image} from 'react-native';
import {styles} from './styles';
import {colors} from '@theme/colors';
import user from '@assets/user.json';
import {useNavigation} from '@react-navigation/native';
import {ProfileNavigatorProps} from '@navigation/types';
import {Auth} from 'aws-amplify';

const ProfileHeader = () => {
  const navigation = useNavigation<ProfileNavigatorProps>();
  const navigateToEditProfile = () => {
    navigation.navigate('EditProfile');
  };

  const onLogOut = async () => {
    await Auth.signOut({global: true});
  };
  return (
    <View style={{padding: 10}}>
      <View style={styles.firstRow}>
        <Image source={{uri: user.image}} style={styles.avatar} />

        <View style={styles.dataRowContainer}>
          <View style={styles.dataContainer}>
            <Text style={styles.data}>566</Text>
            <Text style={styles.dataTitle}>post</Text>
          </View>
          <View style={{alignItems: 'center'}}>
            <Text style={styles.data}>566</Text>
            <Text style={styles.dataTitle}>followers</Text>
          </View>
          <View style={{alignItems: 'center'}}>
            <Text style={styles.data}>345</Text>
            <Text style={styles.dataTitle}>following</Text>
          </View>
        </View>
      </View>
      <View style={{marginTop: 5}}>
        <Text style={styles.data}>{user.username}</Text>
        <Text style={{color: colors.black}}>{user.bio}</Text>
      </View>
      <View style={{flexDirection: 'row', marginVertical: 5}}>
        <Button
          title="edit profile"
          onPress={navigateToEditProfile}
          style={styles.button}
          titleStyle={styles.buttonTitle}
        />
        <Button
          title="sgin out"
          onPress={onLogOut}
          style={styles.button}
          titleStyle={styles.buttonTitle}
        />
      </View>
    </View>
  );
};

export default ProfileHeader;
