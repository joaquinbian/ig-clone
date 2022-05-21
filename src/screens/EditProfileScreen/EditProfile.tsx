/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {View, Image, ScrollView} from 'react-native';
import user from '@assets/user.json';
import Button from '@components/Button';
import {colors} from '@theme/colors';
import EditProfileInput from './EditProfileInput';
import {useForm} from 'react-hook-form';
import {IEditableUser} from './types';
const URL_REGEX =
  /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/;
const EditProfile = () => {
  const [name, setName] = useState<string>(user.name);
  const [username, setUsername] = useState<string>(user.username);
  const [website, setWebsite] = useState<string>('');
  const [bio, setBio] = useState<string>(user.bio);

  const {control, handleSubmit} = useForm<IEditableUser>({
    defaultValues: {
      bio: user.bio,
      name: user.name,
      username: user.username,
      website: '',
    },
  });

  const onSubmit = (data: IEditableUser) => {
    console.log({data});
  };
  return (
    <ScrollView style={{flex: 1}}>
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
        title="edit profile photo"
        onPress={() => console.log('hola')}
        buttonStyle={{
          alignSelf: 'center',
          marginVertical: 20,
          backgroundColor: 'transparent',
          borderRadius: 5,
        }}
        containerStyle={{borderRadius: 10}}
        titleStyle={{color: colors.primary}}
        activeOpacity={0}
      />
      <View style={{paddingHorizontal: 10}}>
        <EditProfileInput
          rules={{
            required: 'name is required',
            minLength: {
              value: 3,
              message: 'name must have at least 3 characters',
            },
          }}
          onChangeText={setName}
          placeholder="name..."
          value={name}
          label="Name"
          name="name"
          control={control}
        />
        <EditProfileInput
          rules={{
            required: 'username is required',
            minLength: {
              value: 3,
              message: 'name must have at least 3 characters',
            },
          }}
          onChangeText={setUsername}
          placeholder="username..."
          value={username}
          label="Username"
          name="username"
          control={control}
        />
        <EditProfileInput
          rules={{
            // required: 'website is required',
            pattern: {value: URL_REGEX, message: 'invalid url'},
          }}
          onChangeText={setWebsite}
          placeholder="website"
          value={website}
          label="Website"
          name="website"
          control={control}
        />
        <EditProfileInput
          rules={{
            required: 'bio is required',
            maxLength: {
              value: 200,
              message: 'bio must have less than 200 characters',
            },
          }}
          onChangeText={setBio}
          placeholder="bio..."
          value={bio}
          label="Bio"
          multiline
          name="bio"
          control={control}
        />
        <Button title="submit" onPress={handleSubmit(onSubmit)} />
      </View>
    </ScrollView>
  );
};

export default EditProfile;
