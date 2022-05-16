import {StyleSheet} from 'react-native';
import {colors} from '../../theme/colors';

export const styles = StyleSheet.create({
  post: {
    backgroundColor: colors.white,
    // flex: 1,
  },
  icon: {
    marginHorizontal: 5,
  },
  postInfo: {
    color: colors.black,
    paddingHorizontal: 5,
  },
  postImage: {width: '100%', aspectRatio: 1},
});
