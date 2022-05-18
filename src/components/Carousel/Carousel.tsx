import React, {useCallback, useState} from 'react';
import {colors} from '@theme/colors';
import {styles} from './styles';
import {
  View,
  FlatList,
  Image,
  useWindowDimensions,
  ViewToken,
} from 'react-native';
interface ICarouselProps {
  images: string[];
}

interface IOnViewableItemsChanged {
  viewableItems: ViewToken[];
  changed: ViewToken[];
}

const Carousel = ({images}: ICarouselProps) => {
  const {width} = useWindowDimensions();
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const onViewableItemsChanged = useCallback(
    ({viewableItems, changed}: IOnViewableItemsChanged) => {
      console.log('Visible items are', viewableItems);
      console.log('Changed in this iteration', changed);
      setCurrentIndex(viewableItems[0].index!);
    },
    [],
  );
  return (
    <View>
      <FlatList
        data={images}
        onViewableItemsChanged={onViewableItemsChanged}
        viewabilityConfig={{
          itemVisiblePercentThreshold: 50,
        }}
        renderItem={({item}) => (
          <Image source={{uri: item}} style={{width, aspectRatio: 1}} />
        )}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
      />
      <View style={styles.indexContainer}>
        {images.map((_, index) => (
          <View
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
