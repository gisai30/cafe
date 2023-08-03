import {useEffect, useState} from 'react';
import ChangeName from '../components/molecules/ChangeName';
const {View, Text} = require('react-native');
const {default: ButtonStyle} = require('../components/atoms/ButtonStyle');

const Modal = ({navigation, route}) => {
  const {type} = route.params;
  const [value, setValue] = useState('');
  const onChange = e => {
    console.log(e);
    setValue(e);
  };
  const [children, setChildren] = useState({
    changeTitle: <ChangeName setValue={onChange} value={value} />,
  });
  const navigateBack = () => {
    navigation.navigate({
      name: 'Main',
      params: {text: value},
      merge: true,
    });
  };

  // {children[`${type}`]}
  return (
    <View style={{alignItems: 'center'}}>
      <ChangeName setValue={onChange} value={value} />
      <ButtonStyle
        title="Done"
        _onPress={navigateBack}
        style={{width: 200}}></ButtonStyle>
    </View>
  );
};

export default Modal;
