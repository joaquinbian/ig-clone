import React, {useEffect, useRef, useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {
  Camera,
  CameraPictureOptions,
  CameraRecordingOptions,
  CameraType,
  FlashMode,
  VideoQuality,
} from 'expo-camera';
import {colors} from '@theme/colors';
import {useIsFocused, useNavigation} from '@react-navigation/native';
import {
  CameraScreenNaviationProp,
  CreatePostRouteProp,
} from '@navigation/types';
import {Asset, launchImageLibrary} from 'react-native-image-picker';

const flashModes: FlashMode[] = [
  FlashMode.auto,
  FlashMode.off,
  FlashMode.on,
  FlashMode.torch,
];

// TODO : check if i can make this an enum
const flashIcon = {
  auto: 'flash-auto',
  off: 'flash-off',
  on: 'flash-on',
  torch: 'highlight',
};

const cameraOptions: CameraPictureOptions = {
  quality: 0.5,
  skipProcessing: true,
  base64: false,
};

const videoOptions: CameraRecordingOptions = {
  mute: false,
  quality: VideoQuality['480p'],
  maxDuration: 60,
  maxFileSize: 10 * 1024 * 1024,
};

interface ICreatePostParams {
  image?: string;
  images?: string[];
  video?: string;
}
const CameraScreen = () => {
  const [hasPermission, setHasPermission] = useState<boolean | null>(null);
  const [type, setType] = useState<CameraType>(CameraType.back);
  const camera = useRef<Camera | null>();
  const [image, setImage] = useState<string | undefined>();
  const [isFlashActivate, setIsFlashActivate] = useState<FlashMode>(
    FlashMode.auto,
  );
  const [isCameraReady, setIsCameraReady] = useState<boolean>(false);
  const [isRecording, setIsRecording] = useState<boolean>(false);
  const isFocused = useIsFocused();

  const navigation = useNavigation<CameraScreenNaviationProp>();

  useEffect(() => {
    (async () => {
      const {status} = await Camera.requestCameraPermissionsAsync();
      const {status: microhonePermission} =
        await Camera.requestMicrophonePermissionsAsync();
      setHasPermission(
        status === 'granted' && microhonePermission === 'granted',
      );
    })();
  }, []);

  const takePicture = async () => {
    try {
      if (camera.current && isCameraReady) {
        const data = await camera.current.takePictureAsync(cameraOptions);
        console.log(data.uri);
        setImage(data?.uri);
        navigation.navigate('CreatePost', {
          image: data?.uri,
        });
      }
    } catch (error) {
      console.log((error as Error).message);
    }
  };

  const toggleFlash = () => {
    const currentMode = flashModes.indexOf(isFlashActivate);
    const nextIndex: number =
      currentMode === flashModes.length - 1 ? 0 : currentMode + 1;

    setIsFlashActivate(flashModes[nextIndex]);
  };

  const toggleCameraType = () => {
    setType(type =>
      type === CameraType.back ? CameraType.front : CameraType.back,
    );
  };

  const setCameraReady = () => {
    setIsCameraReady(true);
  };
  const startRecording = async () => {
    if (!isRecording && camera.current && isCameraReady) {
      setIsRecording(true);
      //cuando paremos el video o la max quality o el max size se alcance, obtenemos el video
      //terminar de ver esto y ponerlo adentro de un try catch
      try {
        await camera.current.recordAsync(videoOptions);
      } catch (error) {
        setIsRecording(false);
      }

      // console.log({video});
    }
  };

  const stopRecording = () => {
    if (isRecording && camera.current) {
      camera.current.stopRecording();
      setIsRecording(false);
    }
  };
  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  const launchGallery = async () => {
    const {didCancel, assets, errorCode} = await launchImageLibrary({
      mediaType: 'mixed',
      selectionLimit: 10,
    });

    if (!didCancel && !errorCode && assets) {
      // console.log({assets});
      if (assets.length === 1) {
        /* navigation.navigate('CreatePost', {
          image: assets[0].uri,
        }); */
        if (assets[0].type?.startsWith('video')) {
          navigateToCreatePost({video: assets[0].uri});
        } else {
          navigateToCreatePost({image: assets[0].uri});
        }
      } else if (assets.length > 1) {
        /* navigation.navigate('CreatePost', {
          images: assets.map(asset => asset.uri as string),
        }); */
        navigateToCreatePost({
          images: assets.map(asset => asset.uri as string),
        });
      }
    }
  };

  const navigateToCreatePost = (params: ICreatePostParams) => {
    navigation.navigate('CreatePost', params);
  };

  return (
    isFocused && (
      <View style={styles.container}>
        <View style={styles.buttonContainer}>
          <MaterialIcons name="settings" color={colors.white} size={30} />
          <MaterialIcons
            name={flashIcon[isFlashActivate]}
            color={colors.white}
            size={30}
            onPress={toggleFlash}
          />
          <MaterialIcons name="close" color={colors.white} size={30} />
        </View>
        <Camera
          flashMode={isFlashActivate}
          style={styles.camera}
          type={type}
          ref={ref => (camera.current = ref)}
          onCameraReady={setCameraReady}
        />
        <View style={styles.buttonContainer}>
          <MaterialIcons
            name="flip-camera-ios"
            color={colors.white}
            size={30}
            onPress={toggleCameraType}
          />
          {isCameraReady && (
            <TouchableOpacity
              onLongPress={startRecording}
              onPressOut={stopRecording}
              activeOpacity={0.8}
              style={[styles.circle, isRecording && {backgroundColor: 'red'}]}
              onPress={takePicture}
            />
          )}
          <TouchableOpacity activeOpacity={0.8} onPress={launchGallery}>
            <MaterialIcons name="collections" color={colors.white} size={30} />
          </TouchableOpacity>
        </View>
      </View>
    )
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: colors.black,
  },
  camera: {
    width: '100%',
    aspectRatio: 3 / 4,
  },
  buttonContainer: {
    flex: 1,
    backgroundColor: 'transparent',
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row',
  },
  button: {
    flex: 0.1,
    alignSelf: 'flex-end',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    color: 'white',
  },
  circle: {
    width: 60,
    aspectRatio: 1,
    borderRadius: 30,
    backgroundColor: 'white',
  },
});

export default CameraScreen;
