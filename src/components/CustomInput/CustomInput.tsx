import React from 'react';
import {
  Controller,
  Control,
  RegisterOptions,
  Path,
  FieldValues,
} from 'react-hook-form';
import {View, Text, TextInput} from 'react-native';
import {styles} from './styles';
import {colors} from '@theme/colors';
interface ICustomInput<FormType extends FieldValues> {
  control: Control<FormType, object>;
  name: Path<FormType>;
  rules?: RegisterOptions;
  placeholder?: string;
  secureTextEntry?: boolean;
}
function EditProfileInput<FormType extends FieldValues>({
  placeholder,
  name,
  control,
  rules,
  secureTextEntry = false,
}: ICustomInput<FormType>) {
  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({field: {onBlur, onChange, value}, fieldState: {error}}) => {
        return (
          <View style={styles.rowDataContainer}>
            <View style={{flex: 1}}>
              <TextInput
                placeholder={placeholder}
                value={value}
                onChangeText={onChange}
                onBlur={onBlur}
                style={[
                  styles.input,
                  error && {borderBottomColor: colors.error},
                ]}
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
}

export default EditProfileInput;
