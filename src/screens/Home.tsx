import {useEffect, useState} from 'react';
import {Button, Text, View} from 'react-native';
import ButtonStyle from '../components/atoms/ButtonStyle';

const Home = ({navigation, route}) => {
  // const [session, setSession] = useState(false);
  const onStart = () => {
    navigation.navigate('Main');
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
