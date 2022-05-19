import React from 'react';
import {Button as ButtonRN, ButtonProps} from 'react-native';

const Button = (props: ButtonProps) => {
  return <ButtonRN {...props} />;
};

export default Button;
