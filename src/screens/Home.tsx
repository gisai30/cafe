import {useEffect, useState} from 'react';
import {Button, Text, View} from 'react-native';

const Home = ({navigation, route}) => {
  // const [session, setSession] = useState(false);
  const onStart = () => {
    navigation.navigate('Login');
  };
  const onChangeConfig = e => {
    navigation.navigate('Config');
  };

  return (
    <View>
      <Text>Bienvenido</Text>
      <Button title="Start" onPress={onStart} />
      <Button title="Config" onPress={onChangeConfig} />
    </View>
  );
};

export default Home;
