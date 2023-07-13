import * as React from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';


import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';



import {HomeScreen,ChatScreen,LibraryScreen,StoreScreen,EventsScreen} from '../indexpage'

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={() => ({
        headerShown: false,
        tabBarActiveTintColor: '#e91e63',
      })}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Chat"
        component={ChatScreen}
        options={{
          tabBarLabel: 'Chat',
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons
              name="chat-outline"
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Library"
        component={LibraryScreen}
        options={{
          tabBarLabel: 'Library',
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons
              name="library-shelves"
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Store"
        component={StoreScreen}
        options={{
          tabBarLabel: 'Store',
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons
              name="window-closed-variant"
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Events"
        component={EventsScreen}
        options={{
          tabBarLabel: 'Events',
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons
              name="calendar-week"
              color={color}
              size={size}
            />
          ),
        }}
      />
     
    </Tab.Navigator>
  );
}

export default function BottomNav() {
  return <MyTabs />;
}
