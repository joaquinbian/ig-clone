import React from 'react';
import ProfileHeader from './ProfileHeader';
import FeedGridView from '@components/FeedGridView';
import {useNavigation, useRoute} from '@react-navigation/native';
import {
  BottomNavigatorParamList,
  UserProfileNavigatorProps,
  ProfileBottomRouteProp,
  UserProfileRouteProp,
} from '@navigation/types';
import {useQuery} from '@apollo/client';
import {getUserById, GetUserQueryById} from './queries';
import {GetUserQuery, GetUserQueryVariables} from 'src/API';
import Loading from '@components/Loading';
import ApiErrorMessage from '@components/ApiErrorMessage';

const ProfileScreen = () => {
  const route = useRoute<ProfileBottomRouteProp | UserProfileRouteProp>();
  const {data, error, loading} = useQuery<
    GetUserQueryById,
    GetUserQueryVariables
  >(getUserById, {variables: {id: route.params?.userId!}});

  //dependiendo de como entremos tinee un tipado u otro
  const navigation = useNavigation<
    BottomNavigatorParamList | UserProfileNavigatorProps
  >();

  //console.warn('userid: ', route.params?.userId);

  if (loading) {
    return <Loading text="loading user..." />;
  }

  if (error) {
    return (
      <ApiErrorMessage title="error fetching user" message={error.message} />
    );
  }

  return (
    <FeedGridView
      data={data?.getUser?.Posts?.items ?? []}
      ListHeaderComponent={() => (
        <ProfileHeader
          numberOfFollowers={data?.getUser?.numberOfFollowers ?? 0}
          numberOfFollowings={data?.getUser?.numberOfFollowings ?? 0}
          numberOfPosts={data?.getUser?.numberOfPosts ?? 0}
          bio={data?.getUser?.bio}
          username={data?.getUser?.username}
        />
      )}
    />
  );
};

export default ProfileScreen;
