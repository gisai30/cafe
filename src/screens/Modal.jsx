import {useEffect, useState} from 'react';
import ChangeName from '../components/molecules/ChangeName';
const {View, Text} = require('react-native');
const {default: ButtonStyle} = require('../components/atoms/ButtonStyle');

const Modal = ({navigation, route}) => {
  const {type, key} = route.params;
  const [value, setValue] = useState('');
  const children = {
    changeTitle: <ChangeName _updateValue={setValue} />,
  };
  const navigateBack = () => {
    navigation.navigate({
      name: 'Main',
      params: {text: value, key: key},
      merge: true,
    });
  };

  return (
    <View style={{alignItems: 'center'}}>
      {children[`${type}`]}
      <ButtonStyle
        title="Done"
        _onPress={navigateBack}
        style={{width: 200}}></ButtonStyle>
    </View>
  );
};

export default Modal;
