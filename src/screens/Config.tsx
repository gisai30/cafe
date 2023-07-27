import {useEffect, useState} from 'react';
import {Text, View} from 'react-native';
import List from '../components/molecules/List';
import Search from '../components/molecules/Search';

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
  {key: 'Hola mundo'},
];

const Config = () => {
  const [text, setText] = useState('');
  const [listSort, setListSort] = useState(list);
  const [defaultList, setDefaultList] = useState([]);

  useEffect(() => {
    setDefaultList(list);
    setListSort(list);
  }, []);

  return (
    <View>
      <Search
        _onChangeText={setText}
        data={defaultList}
        textToSearch={text}
        _setDataSort={setListSort}
        value={text}
      />
      <Text>{text}</Text>
      <List list={listSort} />
    </View>
  );
};

export default Config;
