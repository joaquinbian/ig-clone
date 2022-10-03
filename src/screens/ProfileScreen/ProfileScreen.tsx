import React, {useEffect} from 'react';
import ProfileHeader from './ProfileHeader';
import FeedGridView from '@components/FeedGridView';
import {useNavigation, useRoute} from '@react-navigation/native';
import {
  BottomNavigatorParamList,
  UserProfileNavigatorProps,
  ProfileBottomRouteProp,
  UserProfileRouteProp,
  ProfileBottomNavigatorProp,
} from '@navigation/types';
import {useQuery} from '@apollo/client';
import {getUserById, GetUserQueryById} from './queries';
import {GetUserQuery, GetUserQueryVariables} from 'src/API';
import Loading from '@components/Loading';
import ApiErrorMessage from '@components/ApiErrorMessage';
import {useAuthContext} from '@context/AuthContext';
import {LoneSchemaDefinition} from 'graphql/validation/rules/LoneSchemaDefinition';

const ProfileScreen = () => {
  const route = useRoute<ProfileBottomRouteProp | UserProfileRouteProp>();
  const {user} = useAuthContext();
  const {data, error, loading, refetch} = useQuery<
    GetUserQuery,
    GetUserQueryVariables
  >(getUserById, {
    variables: {
      id:
        route.name === 'UserProfile'
          ? route.params?.userId!
          : user?.attributes.sub,
    },
  });

  //dependiendo de como entremos tinee un tipado u otro
  const navigation = useNavigation<
    ProfileBottomNavigatorProp | UserProfileNavigatorProps
  >();

  //TODO:
  //MEJORAR PARA EL PROFILE DEL USER LOGUEADO
  useEffect(() => {
    navigation.setOptions({
      title:
        route.name === 'UserProfile'
          ? route.params.username
          : data?.getUser?.username ?? 'Profile',
    });
  }, []);

  //console.warn('userid: ', route.params?.userId);

  if (loading) {
    return <Loading text="loading user..." />;
  }

  if (error) {
    return (
      <ApiErrorMessage
        onRetry={refetch}
        title="error fetching user"
        message={error.message}
      />
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
          id={data?.getUser?.id ?? ''}
          image={data?.getUser?.image}
        />
      )}
      refreshing={loading}
      onRefresh={refetch}
    />
  );
};

export default ProfileScreen;
