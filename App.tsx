/* eslint-disable eslint-comments/no-unlimited-disable */
/* eslint-disable */
import {
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  View,
  ViewabilityConfig,
  ViewToken,
} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import Post from '@components/Post';
import {useRef, useState} from 'react';
import CommentsScreen from '@screens/CommentsScreen';
import ProfileScreen from '@screens/ProfileScreen';
import EditProfile from '@screens/EditProfileScreen';
import UploadPostScreen from '@screens/UploadPostScreen';
import {NavigationContainer} from '@react-navigation/native';
import Navigation from '@navigation/index';
const post = {
  id: '1',
  createdAt: '19 December 2021',
  image: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/images/1.jpg',
  description:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic repellendus unde blanditiis. Eos fugiat dolorem ea fugit aut sapiente corrupti autem dolores deleniti architecto, omnis, amet unde dignissimos quam minima?',
  user: {
    id: '1',
    image: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/1.jpg',
    username: 'vadimnotjustdev',
  },
  nofComments: 11,
  nofLikes: 33,
  comments: [
    {
      id: '1',
      comment: 'Hello there',
      user: {
        id: '2',
        username: 'vadimnotjustdev',
      },
    },
    {
      id: '2',
      comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. H',
      user: {
        id: '2',
        username: 'anotheruser',
      },
    },
  ],
};
interface IOnViewableItemsChanged {
  viewableItems: ViewToken[];
  changed: ViewToken[];
}
const viewabilityConfig: ViewabilityConfig = {
  itemVisiblePercentThreshold: 50,
};
const App = () => {
  console.log(JSON.stringify(post));

  return (
    <SafeAreaProvider>
      <View style={styles.container}>
        {/* <FlatList
        data={posts}
        renderItem={({item}) => (
          <Post post={item} isVisible={currentItem === item.id} />
        )}
        viewabilityConfig={viewabilityConfig}
        onViewableItemsChanged={onViewableItemsChanged.current}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
      /> */}
        {/* <CommentsScreen /> */}
        {/* <ProfileScreen /> */}
        {/* <EditProfile /> */}
        {/* <UploadPostScreen /> */}
        {/* <Navigation /> */}
        <Navigation />
      </View>
    </SafeAreaProvider>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
