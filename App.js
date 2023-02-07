import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
// import firebase from './firebase/firebase';
import {Welcome, Login, Register, ListView} from './screens';
import ItemList from './screens/ItemList/ClothesList';
import ClothesList from './screens/ItemList/ClothesList';

export default function App() {
  return (
    <View style={{
      flex:1,
    }}>
      {/* <Welcome/> */}
      {/* <Login/> */}
      {/* <Register/> */}
      <ClothesList/>
    </View>
  );
}