import React, {useEffect, useRef, useState} from 'react';
import {useWindowDimensions, View} from 'react-native';
import Video from 'react-native-video';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {styles} from './styles';
import {colors} from '@theme/colors';

interface IProps {
  source: string;
  isVisible?: boolean;
}
const VideoPlayer = ({source: uri, isVisible}: IProps) => {
  const player = useRef<Video | null>();
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
      {/* ver si puedo wrappearlo con un touchable withouth feedback para pausar el video
          agregra el timepo del video
       */}
      <Video
        ref={ref => (player.current = ref)}
        source={{uri}}
        style={[{width, aspectRatio: 1}]}
        resizeMode="cover"
        muted={isMuted}
        paused={isPaused}
        repeat
      />
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
