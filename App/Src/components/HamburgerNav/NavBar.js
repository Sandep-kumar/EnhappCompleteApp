import { View, Text } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from 'react-navigation-drawer';



const Drawer = createDrawerNavigator({
    Home: {
      screen: HomePage,
      navigationOptions: {
        title: 'Homepage'
      }
    },
    ProfilePage: {
      screen: ProfilePage,
      navigationOptions: {
        title: 'ProfilePage'
      }
    },
    Notifications: {
      screen: NotificationsPage,
      navigationOptions: {
        title: 'Notifications'
      }
    },
    SettingsPage: {
      screen: SettingsPage,
      navigationOptions: {
        title: 'SettingsPage'
      }
    }
  },
    {
      drawerPosition: 'left',
      contentComponent: CustomDrawerNavigation,
      drawerOpenRoute: 'DrawerOpen',
      drawerCloseRoute: 'DrawerClose',
      drawerToggleRoute: 'DrawerToggle',
      drawerWidth: (width / 3) * 2
    });

const NavBar = () => {
  return (
    <View>
      
    </View>
  )
}

export default NavBar