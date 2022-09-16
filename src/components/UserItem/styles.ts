import {colors} from '@theme/colors';
import {size, weight} from '@theme/fonts';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 5,
  },
  image: {
    height: 40,
    borderRadius: 25,
    aspectRatio: 1,
    marginRight: 10,
  },
  name: {
    fontWeight: weight.full,
  },
  username: {color: colors.gray, fontSize: size.sm},
});
