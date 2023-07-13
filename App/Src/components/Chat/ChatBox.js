import {View, Text, Touchable} from 'react-native';
import React from 'react';
import {Stack, HStack,Image} from 'native-base';
import {Avatar} from '@rneui/themed';
import {styles} from '../../StylePage'
import ChatApp from '../../Screens/Chat/ChatApp/ChatApp';


function ChatBox ({UserName, lastText, UnRead, NoUnRead, src}) {
  
  return (
    <>
     
      <Stack
        style={styles.ChatBox_stack}>
        <HStack m={3} w={'100%'} >
          <View
            style={styles.ChatBox_Hstack_image}>
            {/* <Avatar
              size={60}
              source={{uri:"https://randomuser.me/api/portraits/men/36.jpg"}}
              rounded
            /> */}
            <Image
              size={50}
              borderRadius={100}
              source={{uri:"https://randomuser.me/api/portraits/men/36.jpg"}}
              alt="Alternate Text"
            />
             
          </View>
          <View
            style={styles.ChatBox_Hstack_chat}>
            <Text style={styles.ChatBox_Username}>{UserName}</Text>
            <Text style={styles.ChatBox_lasttext}>
              {lastText}
            </Text>
          </View>
          <View
            style={styles.ChatBox_Username}>
            <Text
              style={styles.ChatBox_lasttext_Time}>
              16:15
            </Text>
            <View>
              <View>
                <Avatar
                  size={UnRead == 'True' ? 27 : 0}
                  rounded
                  title={NoUnRead}
                  containerStyle={{backgroundColor: '#FFA500'}}
                />
              </View>
            </View>
          </View>
        </HStack>
      </Stack>
    </>
  );
};

export default ChatBox;
