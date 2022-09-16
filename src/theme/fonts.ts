import {TextStyle} from 'react-native';
export const size = {
  xs: 10,
  sm: 12,
  default: 14,
  md: 16,
  lg: 20,
  xlg: 24,
  xxlg: 30,
};

type FontWeightKeys = 'bold' | 'normal' | 'thin' | 'semi' | 'full';

type FontWeightValues = TextStyle['fontWeight'];

export const weight: Record<FontWeightKeys, FontWeightValues> = {
  bold: 'bold',
  normal: 'normal',
  thin: '400',
  semi: '600',
  full: '900',
};
