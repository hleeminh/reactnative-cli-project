import React, { useState, useEffect } from 'react';
import {
    Text,
    View,
    Image,
    KeyboardAvoidingView,
    FlatList,
    TouchableOpacity,
    TextInput,
    Keyboard
} from 'react-native';
import { images, colors, icons } from '../../const'
import Icon from 'react-native-vector-icons/FontAwesome5';

const MessFooter = (props) => {
    const { onEnterText, value, onPressSend } = props
    const [BP, setBP] = useState(false);
    useEffect(() => {
        Keyboard.addListener('keyboardDidShow', () => {
            setBP(true)
        })
        Keyboard.addListener('keyboardDidHide', () => {
            setBP(false)
        })
    })
    return (
        <View
            style={{
                flex: 1,
                flexDirection: 'row',
                alignItems: 'center',
                paddingHorizontal: 20,
            }}
        >
            {BP == false ? <View style={{
                flexDirection: 'row',
                alignItems: 'center',
            }}>
                <Icon
                    name='th-large'
                    style={{
                        color: colors.primaryColor2,
                        fontSize: 20,
                    }}
                />
                <Icon
                    name='camera'
                    style={{
                        color: colors.primaryColor2,
                        fontSize: 20,
                        marginLeft: 20
                    }}
                />
                <Icon
                    name='image'
                    style={{
                        color: colors.primaryColor2,
                        fontSize: 20,
                        marginLeft: 20
                    }}
                />
                <Icon
                    name='microphone'
                    style={{
                        color: colors.primaryColor2,
                        fontSize: 20,
                        marginLeft: 20
                    }}
                />
            </View>
                :
                <Icon
                    name='chevron-right'
                    style={{
                        color: colors.primaryColor2,
                        fontSize: 20,
                    }}
                />
            }
            {/* <View style={{flex: 1}}/> */}
            <View
                style={{
                    flex: 1,
                    height: 50,
                }}
            >
                <TextInput
                    style={{
                        flex: 1,
                        height: 50,
                        backgroundColor: '#f0f2f5',
                        borderRadius: 25,
                        paddingHorizontal: 15,
                        marginLeft: 10,
                    }}
                    placeholder='Aa'
                    value={value}
                    onChangeText={onEnterText}
                />
                <Icon
                    name='smile'
                    style={{
                        color: colors.primaryColor2,
                        fontSize: 20,
                        position: 'absolute',
                        right: 20,
                        top: 15
                    }}
                />
            </View>
            {BP == false ? <Icon
                name='thumbs-up'
                style={{
                    color: colors.primaryColor2,
                    fontSize: 20,
                    marginLeft: 10
                }}
            /> :
                <TouchableOpacity
                    onPress={onPressSend}
                >
                    <Icon
                        name='paper-plane'
                        style={{
                            color: colors.primaryColor2,
                            fontSize: 20,
                            marginLeft: 10
                        }}
                    />
                </TouchableOpacity>
            }
        </View>
    )
}
export default MessFooter;