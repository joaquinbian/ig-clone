import React, {useCallback, useMemo, useRef, useState} from 'react';
import {colors} from '@theme/colors';
import {styles} from './styles';
import Pressable from '@components/Pressable';
import {
  View,
  FlatList,
  Image,
  useWindowDimensions,
  ViewToken,
  ViewabilityConfig,
  ActivityIndicator,
} from 'react-native';
interface ICarouselProps {
  images: string[];
  onLikePost?: () => void;
  imageWidth?: number;
}

interface IOnViewableItemsChanged {
  viewableItems: ViewToken[];
  changed: ViewToken[];
}

const Carousel = ({
  images,
  onLikePost,
  imageWidth = undefined,
}: ICarouselProps) => {
  const {width} = useWindowDimensions();
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const onViewableItemsChanged = useRef(
    ({viewableItems, changed}: IOnViewableItemsChanged) => {
      //console.log('Visible items are', viewableItems);
      // console.log('Changed in this iteration', changed);
      setCurrentIndex(viewableItems[0]?.index!);
    },
  );

  const viewabilityConfig: ViewabilityConfig = {
    itemVisiblePercentThreshold: 50,
  };

  const renderItem = ({item}: {item: string}) => (
    <Pressable onDoublePress={onLikePost}>
      {item ? (
        <Image
          source={{uri: item}}
          style={{width: imageWidth ?? width, aspectRatio: 1}}
        />
      ) : (
        <ActivityIndicator />
      )}
    </Pressable>
  );
  return (
    <View>
      <FlatList
        data={images}
        onViewableItemsChanged={onViewableItemsChanged.current}
        viewabilityConfig={viewabilityConfig}
        renderItem={renderItem}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
      />
      <View style={styles.indexContainer}>
        {images.map((_, index) => (
          <View
            key={index}
            style={[
              styles.circle,
              {
                backgroundColor:
                  currentIndex === index ? colors.white : colors.primary,
              },
            ]}
          />
        ))}
      </View>
    </View>
  );
};

export default Carousel;
