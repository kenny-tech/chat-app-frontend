import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import axios from 'axios';

const ChatScreen = () => {
  const [message, setMessage] = useState('');

  const handleSendMessage = async () => {
    try {
      const response = await axios.post('API_URL/send-message', {
        user_id: 1,
        message,
      });

      console.log(response.data);
      setMessage('');
    } catch (error) {
      console.error('Error sending message:', error);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Type your message"
        value={message}
        onChangeText={setMessage}
        style={styles.input}
      />
      <Button title="Send" onPress={handleSendMessage} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
});

export default ChatScreen;
