/* eslint-disable eslint-comments/no-unlimited-disable */
/* eslint-disable */
import {StyleSheet, View} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import Amplify from 'aws-amplify';
import config from 'src/aws-exports';
import Navigation from '@navigation/index';

Amplify.configure(config);

const App = () => {
  return (
    <SafeAreaProvider>
      <View style={styles.container}>
        <Navigation />
      </View>
    </SafeAreaProvider>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
