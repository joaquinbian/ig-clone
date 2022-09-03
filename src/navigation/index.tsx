import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import CommentsScreen from '@screens/CommentsScreen';
import BottomTabNavigator from './BottomTabNavigator';
import {RootNavigatorParamList} from './types';
import {LinkingOptions, NavigationContainer} from '@react-navigation/native';
import AuthStackNavigator from './AuthStackNavigator';
const Stack = createNativeStackNavigator<RootNavigatorParamList>();

const linking: LinkingOptions<RootNavigatorParamList> = {
  //especificamos los uri schemes de las url que queremos manejar
  //si queremos manejar universal links, deberiamos agregar nuestro website tmb
  prefixes: ['instajoaquin://'],
  config: {
    initialRouteName: 'BottomTabs',
    screens: {
      Comments: 'comments',
      BottomTabs: {
        screens: {
          HomeStack: {
            initialRouteName: 'Feed',
            screens: {
              //la variable de id que le pongamos aca tiene que matchear
              //con la de los params
              UserProfile: 'user/:userId',
            },
          },
        },
      },
    },
  },
};

const Navigation = () => {
  return (
    <NavigationContainer linking={linking}>
      <Stack.Navigator>
        <Stack.Screen
          name="Auth"
          component={AuthStackNavigator}
          options={{headerShown: false}}
        />
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
