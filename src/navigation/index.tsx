import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {Image} from 'react-native';
import logo from '@assets/images/logo.png';
import CommentsScreen from '@screens/CommentsScreen';
import BottomTabNavigator from './BottomTabNavigator';
import {RootNavigatorParamList} from './types';
const Stack = createNativeStackNavigator<RootNavigatorParamList>();

const Navigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="BottomTabs"
        component={BottomTabNavigator}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Comments"
        component={CommentsScreen}
        options={{title: 'comments'}}
      />
    </Stack.Navigator>
  );
};

export default Navigation;
