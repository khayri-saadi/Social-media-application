import {Text, View, Image, Pressable} from 'react-native';
import { useState } from 'react';
import Like from '../../../assets/images/like.png'
import styles from './styles';
import { useNavigation } from '@react-navigation/native';
import {
  Entypo,
  AntDesign,
  FontAwesome5,
  MaterialCommunityIcons,
} from '@expo/vector-icons';


const FeedPost = ({post}) => {
  const [isLiked, setisLiked]= useState(false)
  onLikeImage= ()=> {
    setisLiked(!isLiked)
  }
  const navigation = useNavigation()
  return (
    // header the user avatar, the user name, the time , icon
    (
      <View style={styles.root}>

        <Pressable style={styles.header}
        onPress={() => navigation.navigate("Profile", { id: post.postUserId })}>
          <Image style={styles.image} source={{uri: post.User?.image}} />
          <View>
            <Text style={styles.name}>{post.User?.name}</Text>
            <Text style={styles.createAt}>{post.createdAt}</Text>
          </View>
          <Entypo
            style={styles.icon}
            name="dots-three-vertical"
            size={24}
            color="black"
          />
        </Pressable>
        <Text style={styles.description}>{post.description}</Text>
        <Image style={styles.BodyImage} source={{uri: post.image}} />

        <View style={styles.footer}>
          <View style={styles.row}>
            <Image source={Like} style={styles.likeIcon} />
            <Text style={styles.likedBy}>
              Elon Musk and {post.numberOfLikes} others
            </Text>
            <Text style={styles.share}>{post.numberOfShares} shares</Text>
          </View>
          <View style={styles.buttons}>
            <Pressable style={styles.button} onPress={onLikeImage}>
              <AntDesign name="like2" size={22} color={isLiked ? 'royalblue' : 'grey'} />
              <Text style={styles.txt}>Like</Text>
            </Pressable>

            <View style={styles.button}>
              <FontAwesome5 name="comment-alt" size={24} color="grey" />
              <Text style={styles.txt}>Comment</Text>
            </View>
            <View style={styles.button}>
              <MaterialCommunityIcons name="share" size={24} color='grey' />
              <Text style={styles.txt}>Share</Text>
            </View>
          </View>
        </View>
      </View>
    )
  );
};
export default FeedPost;
