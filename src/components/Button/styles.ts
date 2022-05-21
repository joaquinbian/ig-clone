import {StyleSheet} from 'react-native';
import {colors} from '@theme/colors';
import {weight} from '@theme/fonts';

export const styles = StyleSheet.create({
  buttonStyles: {
    flex: 1,
    borderRadius: 3,
    padding: 5,
    backgroundColor: colors.primary,
    marginVertical: 5,
  },
  text: {
    textAlign: 'center',
    color: colors.white,
    fontWeight: weight.bold,
  },
});
