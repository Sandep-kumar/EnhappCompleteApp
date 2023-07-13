import { View, Text } from 'react-native'
import React from 'react'
import { HStack } from 'native-base'
import { Avatar } from '@rneui/themed';
import { styles } from '../../StylePage';

const DetailCard = ({label,value,src}) => {
  return (
    <View style={{padding:10}}>
        
        <HStack>
            <View style={styles.DetailCard_box}>
            <Avatar
            size={40}
            rounded
            source={{ uri: `${src}` }}
          />
            </View>
            <View style={{
              width:"82%",
               margin:"auto"}}>
                <Text style={styles.DetailCard_label}>{label}</Text>
                <Text style={styles.DetailCard_value}>{value}</Text>
            </View>
        </HStack>
      
    </View>
  )
}

export default DetailCard