import React from 'react';
import {FlatList} from 'react-native';
import FeedGridItem from './FeedGridItem';
import {Post} from 'src/API';

interface IFeedGridView {
  data: (Post | null)[];
  ListHeaderComponent?:
    | React.ComponentType<any>
    | React.ReactElement
    | null
    | undefined;
}

const FeedGridView = ({data, ListHeaderComponent}: IFeedGridView) => {
  return (
    <FlatList
      data={data ?? []}
      renderItem={({item}) => item && <FeedGridItem post={item} />}
      ListHeaderComponent={ListHeaderComponent}
      numColumns={3}
      keyExtractor={(item, index) => `${item}-${index}`}
      showsVerticalScrollIndicator={false}
      style={{marginHorizontal: -1}}
    />
  );
};

export default FeedGridView;
