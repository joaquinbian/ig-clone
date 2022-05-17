import React, {useRef} from 'react';
import {Pressable as PressableRN, PressableProps} from 'react-native';
import {colors} from '../../theme/colors';

interface IPressableProps extends PressableProps {
  children: JSX.Element[] | JSX.Element;
  onDoublePress?: () => void;
}

const Pressable = ({children, onDoublePress, ...rest}: IPressableProps) => {
  const lastTap = useRef<number>(0);

  const onDoubleTap = () => {
    const tap = Date.now();
    if (tap - lastTap.current < 500) {
      onDoublePress?.();
    } else {
      lastTap.current = Date.now();
    }
  };

  return (
    <PressableRN onPress={onDoubleTap} {...rest}>
      {children}
    </PressableRN>
  );
};

export default Pressable;
