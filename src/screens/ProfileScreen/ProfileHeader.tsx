import Button from '@components/Button';
import React from 'react';
import {View, Text, Image} from 'react-native';
import {styles} from './styles';
import {colors} from '@theme/colors';
import user from '@assets/user.json';

const ProfileHeader = () => {
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
          onPress={() => console.log('a')}
          style={styles.button}
          titleStyle={styles.buttonTitle}
        />
        <Button
          title="other button"
          onPress={() => console.log('a')}
          style={styles.button}
          titleStyle={styles.buttonTitle}
        />
      </View>
    </View>
  );
};

export default ProfileHeader;
