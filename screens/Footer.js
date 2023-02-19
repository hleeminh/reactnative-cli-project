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
import { icons, images, colors } from '../const';
import Icon from 'react-native-vector-icons/FontAwesome5';

const Footer = (props) => {
    const {onPressHome, onPressList, onPressGridList, onPressSetting} = props
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
                <TouchableOpacity 
                    onPress={onPressHome} 
                    style={{
                        flex: 1,
                        alignItems: 'center',
                        // backgroundColor: 'green'
                    }}
                >
                    <Icon name='home' style={{
                        fontSize: 25
                    }} />
                    <Text>Home</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                    onPress={onPressList} 
                    style={{
                        flex: 1,
                        alignItems: 'center',
                        // backgroundColor: 'green'
                    }}
                >
                    <Icon name='list' style={{
                        fontSize: 25
                    }} />
                    <Text>NorList</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                    onPress={onPressGridList} 
                    style={{
                        flex: 1,
                        alignItems: 'center',
                        // backgroundColor: 'green'
                    }}
                >
                    <Icon name='th-large' style={{
                        fontSize: 25
                    }} />
                    <Text>GridList</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                    onPress={onPressSetting} 
                    style={{
                        flex: 1,
                        alignItems: 'center',
                        // backgroundColor: 'green'
                    }}
                >
                    <Icon name='cog' style={{
                        fontSize: 25,
                        fontFamily: 'solid'
                    }} />
                    <Text>Settings</Text>
                </TouchableOpacity>

            </View>
        </View>
    )
}

export default Footer;