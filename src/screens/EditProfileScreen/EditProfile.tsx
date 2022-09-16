/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {View, Image, ScrollView} from 'react-native';
import user from '@assets/user.json';
import Button from '@components/Button';
import {useForm} from 'react-hook-form';
import {Asset, launchImageLibrary} from 'react-native-image-picker';
import EditProfileInput from './EditProfileInput';
import {IEditableUser} from './types';
import {colors} from '@theme/colors';
import {styles} from './styles';
import {useAuthContext} from '@context/AuthContext';
import {useQuery} from '@apollo/client';
import {GetUserQuery, GetUserQueryVariables} from 'src/API';
import {getUserById} from '@screens/ProfileScreen/queries';
import {DEFAULT_USER_IMAGE} from 'src/config';
import ApiErrorMessage from '@components/ApiErrorMessage';
import Loading from '@components/Loading';
import {getUserToEditById} from './queries';
const URL_REGEX =
  /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/;
const EditProfile = () => {
  const [imageSelected, setImageSelected] = useState<Asset | undefined>();
  const {user} = useAuthContext();

  const {sub} = user?.attributes;
  const {control, handleSubmit, setValue} = useForm<IEditableUser>();

  const {data, error, loading, refetch} = useQuery<
    GetUserQuery,
    GetUserQueryVariables
  >(getUserToEditById, {
    variables: {
      id: sub,
    },
    onCompleted(data) {
      //USAMOS setValue PQ COMO NO TENEMOS LOS DATOS DEL USUARIO
      //APENAS ENTRAMOS, LOS ACTUALIZAMOS ASI

      setValue('bio', data.getUser?.bio ?? '');
      setValue('name', data.getUser?.name ?? '');
      setValue('username', data.getUser?.username ?? '');
      setValue('website', data.getUser?.website ?? '');
    },
  });

  const onChangePhoto = async () => {
    const {didCancel, assets, errorCode} = await launchImageLibrary({
      mediaType: 'photo',
    });

    if (!didCancel && !errorCode && assets) {
      console.log({assets});
      setImageSelected(assets[0]);
    }
  };

  const onSubmit = (data: IEditableUser) => {
    console.log({data});
  };

  if (error) {
    return (
      <ApiErrorMessage
        title="error fetchihng user"
        message={error.message}
        onRetry={refetch}
      />
    );
  }

  if (loading) {
    return <Loading text="loading user..." />;
  }

  return (
    <ScrollView style={{flex: 1}}>
      <Image
        source={{
          uri:
            imageSelected?.uri || (data?.getUser?.image ?? DEFAULT_USER_IMAGE),
        }}
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
        onPress={onChangePhoto}
        style={styles.editProfileButton}
        titleStyle={{color: colors.primary}}
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
          placeholder="name..."
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
          placeholder="username..."
          label="Username"
          name="username"
          control={control}
        />
        <EditProfileInput
          rules={{
            // required: 'website is required',
            pattern: {value: URL_REGEX, message: 'invalid url'},
          }}
          placeholder="website"
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
          placeholder="bio..."
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
