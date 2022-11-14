import React, {useEffect, useRef, useState} from 'react';
import {useWindowDimensions, View} from 'react-native';
import Video from 'react-native-video';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {styles} from './styles';
import {colors} from '@theme/colors';
import Pressable from '@components/Pressable';
import CustomVideo from '@components/CustomVideo';

interface IProps {
  source: string;
  isVisible?: boolean;
  onLikePost?: () => void;
}
const VideoPlayer = ({source: uri, isVisible, onLikePost}: IProps) => {
  const [isMuted, setIsMuted] = useState<boolean>(false);
  const [isPaused, setIsPaused] = useState<boolean | undefined>(isVisible);
  const {width} = useWindowDimensions();

  const toggleMuted = () => {
    setIsMuted(isMuted => !isMuted);
  };

  const togglePaused = () => {
    setIsPaused(isPaused => !isPaused);
  };

  useEffect(() => {
    console.log('me ejecuto is visible');

    togglePaused();
  }, [isVisible]);
  return (
    <View>
      {/* ver si puedo wrappearlo con un touchable withouth feedback para mutear el video
          agregra el timepo del video
       */}
      <Pressable onDoublePress={onLikePost} onPress={toggleMuted}>
        <CustomVideo
          uri={uri}
          isMuted={isMuted}
          isPaused={!!isPaused}
          width={width}
          repeat
        />
      </Pressable>
      <Ionicons
        onPress={toggleMuted}
        name={isMuted ? 'md-volume-mute' : 'md-volume-high'}
        color={colors.white}
        style={styles.muteBtn}
        size={15}
      />
    </View>
  );
};

export default VideoPlayer;
