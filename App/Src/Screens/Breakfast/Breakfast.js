import {View, Text} from 'react-native';
import React from 'react';
import {styles} from '../../StylePage';
import Search from '../Chat/SearchBox/Search';
import Header from '../../Header/HeaderWithback';
import {HStack, Input, NativeBaseProvider, ScrollView} from 'native-base';
import DropdownScreen from '../../components/Common/Dropdown';
import ColorBox from '../../components/Common/ColorBox';

const Breakfast = ({navigation}) => {
  return (
    <NativeBaseProvider>
      <ScrollView>
      <Header title="Breakfast" navigation={navigation} />
      <View style={styles.bg_white}>
        <Search />
      </View>
      
      <View
        style={styles.Breakfast_box}>
        <View style={{paddingBottom:20}}>
          <Text style={{fontSize: 15, fontWeight: '500'}}>Food Name</Text>
          <Text style={{fontSize: 18, fontWeight: '700'}}>idli plain</Text>
        </View>
        <View>
          <NativeBaseProvider>
            <HStack space={2}>
              <View style={styles.Input}>
                <Input />
              </View>
              <View style={styles.Input}>
                <DropdownScreen />
              </View>
            </HStack>
          </NativeBaseProvider>
        </View>
      </View>
      <View style={{padding:10, marginTop:50}}>
        <Text style={styles.Color_Box_Heading}>Nutrition Facts</Text>
        <NativeBaseProvider>
        <HStack space={2}>
          <ColorBox Bcolor="red"/>
          <ColorBox Bcolor="lightblue"/>
          <ColorBox Bcolor="lightgreen"/>
          <ColorBox Bcolor="orange"/>
        </HStack>
        </NativeBaseProvider>

      </View>
      </ScrollView>
    </NativeBaseProvider>
  );
};

export default Breakfast;
