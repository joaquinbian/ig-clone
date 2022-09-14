import {StyleSheet} from 'react-native';
import {colors} from '@theme/colors';
import {weight} from '@theme/fonts';

export const styles = StyleSheet.create({
  avatar: {width: 100, aspectRatio: 1, borderRadius: 50},
  container: {
    // padding: 10,
    flex: 1,
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
  button: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: colors.lightgray,
    marginHorizontal: 5,
    borderRadius: 5,
  },
  buttonTitle: {color: colors.black},
  buttonFollow: {
    backgroundColor: colors.primary,
    borderWidth: 1,
    borderColor: 'transparent',
  },
  buttonSignOut: {
    backgroundColor: colors.error,
  },
});
