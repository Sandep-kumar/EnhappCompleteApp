import { View, Text, StyleSheet } from "react-native";
import React from "react";
import {
  Center,
  HStack,
  NativeBaseProvider,
  ScrollView,
} from "native-base";
import { Card } from '@rneui/themed';
import ProductCard from "../../components/ProductCards/ProductCard";
import {styles} from '../../StylePage'

const Gallary = () => {
  return (
    <HStack
      alignItems="center"
      space={3}
      justifyContent="center"
      style={{ padding: 0,width:"100%", alignContent:"center" }}
    >
      
      <HStack style={styles.div}  alignItems="center">
        <ProductCard src="https://awildgeographer.files.wordpress.com/2015/02/john_muir_glacier.jpg" title= "CIsometric Calf Raise" label="1 Program | 2 Activity" />
      </HStack>
      <HStack style={styles.divSec} alignItems="center">
      <ProductCard src="https://awildgeographer.files.wordpress.com/2015/02/john_muir_glacier.jpg" title= "Start in a high plank " label="08 Packages" />
     </HStack>
    </HStack>
  );
};

const Library = () => {
  return (
    <View>
     
      <View style={styles.margin}>
        <Text style={styles.label}>
          Active Packages
        </Text>
        <Text style={styles.sub_label}>
          21 Packages Available
        </Text>
      </View>
      <Card.Divider />
      <ScrollView >
       <View style={styles.Library}>
        <View>
          <Center px="0" my="3">
        
            <Gallary />
          </Center>
          <Center px="0" my="3">
            <Gallary />
          </Center>
          <Center px="0" my="3">
            <Gallary />
          </Center>
          <Center px="0" my="4">
            <Gallary />
          </Center>
          
        </View>
      </View>
      </ScrollView>
    </View>
  );
};


export default Library;
