import {createNativeStackNavigator} from '@react-navigation/native-stack';
import CameraScreen from '@screens/CameraScreen';
import CreatePostScreen from '@screens/CreatePostScreen/CreatePostScreen';
import {UploadStackNavigatorParamList} from './types';

const Stack = createNativeStackNavigator<UploadStackNavigatorParamList>();

export default function UploadPostStackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Camera"
        component={CameraScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="CreatePost"
        component={CreatePostScreen}
        options={{title: 'Create Post', headerTitleAlign: 'center'}}
      />
    </Stack.Navigator>
  );
}
