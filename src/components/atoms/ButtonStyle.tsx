import {Pressable, Text} from 'react-native';
import text from '../../styles/text';

const styles = {
  width: 30,
  height: 30,
  backgroundColor: '#613CD3',
  color: text.color,
  justifyContent: 'center',
  alignItem: 'center',
  borderRadius: 10,
};

const ButtonStyle = ({title, _onPress, style}) => {
  return (
    <Pressable onPress={_onPress} style={{...styles, ...style}}>
      <Text style={{color: '#ffffff', textAlign: 'center'}}>{title}</Text>
    </Pressable>
  );
};

export default ButtonStyle;
