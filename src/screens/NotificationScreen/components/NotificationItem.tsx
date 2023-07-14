import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {NotificationType} from 'src/models';
import {Notification} from 'src/API';
import useUserAvatar from '@hooks/useUserAvatar/useUserAvatar';
import {weight} from '@theme/fonts';

interface NotificationItemProps {
  notification: Notification;
}

const NOTIFICATION_MESSAGE: Record<NotificationType, string> = {
  NEW_COMMENT: 'has commented your post',
  NEW_FOLLOWER: 'started following you',
  NEW_LIKE: 'has liked your post',
};

export default function NotificationItem({
  notification,
}: NotificationItemProps) {
  const image = useUserAvatar(
    notification.Post?.image ?? notification.Post?.images?.[0],
  );

  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={{fontWeight: weight.bold, marginRight: 10}}>
          {notification.Actor?.name}
        </Text>
        <Text>{NOTIFICATION_MESSAGE[notification.type]}</Text>
      </View>
      {image && <Image source={{uri: image}} style={styles.image} />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    height: 50,
    aspectRatio: 1,
  },
});
