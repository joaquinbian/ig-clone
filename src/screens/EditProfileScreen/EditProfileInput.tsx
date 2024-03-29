import React from 'react';
import {Controller, Control, RegisterOptions} from 'react-hook-form';
import {View, Text, TextInput} from 'react-native';
import {styles} from './styles';
import {IEditableUser, IEditableUserFields} from './types';
import {colors} from '@theme/colors';
interface ICustomInput {
  placeholder?: string | undefined;
  label: string;
  multiline?: boolean;
  control: Control<IEditableUser>;
  name: IEditableUserFields;
  rules?: RegisterOptions;
  secureTextEntry?: boolean;
}
const EditProfileInput = ({
  placeholder,
  label,
  multiline = false,
  name,
  control,
  rules,
  secureTextEntry = false,
}: ICustomInput) => {
  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({field: {onBlur, onChange, value}, fieldState: {error}}) => {
        // console.log({error});

        return (
          <View style={styles.rowDataContainer}>
            <Text style={styles.dataTitle}>{label}</Text>
            <View style={{flex: 1}}>
              <TextInput
                placeholder={placeholder}
                value={value ?? ''}
                onChangeText={onChange}
                onBlur={onBlur}
                style={[
                  styles.input,
                  error && {borderBottomColor: colors.error},
                ]}
                multiline={multiline}
                secureTextEntry={secureTextEntry}
              />
              {error && (
                <Text style={{color: colors.error}}>
                  {error.message || 'error'}
                </Text>
              )}
            </View>
          </View>
        );
      }}
    />
  );
};

export default EditProfileInput;
