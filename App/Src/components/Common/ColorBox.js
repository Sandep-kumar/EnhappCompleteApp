import {View, Text} from 'react-native';
import React from 'react';
import {styles} from '../../StylePage'

const ColorBox = ({Bcolor}) => {
  return (
    <View
      style={{
        borderColor: `${Bcolor}`, // color is coming dynaimcally
        backgroundColor:`${Bcolor}`,
        borderWidth: 2,
        borderRadius: 10,
        height: 100,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text style={styles.colorbox_font_pri}>40</Text>
      <Text style={styles.colorbox_font}>Calories</Text>
    </View>
  );
};

export default ColorBox;
