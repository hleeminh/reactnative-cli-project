import {
    StyleSheet,
    Text,
    View,
    Image,
    ImageBackground,
    TouchableOpacity,
    TextInput,
    KeyboardAvoidingView,
    Keyboard,
    ScrollView,
    FlatList
} from 'react-native';
import React, { useState, useEffect } from 'react';
import { icons, images, colors } from '../../const';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Header from '../ItemList/Header';
import RowList from '../ItemList/RowList';
import Footer from '../ItemList/Footer';

const ProductList = (props) => {
    return (
        <View style={{
            flex: 1
        }}>
            <View></View>

            <View></View> 

            <View style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <Text>
                    OK
                </Text>
            </View>

            <View></View>    
        </View>
    )
}

export default ProductList;