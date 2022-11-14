import {StyleSheet, Text, View} from 'react-native';
import React, {useRef} from 'react';
import Video from 'react-native-video';

interface IVideo {
  uri: string;
  width: number;
  isMuted: boolean;
  isPaused: boolean;
  repeat?: boolean;
}

export default function CustomVideo({
  uri,
  width,
  isMuted,
  isPaused,
  repeat = false,
}: IVideo) {
  const player = useRef<Video | null>();

  return (
    <Video
      ref={ref => (player.current = ref)}
      source={{uri}}
      style={[{width, aspectRatio: 1}]}
      resizeMode="cover"
      muted={isMuted}
      paused={isPaused}
      repeat={repeat}
    />
  );
}

const styles = StyleSheet.create({});
