import {StyleSheet, Text, View} from 'react-native';
import MyFirstCOmponent from '@components/MyFirstCOmponent';

const App = () => {
  return (
    <View style={styles.container}>
      <Text>instagram clone! jeje 💃</Text>
      <MyFirstCOmponent />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'red',
  },
});
