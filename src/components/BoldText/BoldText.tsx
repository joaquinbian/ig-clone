import React, {PropsWithChildren} from 'react';
import {StyleProp, Text, TextStyle, TextProps} from 'react-native';
import {weight} from '@theme/fonts';

interface Props extends TextProps {
  style?: StyleProp<TextStyle>;
}
const BoldText = ({style, children, ...rest}: PropsWithChildren<Props>) => {
  return (
    <Text style={[style, {fontWeight: weight.bold}]} {...rest}>
      {children}
    </Text>
  );
};

export default BoldText;
