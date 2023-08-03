import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import {Button, View} from 'react-native';
import Config from './src/screens/Config';
import Home from './src/screens/Home';
import Login from './src/screens/Login';
import Main from './src/screens/Main';
import Modal from './src/screens/Modal';

const Stack = createNativeStackNavigator();

// const Modal = ({navigation}) => {
//   return (
//     <View>
//       <Button title="Back" onPress={() => navigation.goBack()} />
//     </View>
//   );
// };

const NewApp = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Group>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Config" component={Config} />
          <Stack.Screen name="Main" component={Main} />
        </Stack.Group>
        <Stack.Group screenOptions={{presentation: 'modal'}}>
          <Stack.Screen name="Modal" component={Modal} />
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default NewApp;
