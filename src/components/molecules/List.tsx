import {FlatList, StyleSheet, Text, View} from 'react-native';
import text from '../../styles/text';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22,
  },
  item: {
    ...text,
  },
});

const List = ({list}) => {
  const renderList = ({item}) => <Text style={styles.item}>{item.key}</Text>;

  return (
    <View>
      <FlatList data={list} renderItem={renderList} />
    </View>
  );
};

export default List;
