import { View, Text } from 'react-native'
import React from 'react'
import BottomNav from './Src/BottomNavigator/BottomNav'
import DrawerNav from './Src/DrawerNavgiator/DrawerNav'

import { NavigationContainer } from '@react-navigation/native';

const App = () => {
  return (
    <>
    <NavigationContainer >

    <DrawerNav/>
      {/* <BottomNav/> */}
    </NavigationContainer>
    </>
  )
}

export default App