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
    ScrollView
} from 'react-native';
import React, { useState, useEffect } from 'react';
import { icons, images, colors } from '../../const';
import Icon from 'react-native-vector-icons/FontAwesome5';

const Footer = (props) => {
    return (
        <View
            style={{
                // flex: 0.7,
                flex: 1,
                // backgroundColor: 'blue',                  
                backgroundColor: colors.bgColor,
            }}
        >
            <View style={{
                flex: 1,
                flexDirection: 'row',
                padding: 5,
                marginTop: 5
            }}>
                <TouchableOpacity onPress={() => { alert('Home') }} style={{
                    flex: 1,
                    alignItems: 'center',
                    // backgroundColor: 'green'
                }}>
                    <Icon name='home' style={{
                        fontSize: 25
                    }} />
                    <Text>Home</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => { alert('Hot sales') }} style={{
                    flex: 1,
                    alignItems: 'center',
                    // backgroundColor: 'green'
                }}>
                    <Icon name='hotjar' style={{
                        fontSize: 25
                    }} />
                    <Text>Hot sales</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => { alert('My Cart') }} style={{
                    flex: 1,
                    alignItems: 'center',
                    // backgroundColor: 'green'
                }}>
                    <Icon name='shopping-cart' style={{
                        fontSize: 25
                    }} />
                    <Text>My Cart</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => { alert('Profile') }} style={{
                    flex: 1,
                    alignItems: 'center',
                    // backgroundColor: 'green'
                }}>
                    <Icon name='user-alt' style={{
                        fontSize: 25,
                        fontFamily: 'solid'
                    }} />
                    <Text>Profile</Text>
                </TouchableOpacity>

            </View>
        </View>
    )
}

export default Footer;