import {Storage} from 'aws-amplify';
import {Alert} from 'react-native';
import {v4 as uuidv4} from 'uuid';

export const uploadMedia = async (image: string) => {
  try {
    //get the blob of the fiel from url
    const responseImage = await fetch(image);
    const imageBlob = await responseImage.blob();
    const urlParts = image.split('.');
    const extension = urlParts[urlParts.length - 1];

    //upload the file to S3
    const s3response = await Storage.put(`${uuidv4()}.${extension}`, imageBlob);
    return s3response.key;
  } catch (error) {
    Alert.alert('error uploading image');
  }
};
