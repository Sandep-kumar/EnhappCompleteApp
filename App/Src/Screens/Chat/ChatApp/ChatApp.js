import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList } from 'react-native';

const ChatApp = () => {
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState('');

  const handleSendMessage = () => {
    if (inputText.trim() !== '') {
      const newMessage = { id: Date.now().toString(), text: inputText.trim() };
      setMessages([...messages, newMessage]);
      setInputText('');
    }
  };

  return (
    <View style={{ flex: 1, padding: 16 }}>
      <FlatList
        data={messages}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Text>{item.text}</Text>}
        inverted
      />
      <View style={{ flexDirection: 'row' }}>
        <TextInput
          style={{ flex: 1, height: 40, borderColor: 'gray', borderWidth: 1, marginRight: 8 }}
          onChangeText={(text) => setInputText(text)}
          value={inputText}
          placeholder="Type a message..."
        />
        <TouchableOpacity onPress={handleSendMessage} style={{ backgroundColor: 'blue', padding: 8 }}>
          <Text style={{ color: 'white' }}>Send</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ChatApp;
