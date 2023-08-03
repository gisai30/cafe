const {Text, View, TextInput} = require('react-native');

const ChangeName = ({setValue, value}) => {
  return (
    <View>
      <Text>Change Text</Text>
      <TextInput
        placeholder="Nombre..."
        onChangeText={setValue}
        value={value}
      />
    </View>
  );
};

export default ChangeName;
