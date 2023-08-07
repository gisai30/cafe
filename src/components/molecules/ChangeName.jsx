import {useEffect, useState} from 'react';

const {Text, View, TextInput} = require('react-native');

const ChangeName = ({_updateValue}) => {
  const [value, setValue] = useState('');
  const onChange = value => {
    setValue(value);
    _updateValue(value);
  };
  return (
    <View>
      <Text>Change Text</Text>
      <TextInput
        placeholder="Nombre..."
        onChangeText={onChange}
        value={value}
      />
    </View>
  );
};

export default ChangeName;
