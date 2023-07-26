import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useEffect, useState} from 'react';
import {Button, SafeAreaView, Text, TextInput, View} from 'react-native';

//Star Stack Navigation
const Stack = createNativeStackNavigator();

const SecondScreen = ({navigation}) => {
  const [postText, setPostText] = useState('');
  const onReturn = () => {
    navigation.navigate({
      name: 'Home',
      params: {post: postText},
      merge: true,
    });
  };
  return (
    <View>
      <Text>Second</Text>
      <TextInput
        placeholder="Agregar"
        value={postText}
        onChangeText={setPostText}
      />
      <Button title="Return" onPress={onReturn} />
    </View>
  );
};

const HomeScreen = ({route, navigation}) => {
  const [name, setName] = useState('Bienvenido');
  const {itemId} = route.params;

  const onClick = () => {
    setName(`${name} De nuevo`);
  };

  const onRestart = () => {
    setName('');
  };

  const onNavigate = () => {
    navigation.navigate('Second');
  };

  const onUpdateParams = () => {
    navigation.setParams({
      itemId: Math.floor(Math.random() * 100),
    });
  };
  useEffect(() => {
    setName('Getsemani');
  }, []);

  useEffect(() => {
    if (route.params?.post) {
    }
  }, [route.params?.post]);

  return (
    <SafeAreaView>
      <View>
        <Text>Home Screen</Text>
        <Text>itemId: {itemId}</Text>
        <Text>Post: {route.params?.post}</Text>
        <Button title={name} onPress={onClick} />
        <Button title="Restart" onPress={onRestart} />
        <Button title="Go Second" onPress={onNavigate} />
        <Button title="Update Params" onPress={onUpdateParams} />
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
          initialParams={{itemId: 21}}
        />
        <Stack.Screen name="Second" component={SecondScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNew;
