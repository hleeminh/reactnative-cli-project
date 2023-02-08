import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
// import firebase from './firebase/firebase';
import {Welcome, Login, Register, ClothesList, ProductList} from './screens';

const App = () => {
  return (
    <View style={{
      flex:1,
    }}>
      {/* <Welcome/> */}
      {/* <Login/> */}
      {/* <Register/> */}
      {/* <ClothesList/> */}
      <ProductList/>
    </View>
  );
}

export default App;