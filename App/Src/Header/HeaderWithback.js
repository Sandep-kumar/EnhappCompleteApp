import * as React from 'react';
import { Appbar } from 'react-native-paper';
import Home from '../Screens/Home/Home';

const Header = ({title,navigation}) => {
 
  return (
    <Appbar.Header>
        <Appbar.BackAction  onPress={() => navigation.navigate(Home)}  />
        <Appbar.Content title={title}/>
    </Appbar.Header>
  );
};

export default Header;