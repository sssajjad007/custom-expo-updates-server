import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Constants from 'expo-constants';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>hi</Text>
      <Text style={styles.text}>welcome to code push</Text>
      <Text>{Constants?.expoRuntimeVersion}</Text>
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
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
