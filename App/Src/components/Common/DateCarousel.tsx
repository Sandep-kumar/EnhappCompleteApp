import {TouchableHighlight, View, Text, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import {
  addDays,
  eachDayOfInterval,
  eachWeekOfInterval,
  format,
  subDays,
} from 'date-fns';
import PagerView from 'react-native-pager-view';
import {TouchableOpacity} from 'react-native-gesture-handler';

const dates = eachWeekOfInterval(
  {
    start: subDays(new Date(), 14),
    end: addDays(new Date(), 14),
  },
  {weekStartsOn: 0},
).reduce((acc: Date[][], cur) => {
  const allDays = eachDayOfInterval({
    start: cur,
    end: addDays(cur, 6),
  });

  acc.push(allDays);

  return acc;
}, []);

export default function Desgin() {
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateSelection = date => {
    const isSelected = date === selectedDate;
    setSelectedDate(date);
  };

  const renderItem = ({item}) => {
    const isSelected = item === selectedDate;

    return (
      <>
        <TouchableOpacity
          style={[styles2.dateItem, isSelected && styles2.selectedDateItem]}
          onPress={() => handleDateSelection(item)}>
          <Text
            style={[styles2.dateText, isSelected && styles2.selectedDateText]}>
            {item}
          </Text>
        </TouchableOpacity>
      </>
    );
  };

  return (
    <PagerView style={styles.container}>
      {dates.map((week, i) => {
        return (
          <View key={i}>
            <View style={styles.row}>
              {week.map((day, i) => {
                const txt = format(day, 'EEEEE');
                return (
                  <View key={i}>
                    <TouchableOpacity >
                      <Text>{day.getDate()}</Text>
                    </TouchableOpacity>

                    <Text>{txt}</Text>
                  </View>
                );
              })}
            </View>
          </View>
        );
      })}
    </PagerView>
  );
}

const styles = StyleSheet.create({
  container: {},
  row: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  dateBox: {
    backgroundColor: 'lightgray',
    color: 'black',
    textAlign: 'center',
    padding: 6,
    borderRadius: 100,
  },
  PressdateBox: {
    backgroundColor: 'gray',
    color: 'white',
    textAlign: 'center',
    padding: 6,
    borderRadius: 100,
  },
  dayBox: {
    textAlign: 'center',
    padding: 8,
    borderRadius: 20,
  },
});
const styles2 = StyleSheet.create({
  container: {
    paddingVertical: 10,
  },
  dateItem: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 20,
    marginRight: 10,
    backgroundColor: '#e0e0e0',
    alignItems: 'center',
  },
  selectedDateItem: {
    backgroundColor: '#4285F4',
  },
  dateText: {
    fontSize: 16,
    color: '#333',
  },
  selectedDateText: {
    color: '#FFF',
  },
  dayText: {
    fontSize: 14,
    color: '#666',
  },
  selectedDayText: {
    color: '#FFF',
  },
});
