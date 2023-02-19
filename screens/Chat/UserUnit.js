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


// const _getColorFromStatus = (status) => {
//     if(status.toLowerCase().trim() == 'còn hàng'){
//         return colors.conHangColor;
//     }
//     else if(status.toLowerCase().trim() == 'tạm hết hàng'){
//         return colors.hetHangColor;
//     }
//     return colors.conHangColor;
// }

const UserUnit = (props) => {

    let { url, userId, name, message, numberUnreadMessage, online } = props.userprop;
    const { onPressUser } = props
    return (
        <TouchableOpacity
            onPress={onPressUser}
        >
            <View style={{ flex: 1 }}>
                <View
                    style={{
                        height: 80,
                        marginTop: 14,
                        marginHorizontal: 14,
                        justifyContent: 'flex-start',
                        flexDirection: 'row',
                    }}
                >
                    <View>
                        <Image
                            source={{
                                uri: url
                            }}
                            style={{
                                height: 80,
                                width: 80,
                                resizeMode: 'cover',
                                borderRadius: 50
                            }}
                        />
                        {numberUnreadMessage != 0 && <View style={{
                            backgroundColor: 'red',
                            position: 'absolute',                                                            
                            // right: 0,
                            borderRadius: 12,                           
                            borderWidth: 3,
                            borderColor: 'white',
                            height: 24, 
                            width: 24,
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}>
                            <Text style={{
                                color: 'white',
                                fontSize: 12
                            }}>{numberUnreadMessage}</Text>
                        </View>}
                        {online != 0 && <View style={{
                            backgroundColor: '#2f9a48',
                            position: 'absolute',                                                            
                            right: 0,
                            bottom: 0,
                            borderRadius: 12,                           
                            borderWidth: 3,
                            borderColor: 'white',
                            height: 24, 
                            width: 24,
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}/>    
                        }
                    </View>
                    <View
                        style={{
                            flex: 1,
                            // backgroundColor: 'green',
                            justifyContent: 'center',
                            marginLeft: 10
                        }}
                    >
                        <Text style={{
                            color: numberUnreadMessage !=0 ? 'black' : colors.inactiveColor,
                            fontWeight: '500',
                            fontSize: 16,
                            marginBottom: 6,
                        }}>
                            {name}
                        </Text>
                        <Text style={{
                            color: numberUnreadMessage !=0 ? 'black' : colors.inactiveColor,
                            fontWeight: '400',
                            fontSize: 14,
                        }}>
                            {message}
                        </Text>
                    </View>
                </View>
            </View>
        </TouchableOpacity>

    )
}

export default UserUnit;