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

interface FontWeight {
  [key: string]: TextStyle['fontWeight'];
}
export const weight: FontWeight = {
  bold: 'bold',
  normal: 'normal',
  thin: '400',
  semi: '600',
  full: '900',
};
