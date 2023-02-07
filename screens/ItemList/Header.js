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

const Header = (props) => {
    const {onSearch , length} = props;
    const [results, setResults] = useState('');
    return (
        <View
            style={{
                flex: 1,
                // backgroundColor: 'red',
                flexDirection: 'row'
            }}
        >
            <View style={{
                flex: 5,
                // backgroundColor: 'blue',
                alignItems: 'center',
                flexDirection: 'row'
            }}>
                <Icon name='search' style={{
                    fontSize: 20,
                    marginLeft: 20,
                    position: 'absolute',
                    color: 'black'
                }}/>
                <TextInput
                    onChangeText={onSearch}
                    autoCorrect={false}
                    style={{
                        flex: 1,
                        height: 40,
                        backgroundColor: '#e5e5e5',
                        opacity: 0.8,
                        marginLeft: 10,
                        paddingStart: 40
                    }}
                />
                    
            </View>
            <View style={{
                flex: 1,
                // backgroundColor: 'red',
                justifyContent: 'center',
                alignItems: 'flex-start'
            }}>
                <TouchableOpacity
                    onPress={() => {
                        alert('Menu')
                    }}
                >
                    <Icon name='bars' style={{
                        fontSize: 30,
                        marginLeft: 20
                    }} />
                </TouchableOpacity>
            </View>

        </View>
    )
}

export default Header;