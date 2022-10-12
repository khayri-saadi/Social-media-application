import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import FeedScreen from '../../components/screens/HomeScreen/FeedScreen';
import CreatePostScreen from '../../components/screens/PostScreen/index';
import ProfileScreen from '../../components/screens/ProfileScreen';
import UpdateProfileScreen from '../../components/screens/UpdateProfile';
import {FontAwesome} from '@expo/vector-icons';
const Stack = createNativeStackNavigator();
const Router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Feed'>
        <Stack.Screen name="Feed" component={FeedScreen}
            options={({ navigation }) => ({
            headerRight: () => (
            <FontAwesome
                onPress={() => navigation.navigate("Profile")}
                name="user"
                size={24}
                color="gray"
            />
            ),
        })}
        />
        <Stack.Screen name="Post" component={CreatePostScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen}  />
        <Stack.Screen name='Update' component={UpdateProfileScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default Router
