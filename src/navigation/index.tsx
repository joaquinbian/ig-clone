import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ActivityIndicator, View, Text} from 'react-native';

import CommentsScreen from '@screens/CommentsScreen';
import BottomTabNavigator from './BottomTabNavigator';
import {RootNavigatorParamList} from './types';
import {LinkingOptions, NavigationContainer} from '@react-navigation/native';
import AuthStackNavigator from './AuthStackNavigator';
import {useAuthContext} from '@context/AuthContext';
import {size, weight} from '@theme/fonts';

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
  const {user} = useAuthContext();

  if (user === undefined) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator />
        <Text style={{fontSize: size.md, fontWeight: weight.semi}}>
          Loading...
        </Text>
      </View>
    );
  }
  return (
    <NavigationContainer linking={linking}>
      <Stack.Navigator>
        {user ? (
          <>
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
          </>
        ) : (
          <Stack.Screen
            name="Auth"
            component={AuthStackNavigator}
            options={{headerShown: false}}
          />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
