import {CognitoHostedUIIdentityProvider} from '@aws-amplify/auth';
import {Auth} from 'aws-amplify';
import React, {useState} from 'react';
import {Alert} from 'react-native';
import CustomButton from '../CustomButton';

const SocialSignInButtons = () => {
  const [isLoadingFacebook, setIsLoadingFacebook] = useState(false);
  const [isLoadingGoogle, setisLoadingGoogle] = useState(false);
  const onSignInFacebook = async () => {
    setIsLoadingFacebook(true);
    try {
      await Auth.federatedSignIn({
        provider: CognitoHostedUIIdentityProvider.Facebook,
      });
      console.warn('onSignInFacebook');
    } catch (error) {
      Alert.alert((error as Error).message);
    } finally {
      setIsLoadingFacebook(false);
    }
  };

  const onSignInGoogle = async () => {
    setisLoadingGoogle(true);
    try {
      await Auth.federatedSignIn({
        provider: CognitoHostedUIIdentityProvider.Google,
      });
      console.warn('onSignInGoogle');
    } catch (error) {
      console.log({error});

      Alert.alert((error as Error).message);
    } finally {
      setisLoadingGoogle(false);
    }
  };

  const onSignInApple = () => {
    console.warn('onSignInApple');
  };

  return (
    <>
      <CustomButton
        text="Sign In with Facebook"
        onPress={onSignInFacebook}
        bgColor="#E7EAF4"
        fgColor="#4765A9"
        isLoading={isLoadingFacebook}
      />
      <CustomButton
        text="Sign In with Google"
        onPress={onSignInGoogle}
        bgColor="#FAE9EA"
        fgColor="#DD4D44"
        isLoading={isLoadingGoogle}
      />
      {/*    <CustomButton
        text="Sign In with Apple"
        onPress={onSignInApple}
        bgColor="#e3e3e3"
        fgColor="#363636"
      /> */}
    </>
  );
};

export default SocialSignInButtons;
