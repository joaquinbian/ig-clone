import React from 'react';

import {
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  StyleProp,
  TextStyle,
} from 'react-native';
import {styles} from './styles';
interface ICustomButton extends TouchableOpacityProps {
  title: string;
  onPress?: () => void;
  style?: TouchableOpacityProps['style'];
  titleStyle?: StyleProp<TextStyle>;
}
const Button = ({
  title,
  onPress,
  style = {},
  titleStyle = {},
  ...rest
}: ICustomButton) => {
  // return <ButtonRN title={title} onPress={onPress} {...rest} />;
  return (
    <TouchableOpacity
      onPress={onPress}
      {...rest}
      activeOpacity={rest.activeOpacity || 0.9}
      style={[styles.buttonStyles, style]}>
      <Text style={[styles.text, titleStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;
