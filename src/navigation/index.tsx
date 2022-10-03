import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import CommentsScreen from '@screens/CommentsScreen';
import BottomTabNavigator from './BottomTabNavigator';
import {RootNavigatorParamList} from './types';
import {LinkingOptions, NavigationContainer} from '@react-navigation/native';
import AuthStackNavigator from './AuthStackNavigator';
import {useAuthContext} from '@context/AuthContext';
import Loading from '@components/Loading';
import {getUser, GetUserQuery} from './queries';
import {useQuery} from '@apollo/client';
import {GetUserQueryVariables} from 'src/API';
import EditProfile from '@screens/EditProfileScreen';

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
            initialRouteName: 'feed',
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
  const {user, userId} = useAuthContext();
  /*  const {sub} = user?.attributes;
  console.log({sub}); */

  const {data} = useQuery<GetUserQuery, GetUserQueryVariables>(getUser, {
    variables: {id: userId},
  });

  if (user === undefined) {
    return <Loading />;
  }

  let screens = null;
  if (!user) {
    screens = (
      <Stack.Screen
        name="Auth"
        component={AuthStackNavigator}
        options={{headerShown: false}}
      />
    );
  } else if (data?.getUser?.username === null) {
    screens = (
      <Stack.Screen
        name="EditProfile"
        component={EditProfile}
        options={{title: 'Set up Profile'}}
      />
    );
  } else {
    screens = (
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
    );
  }
  //if(user && user.username)

  return (
    <NavigationContainer linking={linking}>
      <Stack.Navigator>{screens}</Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
