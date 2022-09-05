import {CognitoUser} from 'amazon-cognito-identity-js';
import {useContext} from 'react';
import {useState} from 'react';
import {createContext} from 'react';

interface IAuthContext {
  user: CognitoUser | null;
  logOut: () => void;
  signIn: (user: CognitoUser) => void;
}

interface IAuthProviderProps {
  children: JSX.Element | JSX.Element[];
}

const AuthContext = createContext({} as IAuthContext);

export const AuthProvider = ({children}: IAuthProviderProps) => {
  const [user, setUser] = useState<CognitoUser | null>(null);

  const logOut = () => {
    setUser(null);
  };

  const signIn = (user: CognitoUser) => {
    setUser(user);
  };

  return (
    <AuthContext.Provider value={{user, signIn, logOut}}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => useContext(AuthContext);
