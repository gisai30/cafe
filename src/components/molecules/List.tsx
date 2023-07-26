import {FlatList, ScrollView, StyleSheet, Text, View} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22,
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});

const List = ({list}) => {
  const renderList = ({item}) => <Text style={styles.item}>{item.key}</Text>;

  return (
    <View>
      <ScrollView>
        <FlatList data={list} renderItem={renderList} />
      </ScrollView>
    </View>
  );
};

export default List;
