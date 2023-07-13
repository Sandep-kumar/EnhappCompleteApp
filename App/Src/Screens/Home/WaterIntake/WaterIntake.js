import { View, Text } from 'react-native'
import React from 'react'
import Header from '../../../Header/HeaderWithback'
import Desgin from '../../../components/Common/DateCarousel'
import WaterBody from '../../../components/Common/WaterBody'
import YourPageComponent from '../../../components/Common/YourPageComponent'

const WaterIntake = () => {
  return (
    <View>
      <Header title="Water Intake"/>
     
      <Desgin/>
      {/* <YourPageComponent/> */}
     <View>
     <WaterBody/>
     </View>
    </View>
  )
}

export default WaterIntake