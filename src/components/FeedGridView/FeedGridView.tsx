import React from 'react';
import {FlatList} from 'react-native';
import {IPost} from '@interfaces/Post';
import FeedGridItem from './FeedGridItem';

interface IFeedGridView {
  data: IPost[];
  ListHeaderComponent?:
    | React.ComponentType<any>
    | React.ReactElement
    | null
    | undefined;
}

const FeedGridView = ({data, ListHeaderComponent}: IFeedGridView) => {
  return (
    <FlatList
      data={data}
      renderItem={({item}) => <FeedGridItem post={item} />}
      ListHeaderComponent={ListHeaderComponent}
      numColumns={3}
      keyExtractor={(item, index) => `${item}-${index}`}
      showsVerticalScrollIndicator={false}
      style={{marginHorizontal: -1}}
    />
  );
};

export default FeedGridView;
