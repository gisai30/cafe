import {FlatList, Text, View} from 'react-native';
import ButtonStyle from '../atoms/ButtonStyle';

const styles = {};

const ActiveTables = ({data, _remove}) => {
  const renderItems = e => {
    const {item} = e;
    return (
      <View
        style={{
          justifyContent: 'space-between',
          flexDirection: 'row',
          height: 40,
          alignItems: 'center',
          paddingLeft: 10,
          paddingRight: 10,
          borderBottomWidth: 1,
          borderBottomColor: '#4a4a4a',
          backgroundColor: '#ffffff',
        }}>
        <Text style={{flex: 1}}>{item.title}</Text>
        <View
          style={{flex: 1, flexDirection: 'row', justifyContent: 'flex-end'}}>
          <ButtonStyle
            style={{width: 80}}
            title="Pagar"
            _onPress={() => _remove(item.id)}
          />
        </View>
      </View>
    );
  };
  return <FlatList data={data} renderItem={renderItems}></FlatList>;
};

export default ActiveTables;
