import React from 'react';
import {StyleProp, StyleSheet, Text, TextStyle, View} from 'react-native';
import {weight} from '@theme/fonts';

interface Props {
  children: string | number | JSX.Element | JSX.Element[];
  style?: StyleProp<TextStyle>;
}
const BoldText = ({style, children}: Props) => {
  return <Text style={[style, {fontWeight: weight.bold}]}>{children}</Text>;
};

export default BoldText;
