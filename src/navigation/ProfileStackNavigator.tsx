import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ProfileScreen from '@screens/ProfileScreen';
import EditProfile from '@screens/EditProfileScreen';
import {useAuthContext} from '@context/AuthContext';
import {ProfileStackNavigator as IProfileStackNavigator} from './types';
import {View} from 'react-native';
import {UserFollowers, UserFollowings} from '@screens/UserFollow';

const Stack = createNativeStackNavigator<IProfileStackNavigator>();

const ProfileStackNavigator = () => {
  const {user} = useAuthContext();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Profile"
        component={ProfileScreen}
        options={{title: 'Profile'}}
      />
      <Stack.Screen
        name="FollowersScreen"
        component={UserFollowers}
        options={{title: 'Followers'}}
      />
      <Stack.Screen
        name="FollowingsScreen"
        component={UserFollowings}
        options={{title: 'Followings'}}
      />
      <Stack.Screen
        name="EditProfile"
        component={EditProfile}
        options={{title: 'Edit Profile'}}
      />
    </Stack.Navigator>
  );
};

export default ProfileStackNavigator;
