import {StyleSheet} from 'react-native';
import {colors} from '@theme/colors';

export const styles = StyleSheet.create({
  input: {
    flex: 1,
    marginHorizontal: 5,
  },
  rowDataContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    // marginVertical: 5,
  },
  dataTitle: {
    color: colors.gray,
    width: '20%',
  },
});
