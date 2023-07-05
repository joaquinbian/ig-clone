import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SearchUserStackNavigatorParamList} from './types';
import SearchUserScreen from '@screens/SearchUserScreen/SearchUserScreen';
import ProfileStackNavigator from './ProfileStackNavigator';

const Stack = createNativeStackNavigator<SearchUserStackNavigatorParamList>();
export default function SearchUserStackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Search" component={SearchUserScreen} />
      <Stack.Screen
        name="ProfileStack"
        component={ProfileStackNavigator}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({});
