import {useState} from 'react';
import {Button, FlatList, ScrollView, Text, View} from 'react-native';
import ActiveTables from '../components/organisms/ActiveTable';

const Main = () => {
  const [tables, setTables] = useState([]);
  const [index, setIndex] = useState(0);

  const onAddTable = () => {
    const id = index + 1;
    setIndex(id);
    setTables([...tables, {id: id, title: `table ${id}`}]);
  };

  const removeElement = id => {
    const index = tables.findIndex(e => e.id === id);
    tables.splice(index, 1);
    setTables([...tables]);
  };

  return (
    <View>
      <Text>Mesas</Text>
      <View>
        <Button title="Agregar +" onPress={onAddTable} />
      </View>
      <ActiveTables data={tables} _remove={removeElement} />
    </View>
  );
};

export default Main;
