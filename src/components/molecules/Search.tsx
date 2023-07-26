import {TextInput, View} from 'react-native';

const Search = ({_onChangeText}) => {
  return (
    <View>
      <TextInput placeholder="Search" onChangeText={_onChangeText} />
    </View>
  );
};

export default Search;
