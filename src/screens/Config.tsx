import {useEffect, useState} from 'react';
import {Text, View} from 'react-native';
import menu from '../assets/data/menu';
import List from '../components/molecules/List';
import Search from '../components/molecules/Search';

const Config = () => {
  const [text, setText] = useState('');
  const [listSort, setListSort] = useState(menu);
  const [defaultList, setDefaultList] = useState([]);

  useEffect(() => {
    setDefaultList(menu);
    setListSort(menu);
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
      <List list={listSort} />
    </View>
  );
};

export default Config;
