import {CognitoUser} from 'amazon-cognito-identity-js';
import {Auth, Hub} from 'aws-amplify';
import {useContext, useEffect} from 'react';
import {useState} from 'react';
import {createContext} from 'react';

//undefined means is not authenticated neither not authenticated
type UserType = CognitoUser | null | undefined;

interface IAuthContext {
  user: UserType;
}

interface IAuthProviderProps {
  children: JSX.Element | JSX.Element[];
}

const AuthContext = createContext({} as IAuthContext);

export const AuthProvider = ({children}: IAuthProviderProps) => {
  const [user, setUser] = useState<UserType>(undefined);

  const checkUser = async () => {
    try {
      //bypassCache makes sure that the user comes from the server and not locally
      const user = await Auth.currentAuthenticatedUser({bypassCache: true});
      setUser(user);
    } catch (error) {
      setUser(null);
    }
  };

  useEffect(() => {
    checkUser();
  }, []);

  const authListener = (data: any) => {
    if (data.payload.event === 'signOut') {
      setUser(null);
    }
    if (data.payload.event === 'signIn') {
      checkUser();
    }
  };
  useEffect(() => {
    Hub.listen('auth', authListener);

    return () => {
      Hub.remove('auth', authListener);
    };
  }, []);

  return <AuthContext.Provider value={{user}}>{children}</AuthContext.Provider>;
};

export const useAuthContext = () => useContext(AuthContext);
