import {useState} from 'react';
import {Text, View} from 'react-native';
import List from '../components/molecules/List';
import Search from '../components/molecules/Search';

const Config = () => {
  const [text, setText] = useState('');
  const list = [
    {key: 'Getsemani'},
    {key: 'isai'},
    {key: 'Devin'},
    {key: 'Dan'},
    {key: 'Dominic'},
    {key: 'Jackson'},
    {key: 'James'},
    {key: 'Joel'},
    {key: 'John'},
    {key: 'Jillian'},
    {key: 'Jimmy'},
  ];

  return (
    <View>
      <Search _onChangeText={setText} />
      <Text>{text}</Text>
      <List list={list} />
    </View>
  );
};

export default Config;
