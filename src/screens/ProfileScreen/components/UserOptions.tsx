import {Alert, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {
  Menu,
  MenuOption,
  MenuOptions,
  MenuTrigger,
  renderers,
} from 'react-native-popup-menu';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import {weight} from '@theme/fonts';
import {colors} from '@theme/colors';

export default function UserOptions() {
  return (
    <Menu renderer={renderers.SlideInMenu}>
      <MenuTrigger>
        <SimpleLineIcons name="options-vertical" size={16} color="black" />
      </MenuTrigger>
      <MenuOptions
        customStyles={{
          optionsContainer: styles.menuContainer,
        }}>
        <MenuOption onSelect={() => Alert.alert(`block`)}>
          <Text style={[styles.optionText]}>Block </Text>
        </MenuOption>
        <MenuOption onSelect={() => Alert.alert(`report`)}>
          <Text style={[styles.optionText]}>Report </Text>
        </MenuOption>
      </MenuOptions>
    </Menu>
  );
}

const styles = StyleSheet.create({
  optionText: {
    fontWeight: weight.semi,
    textAlign: 'center',
    padding: 10,
  },
  menuContainer: {
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    borderWidth: 1,
    borderColor: colors.lightgray,
  },
});
