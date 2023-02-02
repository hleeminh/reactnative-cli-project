import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
// import firebase from './firebase/firebase';
import {Welcome, Login} from './screens';

export default function App() {
  return (
    <View style={{
      flex:1,
    }}>
      <Login/>
      {/* <Welcome/> */}
    </View>
  );
}