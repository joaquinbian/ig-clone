import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import FeedScreen from '@screens/FeedScreen';
import ProfileScreen from '@screens/ProfileScreen';
import {Image} from 'react-native';
import logo from '@assets/images/logo.png';
import {HomeStackNavigator} from './types';
import EditPostScreen from '@screens/EditPostScreen/EditPostScreen';

const Stack = createNativeStackNavigator<HomeStackNavigator>();

const HeaderTitle = () => {
  return <Image source={logo} style={{width: 150, aspectRatio: 3}} />;
};

const Navigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Feed"
        component={FeedScreen}
        options={{headerTitle: HeaderTitle, headerTitleAlign: 'center'}}
      />
      <Stack.Screen
        name="UserProfile"
        component={ProfileScreen}
        options={{title: 'profile'}}
      />
      <Stack.Screen name="EditPostScreen" component={EditPostScreen} />
    </Stack.Navigator>
  );
};

export default Navigation;
