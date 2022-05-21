import {StyleSheet} from 'react-native';
import {colors} from '@theme/colors';

export const styles = StyleSheet.create({
  input: {
    borderBottomWidth: 1,
    borderColor: colors.lightgray,
  },
  rowDataContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 2,
  },
  dataTitle: {
    color: colors.gray,
    width: '22%',
  },
});
