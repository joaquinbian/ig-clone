import {Route, RouteProp} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {BottomTabNavigationProp} from '@react-navigation/bottom-tabs';
export type RootNavigatorParamList = {
  BottomTabs: undefined;
  Comments: {postId: string};
};

export type BottomNavigatorParamList = {
  HomeStack: undefined;
  Search: undefined;
  UploadPost: undefined;
  Notifications: undefined;
  ProfileStack: undefined;
};
export type ProfileBottomNavigatorProp = BottomTabNavigationProp<
  BottomNavigatorParamList,
  'ProfileStack'
>;
export type ProfileBottomRouteProp = RouteProp<
  BottomNavigatorParamList,
  'ProfileStack'
>;

export type HomeStackNavigator = {
  Feed: undefined;
  UserProfile: {userId: string};
};

export type UserProfileNavigatorProps = NativeStackNavigationProp<
  HomeStackNavigator,
  'UserProfile'
>;

export type UserProfileRouteProp = RouteProp<HomeStackNavigator, 'UserProfile'>;
export type FeedNavigatorProps = NativeStackNavigationProp<
  HomeStackNavigator,
  'Feed'
>;

export type ProfileStackNavigator = {
  Profile: undefined;
  EditProfile: undefined;
};

export type ProfileNavigatorProps = NativeStackNavigationProp<
  ProfileStackNavigator,
  'Profile'
>;
