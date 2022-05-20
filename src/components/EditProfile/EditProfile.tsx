import React, {useState} from 'react';
import {View, Text, Image, TextInput} from 'react-native';
import user from '@assets/user.json';
import {weight} from '../../theme/fonts';
import Button from '@components/Button';
import {colors} from '@theme/colors';
import {styles} from './styles';
import EditProfileInput from './EditProfileInput';

const EditProfile = () => {
  const [name, setName] = useState<string>(user.name);
  const [username, setUsername] = useState<string>(user.username);
  const [website, setWebsite] = useState<string>('');
  const [bio, setBio] = useState<string>(user.bio);
  return (
    <View>
      <Image
        source={{uri: user.image}}
        style={{
          alignSelf: 'center',
          width: 100,
          aspectRatio: 1,
          borderRadius: 50,
          marginTop: 20,
        }}
      />
      <Button
        title="edit profile"
        onPress={() => console.log('hola')}
        buttonStyle={{
          alignSelf: 'center',
          marginVertical: 20,
          backgroundColor: 'transparent',
          borderRadius: 5,
        }}
        titleStyle={{color: colors.primary}}
        activeOpacity={0}
      />
      <View style={{paddingHorizontal: 10}}>
        <EditProfileInput
          onChangeText={setName}
          placeholder="name..."
          value={name}
          label="Name"
        />
        <EditProfileInput
          onChangeText={setUsername}
          placeholder="username..."
          value={username}
          label="Username"
        />
        <EditProfileInput
          onChangeText={setWebsite}
          placeholder="website"
          value={website}
          label="Website"
        />
        <EditProfileInput
          onChangeText={setBio}
          placeholder="bio..."
          value={bio}
          label="Bio"
          multiline
        />
      </View>
    </View>
  );
};

export default EditProfile;
