import {createNativeStackNavigator} from '@react-navigation/native-stack';
import CameraScreen from '@screens/CameraScreen';
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
      <Stack.Screen name="CreatePost" component={CameraScreen} />
    </Stack.Navigator>
  );
}
