import {colors} from '@theme/colors';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  icon: {
    marginHorizontal: 5,
  },
  userImage: {
    width: 30,
    aspectRatio: 1,
    borderRadius: 15,
    position: 'relative',
    alignSelf: 'flex-start',
    marginRight: 10,
  },
  labelsFooterContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  labelsFooterText: {
    color: colors.lightgray,
    marginRight: 5,
  },
  usernameContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    //para que ocupe solo el width q le corresponda
  },
  menuContainer: {
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    borderWidth: 1,
    borderColor: colors.lightgray,
  },
});
