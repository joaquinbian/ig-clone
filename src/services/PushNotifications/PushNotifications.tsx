import {Platform, Settings, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import messaging, {
  FirebaseMessagingTypes,
} from '@react-native-firebase/messaging';
import {
  checkNotifications,
  PERMISSIONS,
  requestNotifications,
} from 'react-native-permissions';
import {useNavigation} from '@react-navigation/native';
import {useMutation, useQuery} from '@apollo/client';
import {getUser, updateUser} from './queries';
import {
  GetUserQuery,
  GetUserQueryVariables,
  UpdateUserMutation,
  UpdateUserMutationVariables,
} from 'src/API';
import {useAuthContext} from '@context/AuthContext';

messaging().setBackgroundMessageHandler(async remoteMessage => {
  console.log('setBackgroundMessageHandler app');
  console.log(JSON.stringify(remoteMessage, null, 2));
});

export default function PushNotifications() {
  const [enabled, setEnabled] = useState(false);
  const [token, setToken] = useState<null | string>(null);
  const navigation = useNavigation();
  const {userId: id} = useAuthContext();
  const {loading, data} = useQuery<GetUserQuery, GetUserQueryVariables>(
    getUser,
    {variables: {id}},
  );
  const [onUpdateUser] = useMutation<
    UpdateUserMutation,
    UpdateUserMutationVariables
  >(updateUser);

  useEffect(() => {
    async function requestUserPermission() {
      if (Platform.OS === 'ios') {
        const authStatus = await messaging().requestPermission();
        const enabled =
          authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
          authStatus === messaging.AuthorizationStatus.PROVISIONAL;

        if (enabled) {
          setEnabled(true);
          await getPushToken();
        }
      } else {
        const {status} = await checkNotifications();

        if (status === 'denied') {
          const {status} = await requestNotifications([]);
          if (status === 'granted') {
            setEnabled(true);
            await getPushToken();
          } else {
            setEnabled(false);
          }
        } else if (status === 'granted') {
          setEnabled(true);
          await getPushToken();
        }
      }
    }
    requestUserPermission();
  }, []);

  useEffect(() => {
    if (!token || !data?.getUser?.id) {
      return;
    }
    onUpdateUser({
      variables: {
        input: {id, _version: data?.getUser?._version, fcmToken: token},
      },
    });
  }, [data?.getUser?.id, token]);

  function handleNotifications(
    remoteMessage: FirebaseMessagingTypes.RemoteMessage | null,
  ) {
    if (!remoteMessage) {
      return;
    }
    console.log(JSON.stringify(remoteMessage, null, 2));

    if (remoteMessage.data?.postID) {
      //displays an in app notification and then to handle the action
      //when the user press the notification, we do what we want
      //navigation.navigate('PostScreen');
    }
  }

  useEffect(() => {
    if (!enabled) {
      return;
    }

    messaging().onMessage(handleNotifications);
  }, [enabled]);
  useEffect(() => {
    messaging().onNotificationOpenedApp(handleNotifications);
    messaging().getInitialNotification().then(handleNotifications);
  }, []);

  async function getPushToken() {
    await messaging().registerDeviceForRemoteMessages();
    const newToken = await messaging().getToken();

    setToken(newToken);
  }
  return null;
}

const styles = StyleSheet.create({});
