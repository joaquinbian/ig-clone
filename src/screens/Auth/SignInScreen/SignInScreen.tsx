import {
  View,
  Image,
  StyleSheet,
  useWindowDimensions,
  ScrollView,
  Alert,
} from 'react-native';
import Logo from '../../../assets/images/logo.png';
import {Auth} from 'aws-amplify';
import FormInput from '@components/CustomInput';
import CustomButton from '../components/CustomButton';
import SocialSignInButtons from '../components/SocialSignInButtons';
import {useNavigation} from '@react-navigation/native';
import {useForm} from 'react-hook-form';
import {SignInNavigationProp} from '@navigation/types';
import {useState} from 'react';

//TODO: FIX THIS
import {useAuthContext} from '../../../context/AuthContext';

type SignInData = {
  email: string;
  password: string;
};

const SignInScreen = () => {
  const {height} = useWindowDimensions();
  const navigation = useNavigation<SignInNavigationProp>();
  const [isLoading, setIsLoading] = useState(false);
  const {signIn} = useAuthContext();

  const {control, handleSubmit, reset} = useForm<SignInData>();

  const onSignInPressed = async (data: SignInData) => {
    setIsLoading(true);
    try {
      const cognitoUser = await Auth.signIn(data.email, data.password);
      signIn(cognitoUser);
    } catch (error) {
      //if user is not confirmated, we go to the confirm screen
      if ((error as Error).name === 'UserNotConfirmedException') {
        navigation.navigate('Confirm email', {email: data.email});
      } else {
        Alert.alert((error as Error).message);
      }
      console.log({error});
    } finally {
      reset();
      setIsLoading(false);
    }
    // validate user
    // navigation.navigate('Home');
  };

  const onForgotPasswordPressed = () => {
    navigation.navigate('Forgot password');
  };

  const onSignUpPress = () => {
    navigation.navigate('Sign up');
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Image
          source={Logo}
          style={[styles.logo, {height: height * 0.3}]}
          resizeMode="contain"
        />

        <FormInput
          name="email"
          placeholder="Email"
          control={control}
          rules={{required: 'Username is required'}}
        />

        <FormInput
          name="password"
          placeholder="Password"
          secureTextEntry
          control={control}
          rules={{
            required: 'Password is required',
            minLength: {
              value: 3,
              message: 'Password should be minimum 3 characters long',
            },
          }}
        />

        <CustomButton
          text="Sign In"
          isLoading={isLoading}
          onPress={handleSubmit(onSignInPressed)}
        />

        <CustomButton
          text="Forgot password?"
          onPress={onForgotPasswordPressed}
          type="TERTIARY"
        />

        <SocialSignInButtons />

        <CustomButton
          text="Don't have an account? Create one"
          onPress={onSignUpPress}
          type="TERTIARY"
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    padding: 20,
  },
  logo: {
    width: '70%',
    maxWidth: 300,
    maxHeight: 200,
  },
});

export default SignInScreen;
