import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {useRoute} from '@react-navigation/native';
import {CreatePostRouteProp} from '@navigation/types';
import CustomInput from '@components/CustomInput';
import {useForm} from 'react-hook-form';
import {ApolloError} from '@apollo/client';
import Button from '@components/Button';
import {colors} from '@theme/colors';
import CustomButton from '@screens/Auth/components/CustomButton';

interface ICreatePost {
  description: string;
}

export default function CreatePostScreen() {
  const route = useRoute<CreatePostRouteProp>();
  const {control, handleSubmit} = useForm<ICreatePost>({
    defaultValues: {description: ''},
    mode: 'all',
  });

  const {image} = route.params;

  const createPost = (data: ICreatePost) => {
    console.log({data});
  };

  return (
    <View style={{alignItems: 'center', padding: 10}}>
      <Image source={{uri: image}} style={styles.image} />
      <View style={{marginVertical: 10, alignSelf: 'stretch'}}>
        <CustomInput
          control={control}
          name="description"
          placeholder="insert a description here..."
          rules={{
            maxLength: {
              value: 2,
              message: 'description can not exceed 100 characters',
            },
          }}
          multiline
        />
        <CustomButton
          type="PRIMARY"
          text="Submit"
          onPress={handleSubmit(createPost)}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: 150,
    aspectRatio: 1,
  },
});
