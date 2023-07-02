import React from 'react';

import {
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  StyleProp,
  TextStyle,
  ActivityIndicator,
} from 'react-native';
import {styles} from './styles';

interface ICustomButton extends TouchableOpacityProps {
  title: string;
  onPress?: () => void;
  style?: TouchableOpacityProps['style'];
  titleStyle?: StyleProp<TextStyle>;
  isLoading?: boolean;
}
const Button = ({
  title,
  onPress,
  style = {},
  titleStyle = {},
  isLoading = false,
  ...rest
}: ICustomButton) => {
  // return <ButtonRN title={title} onPress={onPress} {...rest} />;

  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={rest.activeOpacity || 0.9}
      style={[styles.buttonStyles, style]}
      {...rest}>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <Text style={[styles.text, titleStyle]}>{title}</Text>
      )}
    </TouchableOpacity>
  );
};

export default Button;
