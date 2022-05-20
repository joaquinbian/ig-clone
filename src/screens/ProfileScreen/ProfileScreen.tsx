import React from 'react';
import {View, Text, Image} from 'react-native';
import user from '@assets/user.json';
import {colors} from '@theme/colors';
import {weight} from '@theme/fonts';
import {styles} from './styles';
import Button from '@components/Button';

const ProfileScreen = () => {
  return (
    <View style={styles.container}>
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
      <View style={{flexDirection: 'row'}}>
        <Button
          title="edit profile"
          onPress={() => console.log('a')}
          buttonStyle={styles.button}
          titleStyle={styles.buttonTitle}
          containerStyle={{flex: 1}}
        />
        <Button
          title="other button"
          onPress={() => console.log('a')}
          buttonStyle={styles.button}
          titleStyle={styles.buttonTitle}
          containerStyle={{flex: 1}}
        />
      </View>
    </View>
  );
};

export default ProfileScreen;
