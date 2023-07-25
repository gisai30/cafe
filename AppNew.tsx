import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useEffect, useState} from 'react';
import {Button, SafeAreaView, Text, View} from 'react-native';

//Star Stack Navigation
const Stack = createNativeStackNavigator();

const SecondScreen = () => {
  return (
    <View>
      <Text>Second</Text>
    </View>
  );
};

const HomeScreen = ({navigation}) => {
  const [name, setName] = useState('Bienvenido');

  const onClick = () => {
    setName(`${name} De nuevo`);
  };

  const onRestart = () => {
    setName('');
  };

  const onNavigate = () => {
    navigation.navigate('Second');
  };
  useEffect(() => {
    setName('Getsemani');
  }, []);
  return (
    <SafeAreaView>
      <View>
        <Text>Home Screen</Text>
        <Button title={name} onPress={onClick} />
        <Button title="Restart" onPress={onRestart} />
        <Button title="Go Second" onPress={onNavigate} />
      </View>
    </SafeAreaView>
  );
};

const AppNew = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{title: 'Overview'}}
        />
        <Stack.Screen name="Second" component={SecondScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNew;
