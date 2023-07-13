import { View,Button, Text,TouchableOpacity } from 'react-native'
import React from 'react'
import { HStack } from "@react-native-material/core";

import {Ionicons} from "react-native-vector-icons";
import { styles } from '../../StylePage';


const CustomHeader = ({navigation,title}) => {
  return (
    <View style={styles.CustomHeader_box}>
       
    <HStack>
      <TouchableOpacity
     onPress={() => navigation.openDrawer()}
       >
        <Ionicons style={styles.CustomHeader_icon} name={"menu"} size={20} color={"black"} />
      </TouchableOpacity>
      <Text style={styles.CustomHeader_text}>{title}</Text>
    </HStack>
  </View>
  )
}

export default CustomHeader