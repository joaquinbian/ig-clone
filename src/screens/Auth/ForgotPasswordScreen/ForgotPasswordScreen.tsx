import React, {useState} from 'react';
import {View, Text, StyleSheet, ScrollView, Alert} from 'react-native';
import FormInput from '@components/CustomInput';
import CustomButton from '../components/CustomButton';
import SocialSignInButtons from '../components/SocialSignInButtons';
import {useNavigation} from '@react-navigation/core';
import {useForm} from 'react-hook-form';
import {ForgotPasswordNavigationProp} from '@navigation/types';
import {Auth} from 'aws-amplify';

type ForgotPasswordData = {
  email: string;
};

const ForgotPasswordScreen = () => {
  const {control, handleSubmit} = useForm<ForgotPasswordData>();
  const navigation = useNavigation<ForgotPasswordNavigationProp>();
  const [isLoading, setIsLoading] = useState(false);

  const onSendPressed = async (data: ForgotPasswordData) => {
    setIsLoading(true);
    try {
      const response = await Auth.forgotPassword(data.email);
      Alert.alert(
        'Check your email',
        `the code has been sent to ${response.CodeDeliveryDetails.Destination}`,
        [{onPress: () => navigation.navigate('New password')}],
      );
    } catch (error) {
      Alert.alert((error as Error).message);
    } finally {
      setIsLoading(false);
    }
    console.warn(data);
  };

  const onSignInPress = () => {
    navigation.navigate('Sign in');
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Text style={styles.title}>Reset your password</Text>

        <FormInput
          name="email"
          control={control}
          placeholder="email"
          rules={{
            required: 'email is required',
          }}
        />

        <CustomButton
          text="Send"
          isLoading={isLoading}
          onPress={handleSubmit(onSendPressed)}
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

export default ForgotPasswordScreen;
