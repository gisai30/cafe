import {useState} from 'react';
import {View} from 'react-native';
import ButtonStyle from '../components/atoms/ButtonStyle';
import ActiveTables from '../components/organisms/ActiveTable';
import text from '../styles/text';

const styles = {
  button: {
    color: text.color,
    width: 200,
    marginLeft: '25%',
    marginRight: '25%',
    marginTop: 10,
    marginBottom: 10,
  },
};

const Main = ({navigation, route}) => {
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

  const onChangeTitle = params => {
    const index = tables.findIndex(e => e.id == params.key);
    tables[index].title = params.text;
    setTables([...tables]);
  };

  return (
    <View
      style={{
        justifyContent: 'space-between',
        height: '100%',
      }}>
      <ActiveTables
        navigation={navigation}
        route={route}
        data={tables}
        _remove={removeElement}
        _changeTitle={onChangeTitle}
      />
      <View>
        <ButtonStyle
          title="Agregar +"
          _onPress={onAddTable}
          style={styles.button}
        />
      </View>
    </View>
  );
};

export default Main;