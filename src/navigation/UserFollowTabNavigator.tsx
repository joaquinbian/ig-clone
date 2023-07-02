import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {
  UserFollowTabNavigatorParamList,
  UserFollowTabRouteProps,
} from './types';
import {UserFollowers, UserFollowings} from '@screens/UserFollow';
import {useRoute} from '@react-navigation/native';

export default function UserFollowTabNavigator() {
  const route = useRoute<UserFollowTabRouteProps>();
  const Tab = createMaterialTopTabNavigator<UserFollowTabNavigatorParamList>();
  return (
    <Tab.Navigator>
      <Tab.Screen name="Followers">
        {props => <UserFollowers {...props} followeeID={route.params.id} />}
      </Tab.Screen>
      <Tab.Screen name="Followings">
        {props => <UserFollowings {...props} followerID={route.params.id} />}
      </Tab.Screen>
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({});
