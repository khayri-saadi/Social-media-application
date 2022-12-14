import {useState,useEffect} from 'react'
import {FlatList, StyleSheet, Image, Text, Pressable} from 'react-native';
import FeedPost from './Index';
//import posts from '../../../assets/data/posts.json';
import {Entypo} from '@expo/vector-icons';
import {useNavigation} from '@react-navigation/native';
import { DataStore } from 'aws-amplify';
import{Post} from '../../../src/models'

const img ='https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/user.png';
const FeedScreen = (props) => {
  const [posts,setPosts] = useState([])

const navigation = props.navigation
const CreatePost = ()=> {
  navigation.navigate('Post')
}

useEffect(()=> {
  DataStore.query(Post).then(setPosts)
},[])

  return (
    <FlatList
      data={posts}
      renderItem={({item}) => <FeedPost post={item} />}
      showsVerticalScrollIndicator={false}
      ListHeaderComponent={() => (
        <Pressable onPress={CreatePost}  style={styles.header}>
          <Image source={{uri: img}} style={styles.profileImage} />
          <Text style={styles.name}>What's on your mind?</Text>
          <Entypo
            name="images"
            size={24}
            color="limegreen"
            style={styles.icon}
          />
        </Pressable>
      )}
    />
  )
};

const styles = StyleSheet.create ({
  header: {
    padding: 10,
    paddingVertical: 15,
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    backgroundColor: 'white',
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 25,
    marginRight: 10,
  },
  name: {
    color: 'gray',
  },
  icon: {
    marginLeft: 'auto',
  },
});
export default FeedScreen;
