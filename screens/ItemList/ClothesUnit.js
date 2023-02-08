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

const ClothesUnit = (props) => {

    let {id, url, name, price, status, heart, ok} = props.clotheprop;
    const {onPressClothe} = props
    return (
        <TouchableOpacity
            onPress={onPressClothe}
        >
            <View style={{ flex: 1, }}>
                <View
                    style={{
                        height: 140,
                        backgroundColor: 'white',
                        marginTop: 14,
                        marginHorizontal: 14,
                        justifyContent: 'flex-start',
                        flexDirection: 'row',
                    }}

                >
                    <Image
                        source={{
                            uri: url
                        }}
                        style={{
                            height: 140,
                            width: 100,
                            resizeMode: 'cover',
                        }}
                    />
                    <View
                        style={{
                            height: 120,
                            width: 2,
                            backgroundColor: '#e5e5e5',
                            margin: 10,
                        }}

                    />
                    <View
                        style={{
                            flex: 1,
                            // marginVertical: 10,
                            flexDirection: 'row'
                        }}
                    >
                        <View
                            style={{
                                flex: 4,
                                // backgroundColor: 'red',
                                flexDirection: 'column'
                            }}
                        >
                            <View
                                style={{
                                    flex: 1,
                                    // backgroundColor: 'green',
                                    justifyContent: 'center'
                                }}
                            >
                                <Text style={{
                                    color: 'black',
                                    fontWeight: '900',
                                    fontSize: 22
                                }}>
                                    {name}
                                </Text>
                            </View>
                            <View
                                style={{
                                    flex: 2,
                                    // backgroundColor: 'yellow'
                                }}
                            >
                                <Text style={{
                                    fontSize: 18,
                                    color: 'black',
                                    fontWeight: '700'
                                }}>
                                    {price + 'VNĐ'}
                                </Text>
                                <Text style={{
                                    // color: _getColorFromStatus(status),
                                    color: status == 'Còn hàng' ? colors.conHangColor : colors.hetHangColor,
                                    fontSize: 18,
                                    fontWeight: '500'
                                }}>
                                    {status.toUpperCase()}
                                </Text>
                                <TouchableOpacity
                                    onPress={() => {
                                        alert('Đã tim')
                                    }}
                                    style={{
                                        // padding: 10,
                                        height: 40,
                                        width: 50,
                                        // backgroundColor: 'green',
                                        alignItems: 'center'
                                    }}
                                >
                                    <View style={{
                                        marginTop: 10,
                                        // height: 30,
                                        flexDirection: 'row',
                                        // alignItems: 'center',
                                        // backgroundColor: 'green'
                                    }}>
                                        <Text style={{
                                            fontSize: 16,
                                            fontWeight: '900'
                                        }}>{heart}</Text>
                                        <Icon name='heart' style={{
                                            fontSize: 18,
                                            color: 'red',
                                            marginLeft: 5,
                                            marginTop: 2
                                        }} />

                                    </View>
                                </TouchableOpacity>

                            </View>
                        </View>
                        <View
                            style={{
                                flex: 1.5,
                                // backgroundColor: 'blue',
                                flexDirection: 'row',
                                alignItems: 'flex-end',
                            }}
                        >
                            <TouchableOpacity
                                onPress={() => {
                                    alert(`Đã thêm "${name}-${id}" vào giỏ hàng`)
                                }}
                                style={{
                                    flex: 1,
                                    height: 60,
                                    // backgroundColor: 'red',
                                    justifyContent: 'center',
                                    alignItems: 'center'
                                }}
                            >
                                <Icon name='cart-plus' style={{
                                    fontSize: 30,
                                    color: colors.primaryColor2,
                                }} />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
        </TouchableOpacity>

    )
}

export default ClothesUnit;