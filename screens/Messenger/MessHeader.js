import React, {useState, useEffect} from 'react';
import {
    Text,
    View,
    Image,
    KeyboardAvoidingView,
    FlatList,
    TouchableOpacity
} from 'react-native';
import {images, colors, icons} from '../../const'
import Icon from 'react-native-vector-icons/FontAwesome5';

const MessHeader = (props) => {
    const {onPressBack, nameUser, avatarUser} = props;
    return (
        <View
            style={{
                flex: 1,
                flexDirection: 'row',
                alignItems: 'center',
                paddingHorizontal: 20
            }}
        >
            <Icon
                onPress={onPressBack}
                name='arrow-left'
                style={{
                    fontSize: 20,
                    color: colors.primaryColor2
                }}
            />
            <Image
                source={{
                    uri: avatarUser
                }}
                style={{
                    height: 40,
                    width: 40,
                    borderRadius: 20,
                    marginLeft: 20
                }}
            />
            <Text 
                style={{
                    color: 'black', 
                    fontSize: 16,
                    marginLeft: 10
                }}
            >
                {nameUser}           
            </Text>
            <View style={{flex: 1}}></View>
            <Icon
                name='phone-alt'
                style={{
                    fontSize: 20,
                    color: colors.primaryColor2,
                    marginRight: 30,
                }}
            />
            <Icon
                name='video'
                style={{
                    fontSize: 20,
                    color: colors.primaryColor2,
                    marginRight: 30,
                }}
            />
            <Icon
                name='info-circle'
                style={{
                    fontSize: 20,
                    color: colors.primaryColor2
                }}
            />
        </View>
    )
}
export default MessHeader;