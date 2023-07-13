import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {Card} from '@rneui/themed';
import {CheckCircleIcon, Center, HStack, NativeBaseProvider} from 'native-base';
import {styles} from '../../StylePage';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import FeedHead from './FeedHead';

const Comment = () => {
  return (
    <HStack alignItems="center" space={4} justifyContent="space-between">
      <View alignItems="center" style={{width:"20%"}}>
     
      <MaterialCommunityIcons name="chat-outline" color={"gray"} size={20} />
      </View>
      <View alignItems="center" style={{width:"40%"}}>
        <Text ml={1} color="#808080" fontWeight="500">
          <CheckCircleIcon size={2} /> 269 Highfive
        </Text>
      </View>
      <View alignItems="center" style={{width:"40%"}}>
        <Text ml={1} color="#808080" fontWeight="500">
          <CheckCircleIcon size={2} /> 9 comments
        </Text>
      </View>
    </HStack>
  );
};

export default function FeedCard({src}) {
    const img=src;
  // let img={src!==""?nul:src}
  console.log(src)
  return (
    <View style={styles.FeedHead_box}>
      <Card containerStyle={{marginTop: 10, borderRadius: 15}}>
        <View style={{marginBottom: 20}}>
          <FeedHead Value="Jack" SecondaryValue="image posted on 31 mar" />
        </View>

        <Card.Divider />

        <Card.Title style={styles.FeedHead_Card_title}>
          Revive Health Package
        </Card.Title>
        <Text style={styles.FeedHead_fonts} h1>
          A trusted approach to losing weight and a healthy lifestyle.
          Understanding the basics.
        </Text>
        <Card.Image
          style={styles.FeedHead_Card_image}
          source={{uri: `${src}`}}
        />

        <Card.Divider />

        <NativeBaseProvider>
          <Center flex={1} px="3">
            <Comment />
          </Center>
        </NativeBaseProvider>
      </Card>
    </View>
  );
}

