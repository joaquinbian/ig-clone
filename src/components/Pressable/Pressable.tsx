import React, {useRef} from 'react';
import {Pressable as PressableRN, PressableProps} from 'react-native';

interface IPressableProps extends PressableProps {
  children: JSX.Element[] | JSX.Element;
  onDoublePress?: () => void;
  onPress?: () => void;
}

const Pressable = ({
  children,
  onDoublePress,
  onPress,
  ...rest
}: IPressableProps) => {
  const lastTap = useRef<number>(0);

  let timeOut: any;
  const _onPress = () => {
    const tap = Date.now();
    //ver si con un timeout puedo manejar lo del onpress
    if (tap - lastTap.current < 300) {
      // console.log('entro al double press');

      clearTimeout(timeOut);
      onDoublePress?.();
    } else {
      timeOut = setTimeout(() => {
        onPress?.();
      }, 500);
    }
    console.log(tap - lastTap.current);

    lastTap.current = Date.now();
  };

  return (
    <PressableRN onPress={_onPress} {...rest}>
      {children}
    </PressableRN>
  );
};

export default Pressable;
