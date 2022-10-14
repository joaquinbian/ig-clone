import React from 'react';
import {StyleProp, Text, TextStyle, TextProps} from 'react-native';
import {weight} from '@theme/fonts';

interface Props extends TextProps {
  children: string | number | JSX.Element | JSX.Element[];
  style?: StyleProp<TextStyle>;
}
const BoldText = ({style, children, ...rest}: Props) => {
  return (
    <Text style={[style, {fontWeight: weight.bold}]} {...rest}>
      {children}
    </Text>
  );
};

export default BoldText;
