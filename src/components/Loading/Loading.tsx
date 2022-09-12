import {StyleSheet, Text, View, ActivityIndicator} from 'react-native';
import React from 'react';
import {size, weight} from '@theme/fonts';
import {colors} from '@theme/colors';

interface ILoadingProps {
  text?: string;
  spinnerColor?: string;
}

const Loading = ({
  text = 'loading...',
  spinnerColor = colors.primary,
}: ILoadingProps) => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <ActivityIndicator color={spinnerColor} />
      <Text style={{fontSize: size.md, fontWeight: weight.semi}}>{text}</Text>
    </View>
  );
};

export default Loading;

const styles = StyleSheet.create({});
