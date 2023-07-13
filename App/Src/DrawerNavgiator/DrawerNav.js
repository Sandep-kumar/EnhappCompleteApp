
import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

// import {DetailsScreen} from '../index'
import BottomNav from '../BottomNavigator/BottomNav';
import WaterIntake from '../Screens/Home/WaterIntake/WaterIntake';
import Steps from '../Screens/Home/Steps/Steps';
import {ProfieScreen} from '../indexpage'
import Breakfast from '../Screens/Breakfast/Breakfast';
import ChatApp from '../Screens/Chat/ChatApp/ChatApp';


const Drawer = createDrawerNavigator(); 

export default function DrawerNav() {
  return (
          
          <Drawer.Navigator >
            
            <Drawer.Screen name="Back" component={BottomNav} options={{headerShown:false}} />
            {/* <Drawer.Screen name="Profile" component={DetailsScreen} options={{headerShown:true}}/> */}
            <Drawer.Screen name="WaterIntake" component={WaterIntake} options={{headerShown:true}}/>
            <Drawer.Screen name="Steps" component={Steps} options={{headerShown:true}}/>
            <Drawer.Screen name="Breakfast" component={Breakfast} options={{headerShown:false}}/>
            <Drawer.Screen name="Profile" component={ProfieScreen} options={{headerShown:false}}/>
            <Drawer.Screen name="ChatApp" component={ChatApp} options={{headerShown:false}}/>
          </Drawer.Navigator>
         
  )
}

