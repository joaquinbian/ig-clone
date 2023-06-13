import React, {useState} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import FormInput from '@components/CustomInput';
import CustomButton from '../components/CustomButton';
import SocialSignInButtons from '../components/SocialSignInButtons';
import {useNavigation} from '@react-navigation/core';
import {useForm} from 'react-hook-form';
import {
  ConfirmEmailNavigationProp,
  ConfirmEmailRouteProp,
} from '@navigation/types';
import {useRoute} from '@react-navigation/native';
import {Auth} from 'aws-amplify';

type ConfirmEmailData = {
  email: string;
  code: string;
};

const EMAIL_REGEX =
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

const ConfirmEmailScreen = () => {
  const route = useRoute<ConfirmEmailRouteProp>();
  const {control, handleSubmit, watch} = useForm<ConfirmEmailData>({
    defaultValues: {email: route.params.email},
  });
  const [isLoading, setIsLoading] = useState(false);

  const navigation = useNavigation<ConfirmEmailNavigationProp>();

  const email = watch('email');

  const onConfirmPressed = async (data: ConfirmEmailData) => {
    setIsLoading(true);
    try {
      const res = await Auth.confirmSignUp(data.email, data.code);
      navigation.navigate('Sign in');
    } catch (error) {
      console.log({error});
    } finally {
      setIsLoading(false);
    }
    console.warn(data);
  };

  const onSignInPress = () => {
    navigation.navigate('Sign in');
  };

  const onResendPress = async () => {
    console.log('onresend pressed');

    try {
      await Auth.resendSignUp(email);
      console.log('code resent successfully');
    } catch (err) {
      console.log('error resending code: ', err);
    }
    console.warn('onResendPress');
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Text style={styles.title}>Confirm your email</Text>

        <FormInput
          name="email"
          control={control}
          placeholder="Email"
          rules={{
            required: 'Email is required',
            pattern: {
              value: EMAIL_REGEX,
              message: 'invalid email',
            },
          }}
        />

        <FormInput
          name="code"
          control={control}
          placeholder="Enter your confirmation code"
          rules={{
            required: 'Confirmation code is required',
          }}
        />

        <CustomButton
          text="Confirm"
          onPress={handleSubmit(onConfirmPressed)}
          isLoading={isLoading}
        />

        <CustomButton
          text="Resend code"
          onPress={onResendPress}
          type="SECONDARY"
        />

        <CustomButton
          text="Back to Sign in"
          onPress={onSignInPress}
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
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#051C60',
    margin: 10,
  },
  text: {
    color: 'gray',
    marginVertical: 10,
  },
  link: {
    color: '#FDB075',
  },
});

export default ConfirmEmailScreen;
