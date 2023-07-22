import {useQuery} from '@apollo/client';
import {createContext, useContext, useMemo} from 'react';
import {userNotifications} from './queries';
import {UserNotificationsQuery, UserNotificationsQueryVariables} from 'src/API';
import {useAuthContext} from '@context/AuthContext';

interface NotificationContextProvider {
  children: JSX.Element | JSX.Element[];
}
interface INotificationContext {
  newNotifications: number;
}
const NotificationContext = createContext({} as INotificationContext);

export function NotificationContextProvider({
  children,
}: NotificationContextProvider) {
  const {userId: userID} = useAuthContext();
  const {data} = useQuery<
    UserNotificationsQuery,
    UserNotificationsQueryVariables
  >(userNotifications, {variables: {userID}});

  const NEW_NOTIFICATIONS = (data?.userNotifications?.items ?? []).filter(
    notification => !notification?._deleted && !notification?.readAt,
  );

  const contextValue: INotificationContext = useMemo(() => {
    return {newNotifications: NEW_NOTIFICATIONS.length};
  }, [NEW_NOTIFICATIONS.length]);

  return (
    <NotificationContext.Provider value={contextValue}>
      {children}
    </NotificationContext.Provider>
  );
}

export const useNotifications = () => useContext(NotificationContext);
