import {
    StyleSheet, 
    Text, 
    View, 
    Image, 
    ImageBackground,
    TouchableOpacity
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {icons, images, colors} from '../const';
import { UIButton } from '../components';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {
    auth, 
    firebaseDatabase, 
    createUserWithEmailAndPassword,
    firebaseDatabaseRef,
    firebaseSet,
    onAuthStateChanged,
    sendEmailVerification
} 
from '../firebase/firebase';
import AsyncStorage from '@react-native-async-storage/async-storage';


const Welcome = (props) => {
    const {navigation, route} = props //props của Welcome
    const {navigate, goBack} = navigation // function của navigation

    const names = ['Influencer', 'Business', 'Individual'];
    const [accountType, setAccoutType] = useState('');

    useEffect(() => {
        onAuthStateChanged(auth, (resUser) => {
            if(resUser) {
                //sign in
                let user = {
                    userId: resUser.uid,
                    email: resUser.email,
                    emailVerified: resUser.emailVerified,
                    accessToken: resUser.accessToken,
                }
                firebaseSet(firebaseDatabaseRef(
                    firebaseDatabase,
                    `users/${resUser.uid}`
                ), user);
                AsyncStorage.setItem('user', JSON.stringify(user))
                navigate('UITab')
            }
        })
    })
    return (
        <View style={{
            flex: 1,
            // flexDirection: 'column'
        }}>
            <ImageBackground
                source={images.backgroundImage}
                resizeMode='cover'
                style={{
                    flex: 1,
                }}
            >
                <View style={{
                    flex: 2,
                }}>
                    <View style={{
                        flexDirection: 'row',
                        height: 120,
                        justifyContent: 'flex-start',
                        alignItems: 'center'
                    }}>
                        <Image
                            source={icons.iconLogo}
                            style={{
                                height: 40,
                                width: 40,
                                marginLeft: 10
                            }}
                        />
                        <Text style={{
                            color: 'white',
                            fontSize: 22,
                            fontWeight: 'bold'
                        }}>
                            HLEEM1NH.INC
                        </Text>
                        <View style={{ flex: 1 }} />
                        <Icon name="question" style={{
                            color: 'white',
                            fontSize: 20,
                            marginRight: 10
                        }}/>
                        {/* <Image
                            source={icons.iconQuestion}
                            style={{
                                height: 22,
                                width: 22,
                                tintColor: '#fff',
                                marginRight: 10
                            }}
                        /> */}
                    </View>
                </View>
                <View style={{
                    flex: 2,
                    // backgroundColor: 'red',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <Text style={{marginBottom: 7, color: 'white', fontSize: 20}}>Welcome to</Text>
                    <Text style={{marginBottom: 7, color: 'white', fontSize: 20, fontWeight: 'bold'}}>HLEEM1NH.INC</Text>    
                    <Text style={{marginBottom: 7, color: 'white', fontSize: 16}}>Please select your account type</Text>    
                </View>
                <View style={{
                    flex: 4,
                    // backgroundColor: 'green'
                }}>
                    {names.map((name, index) => 
                        <UIButton
                            key={index}
                            onPress={() => setAccoutType(name)} 
                            titleButton = {name}
                            isSelected = {accountType == name}
                        />    
                    )}
                     
                </View>
                <View style={{
                    flex: 2,
                    // backgroundColor: 'purple'
                }}>
                    <UIButton 
                        onPress={() => {
                            navigate('Login')
                        }}
                        titleButton = 'Login'
                    
                    />
                    <Text style={{
                        color: 'white',
                        fontSize: 16,
                        alignSelf: 'center',
                        marginTop: 10
                    }}>Create a new account ?</Text>
                    <TouchableOpacity 
                        style={{
                            marginTop: 6,
                        }}
                        onPress = {() => {
                            navigate('Register')
                        }}
                    >
                        <Text style={{
                            color: 'white',
                            fontSize: 16,
                            alignSelf: 'center',
                            textDecorationLine: 'underline'
                        }}>Register</Text>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        </View>
    )
};

export default Welcome;