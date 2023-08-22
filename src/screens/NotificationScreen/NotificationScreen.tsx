import {StyleSheet, FlatList, View} from 'react-native';
import React, {useEffect} from 'react';
import {useMutation, useQuery} from '@apollo/client';
import {
  onCreateNotification,
  updateNotification,
  userNotifications,
} from './queries';
import {
  ModelNotificationFilterInput,
  OnCreateNotificationSubscription,
  UpdateNotificationMutation,
  UpdateNotificationMutationVariables,
  UserNotificationsQuery,
  UserNotificationsQueryVariables,
} from 'src/API';
import {useAuthContext} from '@context/AuthContext';
import Loading from '@components/Loading';
import NotificationItem from './components/NotificationItem';
import {Text} from 'react-native-svg';

export default function NotificationScreen() {
  const {userId: userID} = useAuthContext();
  const {data, loading, subscribeToMore} = useQuery<
    UserNotificationsQuery,
    UserNotificationsQueryVariables
  >(userNotifications, {variables: {userID}});

  const [onUpdateNotification] = useMutation<
    UpdateNotificationMutation,
    UpdateNotificationMutationVariables
  >(updateNotification);

  const NOTIFICATIONS =
    data?.userNotifications?.items.filter(
      notification => !notification?._deleted,
    ) ?? [];

  const readNotifications = async () => {
    const unreadNotifications = NOTIFICATIONS.filter(n => !n?.readAt);
    try {
      await Promise.all(
        unreadNotifications.map(notification => {
          return onUpdateNotification({
            variables: {
              input: {
                id: notification?.id!,
                _version: notification?._version,
                readAt: new Date().getDate(),
              },
            },
          });
        }),
      );
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    readNotifications();
  }, [NOTIFICATIONS]);

  /*  useEffect(() => {
    if (!subscribeToMore || !userID) {
      return;
    }

    subscribeToMore<
      OnCreateNotificationSubscription,
      ModelNotificationFilterInput
    >({
      document: onCreateNotification,
      variables: {userID: {eq: userID}},
      updateQuery: (prev, {subscriptionData}) => {
        const newNotification = subscriptionData.data.onCreateNotification;

        return Object.assign({}, prev, {
          userNotifications: {
            ...prev?.userNotifications,
            items: [newNotification, ...(prev.userNotifications?.items ?? [])],
          },
        });
      },
    });
  }, [subscribeToMore, userID]);
 */
  console.log({NOTIFICATIONS});

  if (loading) {
    return <Loading />;
  }
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
