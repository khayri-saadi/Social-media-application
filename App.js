import { StatusBar } from 'expo-status-bar';
import { StyleSheet} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import Router from './src/navigation/navigation';
import {Amplify, Auth} from 'aws-amplify'
import awsConfig from './src/aws-exports'
import {withAuthenticator} from 'aws-amplify-react-native';
Amplify.configure ({...awsConfig, Analytics: {disabled: true}});
const  App = () => {

  //Auth.currentAuthenticatedUser().then((data)=> {console.log(data)})
  return (
    <SafeAreaProvider style={styles.container}>
         <Router />
         <StatusBar style='auto'/>
    </SafeAreaProvider>
    
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
export default withAuthenticator(App);
