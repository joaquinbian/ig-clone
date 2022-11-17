import {StyleSheet} from 'react-native';
import {colors} from '../../theme/colors';

export const styles = StyleSheet.create({
  post: {
    backgroundColor: colors.white,
    // flex: 1,
  },
  postHeader: {
    padding: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    // backgroundColor: 'red',
  },

  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    // backgroundColor: 'blue',
  },
  avatar: {
    width: 40,
    aspectRatio: 1,
    borderRadius: 25,
    marginRight: 10,
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
