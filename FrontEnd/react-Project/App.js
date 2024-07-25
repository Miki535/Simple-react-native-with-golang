import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import axios from 'axios';

export default function App() {
  
  const [message, setMessage] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://10.0.2.2:8080');
        console.log(response.data);
      } catch (error) {
        console.log('Error fetching data: ', error);
      }
    };

    fetchData();
  }, []);

  return (
    <View style={styles.container}>
      <Text>{message}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
