/* eslint-disable eslint-comments/no-unlimited-disable */
/* eslint-disable */
import {StyleSheet, View} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import Amplify from 'aws-amplify';
import config from 'src/aws-exports';
import Navigation from '@navigation/index';
import {AuthProvider} from '@context/AuthContext';

Amplify.configure(config);

const App = () => {
  return (
    <AuthProvider>
      <Navigation />
    </AuthProvider>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
