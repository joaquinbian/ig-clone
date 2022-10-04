import {Route, RouteProp} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {BottomTabNavigationProp} from '@react-navigation/bottom-tabs';

//-------- RootNavigator ---------
export type RootNavigatorParamList = {
  Auth: undefined;
  BottomTabs: undefined;
  Comments: {postId: string};
  EditProfile: undefined;
};

//-------- BottomNavigator ---------

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
  UserProfile: {userId: string; username?: string};
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

export type ProfileRouteProps = RouteProp<ProfileStackNavigator, 'Profile'>;

// Auth Stack Navigator
export type AuthStackNavigatorParamList = {
  'Sign in': undefined;
  'Sign up': undefined;
  'Confirm email': {email?: string};
  'Forgot password': undefined;
  'New password': undefined;
};

export type SignInNavigationProp = NativeStackNavigationProp<
  AuthStackNavigatorParamList,
  'Sign in'
>;

export type SignUpNavigationProp = NativeStackNavigationProp<
  AuthStackNavigatorParamList,
  'Sign up'
>;

export type ConfirmEmailNavigationProp = NativeStackNavigationProp<
  AuthStackNavigatorParamList,
  'Confirm email'
>;
export type ConfirmEmailRouteProp = RouteProp<
  AuthStackNavigatorParamList,
  'Confirm email'
>;

export type ForgotPasswordNavigationProp = NativeStackNavigationProp<
  AuthStackNavigatorParamList,
  'Forgot password'
>;

export type NewPasswordNavigationProp = NativeStackNavigationProp<
  AuthStackNavigatorParamList,
  'New password'
>;

//--------- UploadPostStackNavigator ----------
export type UploadStackNavigatorParamList = {
  Camera: undefined;
  CreatePost: {
    image?: string;
    images?: string[];
    video?: string;
  };
};

export type CameraScreenNaviationProp = NativeStackNavigationProp<
  UploadStackNavigatorParamList,
  'Camera'
>;

export type CreatePostRouteProp = RouteProp<
  UploadStackNavigatorParamList,
  'CreatePost'
>;
