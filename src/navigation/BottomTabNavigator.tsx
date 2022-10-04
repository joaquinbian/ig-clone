import React from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Navigation from './HomeStackNavigator';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {colors} from '@theme/colors';
import ProfileScreen from '@screens/ProfileScreen';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import CameraScreen from '@screens/CameraScreen';
import ProfileStackNavigator from './ProfileStackNavigator';
import {BottomNavigatorParamList} from './types';
import SearchUserScreen from '@screens/SearchUserScreen';
import UploadPostStackNavigator from './UploadPostStackNavigator';

const BottomTab = createBottomTabNavigator<BottomNavigatorParamList>();

const BottomTabNavigator = () => {
  return (
    <BottomTab.Navigator
      screenOptions={{
        tabBarActiveTintColor: colors.black,
        tabBarInactiveTintColor: colors.lightgray,
        tabBarShowLabel: false,
      }}>
      <BottomTab.Screen
        name="HomeStack"
        component={Navigation}
        options={{
          tabBarIcon: ({color, size}) => (
            <MaterialIcons name="home-filled" size={size} color={color} />
          ),
          headerShown: false,
        }}
      />
      <BottomTab.Screen
        name="Search"
        component={SearchUserScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <MaterialIcons name="search" size={size} color={color} />
          ),
        }}
      />
      <BottomTab.Screen
        name="UploadPost"
        component={UploadPostStackNavigator}
        options={{
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons
              name="plus-circle-outline"
              size={size}
              color={color}
            />
          ),
          headerShown: false,
        }}
      />
      <BottomTab.Screen
        name="Notifications"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons
              name="heart-outline"
              size={size}
              color={color}
            />
          ),
        }}
      />
      <BottomTab.Screen
        name="ProfileStack"
        component={ProfileStackNavigator}
        options={{
          tabBarIcon: ({color, size}) => (
            <FontAwesome name="user-circle-o" size={size} color={color} />
          ),
          headerShown: false,
        }}
      />
    </BottomTab.Navigator>
  );
};

export default BottomTabNavigator;
