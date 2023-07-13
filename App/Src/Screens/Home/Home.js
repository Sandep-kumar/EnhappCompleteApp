import {View, StyleSheet, Text, TouchableOpacity, Button} from 'react-native';
import React from 'react';
import HomeComp from '../../components/Common/HomeComp';
import FeedCard from '../../components/Common/FeedCard';
import {ScrollView} from 'native-base';
import {styles} from '../../StylePage';

import WaterIntake from './WaterIntake/WaterIntake';
import Steps from './Steps/Steps';
import Breakfast from '../Breakfast/Breakfast';

export default function Home({navigation}) {
  return (
    <View>
      <ScrollView>
        <View style={styles.Homeheader}>
          <TouchableOpacity onPress={() => navigation.navigate(WaterIntake)}>
            <HomeComp Value="Water Intake" subValue="2 of 8 glasses" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate(Steps)}>
            <HomeComp Value="Steps" subValue="Connect to track daily steps" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate(Breakfast)}>
            <HomeComp Value="My Log" />
          </TouchableOpacity>
          <HomeComp Value="My Schedule" />
        </View>
        <Text style={styles.Heading_title}>Discover</Text>
        <FeedCard src="https://awildgeographer.files.wordpress.com/2015/02/john_muir_glacier.jpg" />
        <FeedCard src="https://awildgeographer.files.wordpress.com/2015/02/john_muir_glacier.jpg" />
      </ScrollView>
    </View>
  );
}
