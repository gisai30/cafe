import {useEffect} from 'react';
import {TextInput, View} from 'react-native';

const Search = ({_onChangeText, textToSearch, data, _setDataSort, value}) => {
  const sortData = () => {
    let listFilter = [];
    data.forEach(e => {
      var re = new RegExp(textToSearch, 'gi');

      if (re.test(e.key)) {
        listFilter.push(e);
      }
    });
    _setDataSort(listFilter);
  };
  useEffect(() => {
    sortData();
  }, [value]);

  return (
    <View>
      <TextInput
        placeholder="Search"
        onChangeText={_onChangeText}
        value={value}
      />
    </View>
  );
};

export default Search;
