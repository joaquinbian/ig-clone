import {StyleSheet, FlatList, View} from 'react-native';
import React from 'react';
import {useQuery} from '@apollo/client';
import {userNotifications} from './queries';
import {UserNotificationsQuery, UserNotificationsQueryVariables} from 'src/API';
import {useAuthContext} from '@context/AuthContext';
import Loading from '@components/Loading/Loading';
import NotificationItem from './components/NotificationItem';
import {Text} from 'react-native-svg';

export default function NotificationScreen() {
  const {userId: userID} = useAuthContext();
  const {data, loading} = useQuery<
    UserNotificationsQuery,
    UserNotificationsQueryVariables
  >(userNotifications, {variables: {userID}});

  if (loading) {
    return <Loading />;
  }
  const NOTIFICATIONS =
    data?.userNotifications?.items.filter(
      notification => !notification?._deleted,
    ) ?? [];

  return (
    <View>
      <FlatList
        data={NOTIFICATIONS}
        renderItem={({item}) => <NotificationItem notification={item} />}
        ListEmptyComponent={() => (
          <View style={{margin: 10}}>
            <Text>You do not have notifiations yet!</Text>
          </View>
        )}
        ItemSeparatorComponent={() => <View style={{height: 10}} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
