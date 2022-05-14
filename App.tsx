import {StyleSheet, Text, View} from 'react-native';
import {colors} from '@theme/colors';
import {size} from '@theme/fonts';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Post from '@components/Post';

const App = () => {
  return (
    <View style={styles.container}>
      <Post />
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
