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

const ProductUnit = (props) => {

    let {id, url, name, price, sold} = props.productprop;
    const {onPressProduct} = props;

    return (
        <TouchableOpacity
            onPress={onPressProduct}
            style={{
                flex: 1,
            }}
        >
            <View
                style={{
                    flex: 1,
                    backgroundColor: 'white',
                    height: 300,
                    marginTop: 10,
                    marginRight: 10,
                    marginBottom: 0,
                    // marginLeft: 0
                }}
            >
                <Image
                    source={{
                        uri: url,
                    }}
                    style={{
                        height: 250,
                        // resizeMode: 'cover'
                    }}
                />
                <View style={{
                    flex: 1,
                    height: 45
                    // backgroundColor: 'green'
                }}>
                    <View style={{
                        flex: 1,
                    }}>
                        <Text style={{
                            marginLeft: 10,
                            color: 'black', 
                            fontSize: 14
                        }}>{name}</Text>
                    </View>
                    <View style={{
                        flex: 1.5,
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        marginHorizontal: 10,
                        alignItems: 'center'
                    }}>
                        <Text style={{
                            color: colors.orangeColor,
                            fontSize: 15 

                        }}>{`đ${price}`}</Text>
                        <Text style={{
                            fontSize: 10
                        }}>{`Đã bán ${sold}`}</Text>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default ProductUnit;