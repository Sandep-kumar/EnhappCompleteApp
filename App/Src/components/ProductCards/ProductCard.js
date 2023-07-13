import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {Card} from '@rneui/themed';
import {styles} from '../../StylePage';
function ProductCard({src, label, title}) {
  return (
    <View style={{width: '100%'}}>
      <Card
        containerStyle={{
          elevation: 0,
          borderColor: 'white',
          margin: 0,
          padding: 0,
          paddingBottom: 12,
        }}>
        <Card.Image style={styles.ProductCard_image} source={{uri: `${src}`}} />

        <Text style={styles.ProductCard_title}>{title}</Text>
        <Text style={styles.ProductCard_label}>{label}</Text>
      </Card>
    </View>
  );
}

export default ProductCard;
