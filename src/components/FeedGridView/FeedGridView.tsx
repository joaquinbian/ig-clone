import React from 'react';
import {FlatList, RefreshControl} from 'react-native';
import FeedGridItem from './FeedGridItem';
import {Post} from 'src/API';

interface IFeedGridView {
  data: (Post | null)[];
  ListHeaderComponent?:
    | React.ComponentType<any>
    | React.ReactElement
    | null
    | undefined;
  onRefresh?: () => void;
  refreshing?: boolean;
}

const FeedGridView = ({
  data,
  ListHeaderComponent,
  onRefresh,
  refreshing,
}: IFeedGridView) => {
  return (
    <FlatList
      data={data ?? []}
      refreshControl={
        <RefreshControl refreshing={!!refreshing} onRefresh={onRefresh} />
      }
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
