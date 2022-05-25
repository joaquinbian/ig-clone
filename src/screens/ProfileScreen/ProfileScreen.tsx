import React from 'react';
import user from '@assets/user.json';
import ProfileHeader from './ProfileHeader';
import FeedGridView from '@components/FeedGridView';
import {useNavigation, useRoute} from '@react-navigation/native';
import {
  BottomNavigatorParamList,
  UserProfileNavigatorProps,
  ProfileBottomRouteProp,
  UserProfileRouteProp,
} from '@navigation/types';

const ProfileScreen = () => {
  const route = useRoute<ProfileBottomRouteProp | UserProfileRouteProp>();

  //dependiendo de como entremos tinee un tipado u otro
  const navigation = useNavigation<
    BottomNavigatorParamList | UserProfileNavigatorProps
  >();

  console.warn('userid: ', route.params?.userId);

  return <FeedGridView data={user.posts} ListHeaderComponent={ProfileHeader} />;
};

export default ProfileScreen;
