import React from 'react';
import {View, Text, TextInput} from 'react-native';
import {styles} from './styles';
interface IInput {
  onChangeText?: ((text: string) => void) | undefined;
  value?: string | undefined;
  placeholder?: string | undefined;
  label: string;
  multiline?: boolean;
}
const EditProfileInput = ({
  value,
  onChangeText,
  placeholder,
  label,
  multiline = false,
}: IInput) => {
  return (
    <View style={styles.rowDataContainer}>
      <Text style={styles.dataTitle}>{label}</Text>
      <TextInput
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        style={styles.input}
        multiline={multiline}
      />
    </View>
  );
};

export default EditProfileInput;
