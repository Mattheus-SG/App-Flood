import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Maps from './src/screens/Maps';
import Alert from './src/screens/Alert'

export default function App() {
  return (
    <View style={styles.container}>
      <Maps />
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
