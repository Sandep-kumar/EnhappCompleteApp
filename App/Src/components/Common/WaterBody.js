import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import { styles } from '../../StylePage';

const WaterBody = () => {
  const [waterIntake, setWaterIntake] = useState(0);

  const incrementWaterIntake = () => {
    if(waterIntake<8){

        setWaterIntake(waterIntake + 1);
    }
  };

  const decrementWaterIntake = () => {
    if (waterIntake > 0) {
      setWaterIntake(waterIntake - 1);
    }
  };
  return (
    <View style={styles.WaterBody_container}>
      
      <Text style={styles.WaterBody_title}>Water Intake</Text>
      <View style={styles.WaterBody_waterIntakeContainer}>
        <TouchableOpacity onPress={decrementWaterIntake} style={styles.WaterBody_button}>
          <Text style={styles.WaterBody_buttonText}>-</Text>
        </TouchableOpacity>
        <View style={styles.WaterBody_container}>
          <Text style={styles.WaterBody_waterIntakeText}>1 Glass (250 ml)</Text>
          <Text style={styles.WaterBody_waterIntakeSecondText}>{waterIntake} of 8 Glasses</Text>
        </View>
        <TouchableOpacity onPress={incrementWaterIntake} style={styles.WaterBody_button}>
          <Text style={styles.WaterBody_buttonText}>+</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.WaterBody_container && styles.mt2}>
          <Text style={styles.WaterBody_waterIntakeText}>{8-waterIntake} Glasses left to reach your goal</Text>
           </View>
    </View>
  );
};


export default WaterBody;
