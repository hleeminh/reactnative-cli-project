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

const RowList = (props) => {
    let {id, name, url} = props.categoryprop;
    const {onPressCategory} = props;
    return(
        <TouchableOpacity
            onPress={onPressCategory} 
            style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center'
            }}
        >         
            <Image
                source={{
                    uri: url
                }}
                style={{
                    height: 50,
                    width: 50,
                    marginHorizontal: 20,
                    marginTop: 5,
                    borderRadius: 25,
                    borderColor: colors.primaryColor2    
                }}
            />
            <Text style={{
                color: 'black',
                fontWeight: '700'
            }}>{name}</Text>

        </TouchableOpacity>
    )
}

export default RowList;