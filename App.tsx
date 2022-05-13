import {StyleSheet, Text, View} from 'react-native';
import MyFirstCOmponent from '@components/MyFirstCOmponent';
import {colors} from '@theme/colors';
import {size} from '@theme/fonts';

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={{color: colors.gray, fontSize: size.xlg}}>
        instagram clone! jeje 💃
      </Text>
      <MyFirstCOmponent />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'white',
  },
});
