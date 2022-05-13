import {StyleSheet, Text, View} from 'react-native';
import {colors} from '@theme/colors';
import {size} from '@theme/fonts';
import AntDesign from 'react-native-vector-icons/AntDesign';

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={{color: colors.white, fontSize: size.xlg}}>hello world</Text>
      <AntDesign name="twitter" size={25} color="skyblue" />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
});
