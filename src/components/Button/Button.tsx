import React from 'react';

import {Button as ButtonRNE, ButtonProps} from '@rneui/base';

interface ICustomButton extends ButtonProps {
  title: string;
  onPress?: () => void;
}
const Button = ({title, onPress, ...rest}: ICustomButton) => {
  return <ButtonRNE title={title} onPress={onPress} {...rest} />;
};

export default Button;
