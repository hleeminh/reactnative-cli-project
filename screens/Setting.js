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
    ScrollView,
    FlatList,
    Switch
} from 'react-native';
import React, { useState, useEffect } from 'react';
// import {NavigationContainer} from '@react-navigation/native';
// import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { icons, images, colors } from '../const';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Footer from './Footer';
import {StackActions} from '@react-navigation/native'
import {
    auth, 
    firebaseDatabase, 
    createUserWithEmailAndPassword,
    firebaseDatabaseRef,
    firebaseSet,
    onAuthStateChanged,
    sendEmailVerification
} 
from '../firebase/firebase'



const Setting = (props) => {
    const { navigation, route } = props //props của Login
    const { navigate, goBack } = navigation // function của navigation
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

    const [isEnabled1, setIsEnabled1] = useState(true);
    const toggleSwitch1 = () => setIsEnabled1(previousState => !previousState);
    return (
        <View style={{
            flex: 1,
            backgroundColor: colors.bgSetting
        }}>
            <View
                style={{
                    height: 70,
                    backgroundColor: colors.primaryColor2,
                    justifyContent: 'center'
                }}
            >
                <Text style={{
                    color: 'white',
                    fontSize: 25,
                    fontWeight: '500',
                    marginLeft: 10
                }}>
                    Setting
                </Text>
            </View>
            <ScrollView>
                <View>
                    <View
                        style={{
                            height: 50,
                            // backgroundColor: 'green',
                            justifyContent: 'flex-end'
                        }}
                    >
                        <Text style={{ fontSize: 15, padding: 10 }}>Common</Text>
                    </View>

                    <View
                        style={{
                            flexDirection: 'row',
                            backgroundColor: 'white',
                            height: 50,
                            alignItems: 'center',
                            paddingHorizontal: 10
                        }}
                    >
                        <Icon
                            name='globe'
                            style={{
                                fontSize: 25,
                            }}
                        />
                        <Text style={{
                            color: '#555055',
                            fontSize: 16,
                            marginLeft: 10
                        }}>
                            Languages
                        </Text>
                        <View style={{ flex: 1 }} />
                        <Text style={{
                            color: '#bcb8bc',
                            fontSize: 16,
                            marginRight: 10
                        }}>
                            English
                        </Text>
                        <Icon
                            name='chevron-right'
                            style={{
                                fontSize: 22,
                                color: '#bcb8bc',
                            }}
                        />
                    </View>

                    <View
                        style={{
                            flexDirection: 'row',
                            backgroundColor: 'white',
                            height: 50,
                            alignItems: 'center',
                            paddingHorizontal: 10
                        }}
                    >
                        <Icon
                            name='cloud'
                            style={{
                                fontSize: 20,
                            }}
                        />
                        <Text style={{
                            color: '#555055',
                            fontSize: 16,
                            marginLeft: 10
                        }}>
                            Enviroment
                        </Text>
                        <View style={{ flex: 1 }} />
                        <Text style={{
                            color: '#bcb8bc',
                            fontSize: 16,
                            marginRight: 10
                        }}>
                            Production
                        </Text>
                        <Icon
                            name='chevron-right'
                            style={{
                                fontSize: 22,
                                color: '#bcb8bc',
                            }}
                        />
                    </View>
                </View>

                <View>
                    <View
                        style={{
                            height: 50,
                            // backgroundColor: 'green',
                            justifyContent: 'flex-end'
                        }}
                    >
                        <Text style={{ fontSize: 15, padding: 10 }}>Account</Text>

                    </View>

                    <View
                        style={{
                            flexDirection: 'row',
                            backgroundColor: 'white',
                            height: 50,
                            alignItems: 'center',
                            paddingHorizontal: 10
                        }}
                    >
                        <Icon
                            name='phone'
                            style={{
                                fontSize: 25,
                            }}
                        />
                        <Text style={{
                            color: '#555055',
                            fontSize: 16,
                            marginLeft: 10
                        }}>
                            Phone number
                        </Text>
                        <View style={{ flex: 1 }} />
                        <Text style={{
                            color: '#bcb8bc',
                            fontSize: 16,
                            marginRight: 10
                        }}>
                            +84354551119
                        </Text>
                        <Icon
                            name='chevron-right'
                            style={{
                                fontSize: 22,
                                color: '#bcb8bc',
                            }}
                        />
                    </View>

                    <View
                        style={{
                            flexDirection: 'row',
                            backgroundColor: 'white',
                            height: 50,
                            alignItems: 'center',
                            paddingHorizontal: 10
                        }}
                    >
                        <Icon
                            name='envelope'
                            style={{
                                fontSize: 25,
                            }}
                        />
                        <Text style={{
                            color: '#555055',
                            fontSize: 16,
                            marginLeft: 10
                        }}>
                            Email
                        </Text>
                        <View style={{ flex: 1 }} />
                        <Icon
                            name='chevron-right'
                            style={{
                                fontSize: 22,
                                color: '#bcb8bc',
                            }}
                        />
                    </View>

                    <View
                        style={{
                            flexDirection: 'row',
                            backgroundColor: 'white',
                            height: 50,
                            alignItems: 'center',
                            paddingHorizontal: 10
                        }}
                    >
                        <Icon
                            name='sync'
                            style={{
                                fontSize: 25,
                            }}
                        />
                        <Text style={{
                            color: '#555055',
                            fontSize: 16,
                            marginLeft: 10
                        }}>
                            Sync
                        </Text>
                        <View style={{ flex: 1 }} />
                        <Icon
                            name='chevron-right'
                            style={{
                                fontSize: 22,
                                color: '#bcb8bc',
                            }}
                        />
                    </View>

                    <TouchableOpacity
                        onPress={() => {
                            auth.signOut();
                            navigation.dispatch(StackActions.popToTop())
                        }}
                        style={{
                            flexDirection: 'row',
                            backgroundColor: 'white',
                            height: 50,
                            alignItems: 'center',
                            paddingHorizontal: 10
                        }}
                    >
                        <Icon
                            name='sign-out-alt'
                            style={{
                                fontSize: 25,
                            }}
                        />
                        <Text style={{
                            color: '#555055',
                            fontSize: 16,
                            marginLeft: 10
                        }}>
                            Sign out
                        </Text>
                        <View style={{ flex: 1 }} />
                        <Icon
                            name='chevron-right'
                            style={{
                                fontSize: 22,
                                color: '#bcb8bc',
                            }}
                        />
                    </TouchableOpacity>

                </View>

                <View>
                    <View
                        style={{
                            height: 50,
                            // backgroundColor: 'green',
                            justifyContent: 'flex-end'
                        }}
                    >
                        <Text style={{ fontSize: 15, padding: 10 }}>Common</Text>
                    </View>

                    <View
                        style={{
                            flexDirection: 'row',
                            backgroundColor: 'white',
                            height: 50,
                            alignItems: 'center',
                            paddingHorizontal: 10
                        }}
                    >
                        <Icon
                            name='globe'
                            style={{
                                fontSize: 25,
                            }}
                        />
                        <Text style={{
                            color: '#555055',
                            fontSize: 16,
                            marginLeft: 10
                        }}>
                            Languages
                        </Text>
                        <View style={{ flex: 1 }} />
                        <Text style={{
                            color: '#bcb8bc',
                            fontSize: 16,
                            marginRight: 10
                        }}>
                            English
                        </Text>
                        <Icon
                            name='chevron-right'
                            style={{
                                fontSize: 22,
                                color: '#bcb8bc',
                            }}
                        />
                    </View>

                    <View
                        style={{
                            flexDirection: 'row',
                            backgroundColor: 'white',
                            height: 50,
                            alignItems: 'center',
                            paddingHorizontal: 10
                        }}
                    >
                        <Icon
                            name='cloud'
                            style={{
                                fontSize: 20,
                            }}
                        />
                        <Text style={{
                            color: '#555055',
                            fontSize: 16,
                            marginLeft: 10
                        }}>
                            Enviroment
                        </Text>
                        <View style={{ flex: 1 }} />
                        <Text style={{
                            color: '#bcb8bc',
                            fontSize: 16,
                            marginRight: 10
                        }}>
                            Production
                        </Text>
                        <Icon
                            name='chevron-right'
                            style={{
                                fontSize: 22,
                                color: '#bcb8bc',
                            }}
                        />
                    </View>
                </View>

                <View>
                    <View
                        style={{
                            height: 50,
                            // backgroundColor: 'green',
                            justifyContent: 'flex-end'
                        }}
                    >
                        <Text style={{ fontSize: 15, padding: 10 }}>Security</Text>

                    </View>

                    <View
                        style={{
                            flexDirection: 'row',
                            backgroundColor: 'white',
                            height: 50,
                            alignItems: 'center',
                            paddingHorizontal: 10
                        }}
                    >
                        <Icon
                            name='lock'
                            style={{
                                fontSize: 27,
                            }}
                        />
                        <Text style={{
                            color: '#555055',
                            fontSize: 16,
                            marginLeft: 10
                        }}>
                            Lock app in background
                        </Text>
                        <View style={{ flex: 1 }} />
                        <Switch
                            trackColor={{ false: '#dad6da', true: '#f1a089' }}
                            thumbColor={isEnabled ? colors.orangeColor1 : 'white'}
                            ios_backgroundColor="#3e3e3e"
                            onValueChange={toggleSwitch}
                            value={isEnabled}
                        />
                    </View>

                    <View
                        style={{
                            flexDirection: 'row',
                            backgroundColor: 'white',
                            height: 50,
                            alignItems: 'center',
                            paddingHorizontal: 10
                        }}
                    >
                        <Icon
                            name='fingerprint'
                            style={{
                                fontSize: 25,
                            }}
                        />
                        <Text style={{
                            color: '#555055',
                            fontSize: 16,
                            marginLeft: 10
                        }}>
                            Use fingerprint
                        </Text>
                        <View style={{ flex: 1 }} />
                        <Switch
                            style={{
                                height: 50
                            }}
                            trackColor={{ false: '#dad6da', true: '#f1a089' }}
                            thumbColor={isEnabled1 ? colors.orangeColor1 : 'white'}
                            ios_backgroundColor="#3e3e3e"
                            onValueChange={toggleSwitch1}
                            value={isEnabled1}
                        />
                    </View>

                </View>

                <View>
                    <View
                        style={{
                            height: 50,
                            // backgroundColor: 'green',
                            justifyContent: 'flex-end'
                        }}
                    >
                        <Text style={{ fontSize: 15, padding: 10 }}>Common</Text>
                    </View>

                    <View
                        style={{
                            flexDirection: 'row',
                            backgroundColor: 'white',
                            height: 50,
                            alignItems: 'center',
                            paddingHorizontal: 10
                        }}
                    >
                        <Icon
                            name='globe'
                            style={{
                                fontSize: 25,
                            }}
                        />
                        <Text style={{
                            color: '#555055',
                            fontSize: 16,
                            marginLeft: 10
                        }}>
                            Languages
                        </Text>
                        <View style={{ flex: 1 }} />
                        <Text style={{
                            color: '#bcb8bc',
                            fontSize: 16,
                            marginRight: 10
                        }}>
                            English
                        </Text>
                        <Icon
                            name='chevron-right'
                            style={{
                                fontSize: 22,
                                color: '#bcb8bc',
                            }}
                        />
                    </View>

                    <View
                        style={{
                            flexDirection: 'row',
                            backgroundColor: 'white',
                            height: 50,
                            alignItems: 'center',
                            paddingHorizontal: 10
                        }}
                    >
                        <Icon
                            name='cloud'
                            style={{
                                fontSize: 20,
                            }}
                        />
                        <Text style={{
                            color: '#555055',
                            fontSize: 16,
                            marginLeft: 10
                        }}>
                            Enviroment
                        </Text>
                        <View style={{ flex: 1 }} />
                        <Text style={{
                            color: '#bcb8bc',
                            fontSize: 16,
                            marginRight: 10
                        }}>
                            Production
                        </Text>
                        <Icon
                            name='chevron-right'
                            style={{
                                fontSize: 22,
                                color: '#bcb8bc',
                            }}
                        />
                    </View>
                </View>

                <View>
                    <View
                        style={{
                            height: 50,
                            // backgroundColor: 'green',
                            justifyContent: 'flex-end'
                        }}
                    >
                        <Text style={{ fontSize: 15, padding: 10 }}>Account</Text>

                    </View>

                    <View
                        style={{
                            flexDirection: 'row',
                            backgroundColor: 'white',
                            height: 50,
                            alignItems: 'center',
                            paddingHorizontal: 10
                        }}
                    >
                        <Icon
                            name='phone'
                            style={{
                                fontSize: 25,
                            }}
                        />
                        <Text style={{
                            color: '#555055',
                            fontSize: 16,
                            marginLeft: 10
                        }}>
                            Phone number
                        </Text>
                        <View style={{ flex: 1 }} />
                        <Text style={{
                            color: '#bcb8bc',
                            fontSize: 16,
                            marginRight: 10
                        }}>
                            +84354551119
                        </Text>
                        <Icon
                            name='chevron-right'
                            style={{
                                fontSize: 22,
                                color: '#bcb8bc',
                            }}
                        />
                    </View>

                    <View
                        style={{
                            flexDirection: 'row',
                            backgroundColor: 'white',
                            height: 50,
                            alignItems: 'center',
                            paddingHorizontal: 10
                        }}
                    >
                        <Icon
                            name='envelope'
                            style={{
                                fontSize: 25,
                            }}
                        />
                        <Text style={{
                            color: '#555055',
                            fontSize: 16,
                            marginLeft: 10
                        }}>
                            Email
                        </Text>
                        <View style={{ flex: 1 }} />
                        <Icon
                            name='chevron-right'
                            style={{
                                fontSize: 22,
                                color: '#bcb8bc',
                            }}
                        />
                    </View>

                    <View
                        style={{
                            flexDirection: 'row',
                            backgroundColor: 'white',
                            height: 50,
                            alignItems: 'center',
                            paddingHorizontal: 10
                        }}
                    >
                        <Icon
                            name='sync'
                            style={{
                                fontSize: 25,
                            }}
                        />
                        <Text style={{
                            color: '#555055',
                            fontSize: 16,
                            marginLeft: 10
                        }}>
                            Sync
                        </Text>
                        <View style={{ flex: 1 }} />
                        <Icon
                            name='chevron-right'
                            style={{
                                fontSize: 22,
                                color: '#bcb8bc',
                            }}
                        />
                    </View>

                </View>

                <View>
                    <View
                        style={{
                            height: 50,
                            // backgroundColor: 'green',
                            justifyContent: 'flex-end'
                        }}
                    >
                        <Text style={{ fontSize: 15, padding: 10 }}>Account</Text>

                    </View>

                    <View
                        style={{
                            flexDirection: 'row',
                            backgroundColor: 'white',
                            height: 50,
                            alignItems: 'center',
                            paddingHorizontal: 10
                        }}
                    >
                        <Icon
                            name='phone'
                            style={{
                                fontSize: 25,
                            }}
                        />
                        <Text style={{
                            color: '#555055',
                            fontSize: 16,
                            marginLeft: 10
                        }}>
                            Phone number
                        </Text>
                        <View style={{ flex: 1 }} />
                        <Text style={{
                            color: '#bcb8bc',
                            fontSize: 16,
                            marginRight: 10
                        }}>
                            +84354551119
                        </Text>
                        <Icon
                            name='chevron-right'
                            style={{
                                fontSize: 22,
                                color: '#bcb8bc',
                            }}
                        />
                    </View>

                    <View
                        style={{
                            flexDirection: 'row',
                            backgroundColor: 'white',
                            height: 50,
                            alignItems: 'center',
                            paddingHorizontal: 10
                        }}
                    >
                        <Icon
                            name='envelope'
                            style={{
                                fontSize: 25,
                            }}
                        />
                        <Text style={{
                            color: '#555055',
                            fontSize: 16,
                            marginLeft: 10
                        }}>
                            Email
                        </Text>
                        <View style={{ flex: 1 }} />
                        <Icon
                            name='chevron-right'
                            style={{
                                fontSize: 22,
                                color: '#bcb8bc',
                            }}
                        />
                    </View>

                    <View
                        style={{
                            flexDirection: 'row',
                            backgroundColor: 'white',
                            height: 50,
                            alignItems: 'center',
                            paddingHorizontal: 10
                        }}
                    >
                        <Icon
                            name='sync'
                            style={{
                                fontSize: 25,
                            }}
                        />
                        <Text style={{
                            color: '#555055',
                            fontSize: 16,
                            marginLeft: 10
                        }}>
                            Sync
                        </Text>
                        <View style={{ flex: 1 }} />
                        <Icon
                            name='chevron-right'
                            style={{
                                fontSize: 22,
                                color: '#bcb8bc',
                            }}
                        />
                    </View>

                </View>

                <View>
                    <View
                        style={{
                            height: 50,
                            // backgroundColor: 'green',
                            justifyContent: 'flex-end'
                        }}
                    >
                        <Text style={{ fontSize: 15, padding: 10 }}>Account</Text>

                    </View>

                    <View
                        style={{
                            flexDirection: 'row',
                            backgroundColor: 'white',
                            height: 50,
                            alignItems: 'center',
                            paddingHorizontal: 10
                        }}
                    >
                        <Icon
                            name='phone'
                            style={{
                                fontSize: 25,
                            }}
                        />
                        <Text style={{
                            color: '#555055',
                            fontSize: 16,
                            marginLeft: 10
                        }}>
                            Phone number
                        </Text>
                        <View style={{ flex: 1 }} />
                        <Text style={{
                            color: '#bcb8bc',
                            fontSize: 16,
                            marginRight: 10
                        }}>
                            +84354551119
                        </Text>
                        <Icon
                            name='chevron-right'
                            style={{
                                fontSize: 22,
                                color: '#bcb8bc',
                            }}
                        />
                    </View>

                    <View
                        style={{
                            flexDirection: 'row',
                            backgroundColor: 'white',
                            height: 50,
                            alignItems: 'center',
                            paddingHorizontal: 10
                        }}
                    >
                        <Icon
                            name='envelope'
                            style={{
                                fontSize: 25,
                            }}
                        />
                        <Text style={{
                            color: '#555055',
                            fontSize: 16,
                            marginLeft: 10
                        }}>
                            Email
                        </Text>
                        <View style={{ flex: 1 }} />
                        <Icon
                            name='chevron-right'
                            style={{
                                fontSize: 22,
                                color: '#bcb8bc',
                            }}
                        />
                    </View>

                    <View
                        style={{
                            flexDirection: 'row',
                            backgroundColor: 'white',
                            height: 50,
                            alignItems: 'center',
                            paddingHorizontal: 10
                        }}
                    >
                        <Icon
                            name='sync'
                            style={{
                                fontSize: 25,
                            }}
                        />
                        <Text style={{
                            color: '#555055',
                            fontSize: 16,
                            marginLeft: 10
                        }}>
                            Sync
                        </Text>
                        <View style={{ flex: 1 }} />
                        <Icon
                            name='chevron-right'
                            style={{
                                fontSize: 22,
                                color: '#bcb8bc',
                            }}
                        />
                    </View>

                </View>

                <View>
                    <View
                        style={{
                            height: 50,
                            // backgroundColor: 'green',
                            justifyContent: 'flex-end'
                        }}
                    >
                        <Text style={{ fontSize: 15, padding: 10 }}>Account</Text>

                    </View>

                    <View
                        style={{
                            flexDirection: 'row',
                            backgroundColor: 'white',
                            height: 50,
                            alignItems: 'center',
                            paddingHorizontal: 10
                        }}
                    >
                        <Icon
                            name='phone'
                            style={{
                                fontSize: 25,
                            }}
                        />
                        <Text style={{
                            color: '#555055',
                            fontSize: 16,
                            marginLeft: 10
                        }}>
                            Phone number
                        </Text>
                        <View style={{ flex: 1 }} />
                        <Text style={{
                            color: '#bcb8bc',
                            fontSize: 16,
                            marginRight: 10
                        }}>
                            +84354551119
                        </Text>
                        <Icon
                            name='chevron-right'
                            style={{
                                fontSize: 22,
                                color: '#bcb8bc',
                            }}
                        />
                    </View>

                    <View
                        style={{
                            flexDirection: 'row',
                            backgroundColor: 'white',
                            height: 50,
                            alignItems: 'center',
                            paddingHorizontal: 10
                        }}
                    >
                        <Icon
                            name='envelope'
                            style={{
                                fontSize: 25,
                            }}
                        />
                        <Text style={{
                            color: '#555055',
                            fontSize: 16,
                            marginLeft: 10
                        }}>
                            Email
                        </Text>
                        <View style={{ flex: 1 }} />
                        <Icon
                            name='chevron-right'
                            style={{
                                fontSize: 22,
                                color: '#bcb8bc',
                            }}
                        />
                    </View>

                    <View
                        style={{
                            flexDirection: 'row',
                            backgroundColor: 'white',
                            height: 50,
                            alignItems: 'center',
                            paddingHorizontal: 10
                        }}
                    >
                        <Icon
                            name='sync'
                            style={{
                                fontSize: 25,
                            }}
                        />
                        <Text style={{
                            color: '#555055',
                            fontSize: 16,
                            marginLeft: 10
                        }}>
                            Sync
                        </Text>
                        <View style={{ flex: 1 }} />
                        <Icon
                            name='chevron-right'
                            style={{
                                fontSize: 22,
                                color: '#bcb8bc',
                            }}
                        />
                    </View>

                </View>


            </ScrollView>
            {/* <View style={{ height: 75 }}>
                <Footer
                    onPressHome={() => {
                        navigate('Welcome')
                    }}
                    onPressList={() => {
                        navigate('ClothesList')
                    }}
                    onPressGridList={() => {
                        navigate('ProductList')
                    }}
                    onPressSetting={() => {
                        navigate('Setting')
                    }}
                />
            </View> */}
        </View>
    )
}

export default Setting;