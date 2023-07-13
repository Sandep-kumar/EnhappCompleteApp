import { View, Text, StyleSheet,Image } from 'react-native'
import React from 'react'

const ImageFile = () => {
  return (
    <View style={styles.ListStyle}>
      <Text>Images</Text>
    </View>
  )
}



const styles=StyleSheet.create({
    ListStyle:{
        height:500,
        display:"flex",
        
    }
})
export default ImageFile;
