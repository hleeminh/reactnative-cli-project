import {
    StyleSheet,
    Text,
    View,
    Image,
    ImageBackground,
    TouchableOpacity
} from 'react-native';
import React from 'react';
import { icons, images } from '../const';
import {colors} from '../const';
import Icon from 'react-native-vector-icons/FontAwesome5';

const UIButton = (props) => {
    const {onPress, titleButton, isSelected} = props;
    return (
        <TouchableOpacity
            onPress={onPress}
            style={{
                borderColor: 'white',
                borderWidth: 2,
                height: 50,
                borderRadius: 10,
                marginHorizontal: 40,
                marginVertical: 10,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: isSelected == true ? 'white' : null
            }}>
            {isSelected == true && <Icon name="check" style={{
                color: 'green',
                fontSize: 20,
                position: 'absolute',
                left: 10,

            }} />}
            <Text style={{
                color: isSelected == true ? colors.primaryColor1 : 'white',
                fontSize: 16
            }}>{titleButton}</Text>
        </TouchableOpacity>
    )
}

export default UIButton;