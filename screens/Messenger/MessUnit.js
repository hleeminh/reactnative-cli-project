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

const MessUnit = (props) => {
    const { onPressMessage } = props
    const { url, message, isSender, timeStamp } = props.messprop;
    return (
        isSender == true ? <View
            style={{
                flex: 1,
                flexDirection: 'row',
                padding: 10,
            }}
        >
            <Image
                source={{
                    uri: url
                }}
                style={{
                    height: 40,
                    width: 40,
                    resizeMode: 'cover',
                    borderRadius: 20,
                }}
            />
            <TouchableOpacity
                onPress={onPressMessage}
                style={{
                    flexDirection: 'row',
                    backgroundColor: colors.bgMessColor,
                    maxWidth: '75%',
                    maxHeight: 600,
                    minHeight: 40,
                    alignItems: 'center',
                    padding: 10,
                    borderRadius: 20,
                    marginLeft: 10
                }}
            >
                <Text style={{
                    color: 'black',
                    fontSize: 15
                }}>{message}</Text>
            </TouchableOpacity>
        </View> :
            <View
                style={{
                    flex: 1,
                    flexDirection: 'row',
                    padding: 10,
                    justifyContent: 'flex-end'
                }}
            >
                <TouchableOpacity
                    onPress={onPressMessage}
                    style={{
                        flexDirection: 'row',
                        backgroundColor: colors.bgMessColor1,
                        maxWidth: '75%',
                        maxHeight: 600,
                        minHeight: 40,
                        alignItems: 'center',
                        padding: 10,
                        borderRadius: 20,
                        marginLeft: 10
                    }}
                >
                    <Text style={{
                        color: 'white',
                        fontSize: 15
                    }}>{message}</Text>
                </TouchableOpacity>
            </View>

    )
}

export default MessUnit;