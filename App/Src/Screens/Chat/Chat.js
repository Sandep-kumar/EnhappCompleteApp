import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import Search from "./SearchBox/Search";
import ChatBox from "../../components/Chat/ChatBox";
import {styles} from '../../StylePage';
import ChatApp from "./ChatApp/ChatApp";

const Chat = ({navigation}) => {
  return (
    <View>
      <View style={styles.bg_white}>
        <Search />
      </View>
      <TouchableOpacity onPress={() =>
        navigation.navigate(ChatApp)
      }>
      <View style={styles.marginBottom} >
        <ChatBox src="https://randomuser.me/api/portraits/men/36.jpg"
          UnRead="True"
          NoUnRead="3"
          UserName="Janet Fowler"
          lastText="I'm going to San Francisco …"
        />
      </View>
      </TouchableOpacity>
      <View style={styles.marginBottom}>
        <ChatBox src="https://randomuser.me/api/portraits/men/36.jpg"
         UnRead="False"
          NoUnRead="3"
          UserName="Sandeep Fowler"
          lastText="I'm going to San Francisco …"
        />
      </View>
     
      <View style={styles.marginBottom}>
        <ChatBox
          src="https://randomuser.me/api/portraits/men/36.jpg"
          UnRead="False" 
          NoUnRead="3"
          UserName="Janet Fowler"
          lastText="I'm going to San Francisco …"
        />
      </View>
      <View style={styles.marginBottom}>
        <ChatBox
          UnRead="False" 
          NoUnRead="3"
          UserName="Janet Fowler"
          lastText="I'm going to San Francisco …"
          src="https://randomuser.me/api/portraits/men/36.jpg"
        />
      </View>
      <View style={styles.marginBottom}>
        <ChatBox
          UnRead="False" 
          NoUnRead="3"
          UserName="Janet Fowler"
          lastText="I'm going to San Francisco …"
          src="https://randomuser.me/api/portraits/men/36.jpg"
        />
      </View>
      <View style={styles.marginBottom}>
        <ChatBox
          UnRead="False" 
          NoUnRead="3"
          UserName="Janet Fowler"
          lastText="I'm going to San Francisco …"
          src="https://randomuser.me/api/portraits/men/36.jpg"
        />
      </View>
      <View style={styles.marginBottom}>
        <ChatBox
          UnRead="False" 
          NoUnRead="3"
          UserName="Janet Fowler"
          lastText="I'm going to San Francisco …"
          src="https://randomuser.me/api/portraits/men/36.jpg"
        />
      </View>
     
     
     
     
      
    </View>
  );
};

export default Chat;
