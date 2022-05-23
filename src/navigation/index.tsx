import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import FeedScreen from '@screens/FeedScreen';
import ProfileScreen from '@screens/ProfileScreen';
import {Image} from 'react-native';
import logo from '@assets/images/logo.png';
const Stack = createNativeStackNavigator();

const HeaderTitle = () => {
  return <Image source={logo} style={{height: 40, width: 150}} />;
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
    </Stack.Navigator>
  );
};

export default Navigation;
