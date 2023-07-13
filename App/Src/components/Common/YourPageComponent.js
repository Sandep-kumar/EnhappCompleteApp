import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
// import Carousel from 'react-native-snap-carousel';

const YourPageComponent = () => {
  const [selectedDateIndex, setSelectedDateIndex] = useState(0);
  const dates = ['2023-07-10', '2023-07-11', '2023-07-12', '2023-07-13'];

  const renderItem = ({ item, index }) => {
    return (
      <View style={styles.dateItem}>
        <Text
          style={[
            styles.dateText,
            index === selectedDateIndex && styles.selectedDateText,
          ]}
        >
          {item}
        </Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Carousel
        data={dates}
        renderItem={renderItem}
        sliderWidth={300}
        itemWidth={75}
        onSnapToItem={(index) => setSelectedDateIndex(index)}
      />
      <Text style={styles.selectedDate}>
        Selected Date: {dates[selectedDateIndex]}
      </Text>
      {/* Add your content for the selected date here */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  dateItem: {
    backgroundColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginRight: 10,
  },
  dateText: {
    fontSize: 16,
    color: '#333',
    textAlign: 'center',
  },
  selectedDateText: {
    fontWeight: 'bold',
  },
  selectedDate: {
    marginTop: 20,
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default YourPageComponent;
