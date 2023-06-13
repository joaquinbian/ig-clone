import {
  CompositeNavigationProp,
  NavigatorScreenParams,
  Route,
  RouteProp,
} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {BottomTabNavigationProp} from '@react-navigation/bottom-tabs';

//-------- RootNavigator ---------
export type RootNavigatorParamList = {
  Auth: undefined;
  BottomTabs: undefined;
  Comments: {postId: string};
  EditProfile: undefined;
};

export type CommentsRouteProp = RouteProp<RootNavigatorParamList, 'Comments'>;

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
  UserProfile: NavigatorScreenParams<ProfileStackNavigator>;
  /* FollowersScreen: {followeeId: string};
  FollowingsScreen: {followerId: string}; */
  EditPostScreen: {postID: string};
  PostLikesScreen: {postID: string};
};

export type UserProfileNavigatorProps = NativeStackNavigationProp<
  HomeStackNavigator,
  'UserProfile'
>;
export type EditPostRouteProp = RouteProp<HomeStackNavigator, 'EditPostScreen'>;

export type UserProfileRouteProp = RouteProp<HomeStackNavigator, 'UserProfile'>;

export type FeedNavigatorProps = CompositeNavigationProp<
  NativeStackNavigationProp<HomeStackNavigator, 'Feed'>,
  CompositeNavigationProp<
    BottomTabNavigationProp<BottomNavigatorParamList>,
    NativeStackNavigationProp<RootNavigatorParamList>
  >
>;
export type PostLikesRouteProp = RouteProp<
  HomeStackNavigator,
  'PostLikesScreen'
>;

export type ProfileStackNavigator = {
  Profile: {userId?: string; username?: string};
  EditProfile: undefined;
  FollowersScreen: {followeeId: string};
  FollowingsScreen: {followerId: string};
};

export type FollowersScreenRouteProps = RouteProp<
  ProfileStackNavigator,
  'FollowersScreen'
>;
export type FollowingsScreenRouteProps = RouteProp<
  ProfileStackNavigator,
  'FollowingsScreen'
>;
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

export type CreatePostNavigationProp = CompositeNavigationProp<
  NativeStackNavigationProp<UploadStackNavigatorParamList, 'CreatePost'>,
  BottomTabNavigationProp<BottomNavigatorParamList>
>;
