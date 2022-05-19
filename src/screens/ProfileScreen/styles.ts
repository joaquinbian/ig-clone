import {StyleSheet} from 'react-native';
import {colors} from '@theme/colors';
import {weight} from '@theme/fonts';

export const styles = StyleSheet.create({
  avatar: {width: 100, aspectRatio: 1, borderRadius: 50},
  container: {
    padding: 10,
  },
  firstRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  dataRowContainer: {
    flexDirection: 'row',
    width: '65%',
    justifyContent: 'space-around',
  },
  dataContainer: {alignItems: 'center'},
  data: {color: colors.black, fontWeight: weight.bold},
  dataTitle: {color: colors.gray},
});
