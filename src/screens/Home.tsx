import {Button, Text, View} from 'react-native';

const Home = ({navigation, route}) => {
  const onStart = () => {
    navigation.navigate('Main');
  };
  const onChangeConfig = () => {
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
