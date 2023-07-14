import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useQuery} from '@apollo/client';
import {userNotifications} from './queries';
import {UserNotificationsQuery, UserNotificationsQueryVariables} from 'src/API';
import {useAuthContext} from '@context/AuthContext';
import Loading from '@components/Loading/Loading';

export default function NotificationScreen() {
  const {userId: userID} = useAuthContext();
  const {data, loading} = useQuery<
    UserNotificationsQuery,
    UserNotificationsQueryVariables
  >(userNotifications, {variables: {userID}});

  if (loading) {
    return <Loading />;
  }
  console.log({data: data?.userNotifications?.items.map(d => d)});

  return (
    <View>
      <Text>NotificationScreen</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
