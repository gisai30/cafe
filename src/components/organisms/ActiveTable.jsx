import {useEffect} from 'react';
import {FlatList, Pressable, Text, View} from 'react-native';
import ButtonStyle from '../atoms/ButtonStyle';

const styles = {};

const ActiveTables = ({navigation, route, data, _remove}) => {
  const renderItems = e => {
    const {item} = e;
    const onPress = () => {
      console.log('hola mundo');
      console.log(item.id);
    };

    const onChangeTitle = () => {
      navigation.navigate({
        name: 'Modal',
        prev: 'Main',
        params: {
          type: 'changeTitle',
          text: item.title,
        },
      });
    };

    return (
      <Pressable
        onPress={onPress}
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
        <Text onPress={onChangeTitle} style={{flex: 1}}>
          {item.title}
        </Text>
        <View
          style={{flex: 1, flexDirection: 'row', justifyContent: 'flex-end'}}>
          <ButtonStyle
            style={{width: 80}}
            title="Pagar"
            _onPress={() => _remove(item.id)}
          />
        </View>
      </Pressable>
    );
  };

  useEffect(() => {
    console.log(route.params);
  }, [route.params?.text]);

  return <FlatList data={data} renderItem={renderItems}></FlatList>;
};

export default ActiveTables;
