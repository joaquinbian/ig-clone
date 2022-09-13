import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ProfileScreen from '@screens/ProfileScreen';
import EditProfile from '@screens/EditProfileScreen';
import {useAuthContext} from '@context/AuthContext';
import {ProfileStackNavigator as IProfileStackNavigator} from './types';
import {View} from 'react-native';

const Stack = createNativeStackNavigator<IProfileStackNavigator>();

const ProfileStackNavigator = () => {
  const {user} = useAuthContext();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Profile"
        component={ProfileScreen}
        options={{title: 'Profile'}}
        // initialParams={{id}}
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
