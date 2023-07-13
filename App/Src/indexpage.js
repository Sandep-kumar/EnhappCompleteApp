import {View, Text} from 'react-native';
import React from 'react';
import {NativeBaseProvider, ScrollView} from 'native-base';
import Header from './Header/Header';
import HeaderWithback from './Header/HeaderWithback';
import Home from './Screens/Home/Home';
import Chat from './Screens/Chat/Chat';
import Library from './Screens/Library/Library';
import Store from './Screens/Store/StoreD';
import Profile from './Screens/Profile/Profile';


export function HomeScreen({navigation}) {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <NativeBaseProvider>
        <Header title="Home" navigation={navigation} />
        <Home navigation={navigation} />
      </NativeBaseProvider>
    </View>
  );
}

export function ChatScreen({navigation}) {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <NativeBaseProvider>
        <Header title="Chat" navigation={navigation} />
        <ScrollView>
          <Chat />
        </ScrollView>
      </NativeBaseProvider>
    </View>
  );
}
export function LibraryScreen({navigation}) {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <NativeBaseProvider>
        <Header title="Library" navigation={navigation} />
        <Library />
      </NativeBaseProvider>
    </View>
  );
}
export function StoreScreen({navigation}) {
  return (
    <>
      <NativeBaseProvider>
        <Header title="Store" navigation={navigation} />
        <Store />
      </NativeBaseProvider>
    </>
  );
}
export function EventsScreen({navigation}) {
  return (
    <>
      <Header title="Event" navigation={navigation} />
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>Events Screen</Text>
      </View>
    </>
  );
}
export function ProfieScreen({navigation}) {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <NativeBaseProvider>
        <HeaderWithback title="Profile" navigation={navigation}/>
        <ScrollView>
          <Profile />
        </ScrollView>
      </NativeBaseProvider>
    </View>
  );
}

export default HomeScreen;
