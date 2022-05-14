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

export const weight: {[key: string]: TextStyle['fontWeight']} = {
  bold: 'bold',
  normal: 'normal',
  thin: '400',
  semi: '600',
  full: '900',
};
