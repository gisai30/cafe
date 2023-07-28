import {Button, FlatList, Text, View} from 'react-native';

const ActiveTables = ({data, _remove}) => {
  const renderItems = e => {
    const {item} = e;
    return (
      <View>
        <Text>{item.title}</Text>
        <Button title="+" />
        <Button title="-" onPress={() => _remove(item.id)} />
      </View>
    );
  };
  return <FlatList data={data} renderItem={renderItems}></FlatList>;
};

export default ActiveTables;
