import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import CommentsScreen from '@screens/CommentsScreen';
import BottomTabNavigator from './BottomTabNavigator';
import {RootNavigatorParamList} from './types';
import {LinkingOptions, NavigationContainer} from '@react-navigation/native';
const Stack = createNativeStackNavigator<RootNavigatorParamList>();

const linking: LinkingOptions<RootNavigatorParamList> = {
  //especificamos los urischemes que queremos manejar
  prefixes: [],
  config: {},
};

const Navigation = () => {
  return (
    <NavigationContainer>
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
    </NavigationContainer>
  );
};

export default Navigation;
