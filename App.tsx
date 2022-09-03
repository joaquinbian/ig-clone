/* eslint-disable eslint-comments/no-unlimited-disable */
/* eslint-disable */
import {StyleSheet, View} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import Amplify from 'aws-amplify';
import {withAuthenticator} from 'aws-amplify-react-native';
import config from 'src/aws-exports';
import Navigation from '@navigation/index';

Amplify.configure(config);

const App = () => {
  return <Navigation />;
};

const signUpConfig = {
  hideAllDefaults: true,
  signUpFields: [
    {
      label: 'Full name',
      key: 'name',
      required: true,
      displayOrder: 1,
      type: 'string',
      placeholder: 'Full name',
    },
    {
      label: 'Email',
      key: 'email',
      required: true,
      displayOrder: 2,
      type: 'string',
      placeholder: 'Email',
    },
    {
      label: 'Username',
      key: 'username',
      required: true,
      displayOrder: 3,
      type: 'string',
      placeholder: 'Username/handle',
    },
    {
      label: 'Password',
      key: 'password',
      required: true,
      displayOrder: 4,
      type: 'password',
      placeholder: 'Password',
    },
  ],
};

const usernameAttributes = 'Username';

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
