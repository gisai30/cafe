import React from 'react';
import {View} from 'react-native';
import ButtonStyle from '../components/atoms/ButtonStyle';
import text from '../styles/text';

const LocalTable = ({navigation, route}) => {
  console.log(route.params);
  return (
    <View>
      <ButtonStyle
        title="Add"
        style={{
          color: text.color,
          width: 200,
          marginLeft: '25%',
          marginRight: '25%',
          marginTop: 10,
          marginBottom: 10,
        }}
      />
    </View>
  );
};

export default LocalTable;
