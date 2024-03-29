/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, {useEffect, useState} from 'react';
import {View, ScrollView, Alert} from 'react-native';
import Button from '@components/Button';
import {useForm} from 'react-hook-form';
import {Asset, launchImageLibrary} from 'react-native-image-picker';
import EditProfileInput from './EditProfileInput';
import {IEditableUser} from './types';
import {colors} from '@theme/colors';
import {styles} from './styles';
import {useAuthContext} from '@context/AuthContext';
import {useLazyQuery, useMutation, useQuery} from '@apollo/client';
import {
  GetUserQuery,
  GetUserQueryVariables,
  UpdateUserMutation,
  UpdateUserMutationVariables,
  DeleteUserMutation,
  DeleteUserMutationVariables,
  UsersByUsernameQueryVariables,
  UsersByUsernameQuery,
} from 'src/API';
import {DEFAULT_USER_IMAGE} from 'src/config';
import ApiErrorMessage from '@components/ApiErrorMessage';
import Loading from '@components/Loading';
import {
  editUser,
  getUserToEditById,
  deleteUser,
  getUserByUsername,
} from './queries';
import {useNavigation} from '@react-navigation/native';
import {Auth, Storage} from 'aws-amplify';
import {uploadMedia} from '@utils/aws';
import UserImage from '@components/UserImage';

const URL_REGEX =
  /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/;

const EditProfile = () => {
  const [imageSelected, setImageSelected] = useState<string | undefined>();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const {user} = useAuthContext();

  const navigation = useNavigation();

  const {sub} = user?.attributes;
  const {control, handleSubmit, setValue, setError} = useForm<IEditableUser>();

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
      setValue('username', data.getUser?.username);
      setValue('website', data.getUser?.website);
    },
  });

  const [updateUser, {error: editError}] = useMutation<
    UpdateUserMutation,
    UpdateUserMutationVariables
  >(editUser);

  const [getUser] = useLazyQuery<
    UsersByUsernameQuery,
    UsersByUsernameQueryVariables
  >(getUserByUsername);

  const [
    deleteUserMutation,
    {error: deleteUserError, loading: loadingDeleteUser},
  ] = useMutation<DeleteUserMutation, DeleteUserMutationVariables>(deleteUser);

  const onChangePhoto = async () => {
    const {didCancel, assets, errorCode} = await launchImageLibrary({
      mediaType: 'photo',
    });

    if (!didCancel && !errorCode && assets) {
      console.log({assets});
      setImageSelected(assets[0].uri);
    }
  };

  const onSubmit = async (formData: IEditableUser) => {
    setIsSubmitting(submitting => !submitting);
    try {
      let image: string | undefined = undefined;

      if (imageSelected) {
        console.log('entro en IMAGE SELECTED');

        image = await uploadMedia(imageSelected);
      }
      const {bio, username, name, website} = formData;
      await updateUser({
        variables: {
          input: {
            bio,
            username,
            name,
            website,
            image,
            id: sub,
            _version: data?.getUser?._version,
          },
        },
      });

      if (navigation.canGoBack()) {
        navigation.goBack();
      }
    } catch (error) {
      Alert.alert((error as Error).message);
    } finally {
      setIsSubmitting(submitting => !submitting);
    }
    //}
  };

  const checkUsername = async (username: string) => {
    try {
      const response = await getUser({variables: {username}});

      const users = response.data?.usersByUsername?.items;

      //si el usuario que contiene el username, que edite el usuario igual
      const isMyUser = !!users?.find(user => user?.id === sub);

      if ((users?.length ?? 0) >= 1 && !isMyUser) {
        return 'username must be unique';
      }
    } catch (error) {
      Alert.alert('error fetching user by username');
    }
    //devolvemos true para que pase la validacion
    return true;
  };

  const onConfirmDelete = () => {
    Alert.alert(
      'Are you sure you want to delete your account ?',
      'Deleting your user profile is permanent',
      [
        {
          style: 'cancel',
          text: 'Cancel',
        },
        {
          text: 'Delete',
          onPress: onDeleteUser,
          style: 'destructive',
        },
      ],
    );
  };

  const onDeleteUser = async () => {
    //delete on db
    await deleteUserMutation({
      variables: {input: {id: sub, _version: data?.getUser?._version}},
    });

    //delete on cognito
    user?.deleteUser(error => {
      if (error) {
        console.log(error);
      }
      Auth.signOut();
    });
  };

  if (error || editError || deleteUserError) {
    return (
      <ApiErrorMessage
        title={error ? 'error fetchihng user' : 'error updating user'}
        message={
          error?.message || editError?.message || deleteUserError?.message
        }
        onRetry={refetch}
      />
    );
  }

  if (loading) {
    return <Loading text="loading user..." />;
  }

  return (
    <ScrollView style={{flex: 1}}>
      <UserImage
        image={imageSelected ?? data?.getUser?.image}
        style={{marginTop: 20}}
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
            validate: checkUsername,
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
        <Button
          title="submit"
          onPress={handleSubmit(onSubmit)}
          isLoading={isSubmitting}
          disabled={isSubmitting}
          style={{backgroundColor: 'transparent', marginVertical: 10}}
          titleStyle={{color: colors.primary}}
        />
        <Button
          title="Delete account"
          onPress={onConfirmDelete}
          style={{
            backgroundColor: 'transparent',
            marginVertical: 10,
          }}
          titleStyle={{color: colors.error}}
          isLoading={loadingDeleteUser}
        />
      </View>
    </ScrollView>
  );
};

export default EditProfile;
