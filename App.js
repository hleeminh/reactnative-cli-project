import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
// import firebase from './firebase/firebase';
import {Welcome, Login, Register, ClothesList, ProductList, Setting, Chat, Messenger} from './screens';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import UITab from './navigation/UITab';

const Stack = createNativeStackNavigator()

const App = () => {
  return (
    <View style={{
      flex:1,
    }}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Welcome' 
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name='Welcome' component={Welcome}/>
          <Stack.Screen name='Login' component={Login}/>
          <Stack.Screen name='Register' component={Register}/>
          <Stack.Screen name='UITab' component={UITab}/>  
          <Stack.Screen name='Messenger' component={Messenger}/>       
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}

export default App;