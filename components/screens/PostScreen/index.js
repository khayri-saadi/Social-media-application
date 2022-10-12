import {useState} from 'react';
import {View, Text, StyleSheet, TextInput, Image, Button,KeyboardAvoidingView} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {Entypo} from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
import {DataStore,Auth} from 'aws-amplify';
import {Post} from '../../../src/models'
const user = {
  id: 'u1',
  image: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/vadim.jpg',
  name: 'Vadim Savin',
};

const PostScreen = (props) => {
  const [description, setDescription] = useState ('');
  const [image, setImage] = useState (null)
const insets = useSafeAreaInsets ();
const navigation = props.navigation




   
  const onPost = async () => {
    const userData = await Auth.currentAuthenticatedUser()
      console.log(userData.attributes.sub)
    console.warn('Posting: ', description);
      const newPost =   new Post ({
      description: description,
      // "imag": "Lorem ipsum dolor sit amet",
      numberOfLikes: 1020,
      numberOfShares: 1020,
      postUserId: userData.attributes.sub,
      _version: 1,
    });

     await  DataStore.save(newPost)
          setDescription('');
          setImage(null)
          navigation.goBack ();

  }
  const pickImage = async () => {
  let result = await ImagePicker.launchImageLibraryAsync ({
    mediaTypes: ImagePicker.MediaTypeOptions.Images,
    allowsEditing: true,
    aspect: [4, 3],
    quality: 1,
  });

  console.log (result);

  if (!result.cancelled) {
    setImage (result.uri);
  }
};
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={[styles.container, {marginBottom: insets.bottom}]}
      contentContainerStyle={{flex: 1}}
      keyboardVerticalOffset={150}
    >
    <Text style={{fontWeight:'bold'}}>Create Post Screen</Text>
      <View style={styles.header}>
        <Image source={{uri: user.image}} style={styles.profileImage} />
        <Text style={styles.name}>{user.name}</Text>
        <Entypo
        onPress={pickImage}
        name="images"
        size={24}
        color="limegreen"
        style={styles.icon}
        />

      </View>
      <TextInput
        placeholder="What's on your mind?"
        value={description}
        onChangeText={setDescription}
        style={styles.input}
        multiline
      />
      <View style={styles.buttonContainer}>
        <Button onPress={onPost} title="Post" disabled={!description}/>
      </View>
    </KeyboardAvoidingView>
  )
};

const styles = StyleSheet.create ({
  container: {
    flex: 1,
    backgroundColor: 'white',
    width: '100%',
    padding: 10,
    paddingTop: 30,
  },
  header: {
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 25,
    marginRight: 10,
  },
  name: {
    fontWeight: '500',
  },
  input: {
    marginBottom: 'auto',
  },
  buttonContainer: {
    marginTop: 'auto',
    marginVertical: 10,
  },
});

export default PostScreen
