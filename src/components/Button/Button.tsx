import React from 'react';

import {Button as ButtonRN, ButtonProps} from 'react-native';
interface ICustomButton extends ButtonProps {
  title: string;
  onPress?: () => void;
}
const Button = ({title, onPress, ...rest}: ICustomButton) => {
  return <ButtonRN title={title} onPress={onPress} {...rest} />;
};

export default Button;
