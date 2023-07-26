import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Config from './src/screens/Config';
import Home from './src/screens/Home';
import Login from './src/screens/Login';

const Stack = createNativeStackNavigator();

const NewApp = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Config" component={Config} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default NewApp;
