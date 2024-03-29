import {
    StyleSheet, 
    Text, 
    View, 
    Image, 
    ImageBackground,
    TouchableOpacity,
    TextInput,
    KeyboardAvoidingView,
    Keyboard
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {icons, images, colors} from '../const';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { isValidEmail, isValidPassword } from '../handlings/validation';
import {
    auth, 
    firebaseDatabase, 
    createUserWithEmailAndPassword,
    firebaseDatabaseRef,
    firebaseSet,
    onAuthStateChanged,
    sendEmailVerification,
    signInWithEmailAndPassword
} 
from '../firebase/firebase';


const Login = (props) => {
    const {navigation, route} = props //props của Login
    const {navigate, goBack} = navigation // function của navigation
    //state for keyboard on off
    const [keyboardIsShow, setkeyboardIsShow] = useState(false);
    //state for validation
    const [errorEmail, setErrorEmail] = useState('');
    const [errorPassword, setErrorPassword] = useState('');
    //state to store Email && password
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const isValidationOK = () => 
        email.length > 0 &&
        password.length > 0 &&
        isValidEmail(email) == true &&
        isValidPassword(password) == true
    
    useEffect(() => {
        Keyboard.addListener('keyboardDidShow', () => {
            setkeyboardIsShow(true)
        })
        Keyboard.addListener('keyboardDidHide', () => {
            setkeyboardIsShow(false)  
        })
    })

    // useEffect(() => {
    //     onAuthStateChanged(auth, (user) => {
    //         if(user) {
    //             //sign in
    //             const userId = user.uid;
    //             firebaseSet(firebaseDatabaseRef(
    //                 firebaseDatabase,
    //                 `users/${userId}`
    //             ), {
    //                 email: user.email,
    //                 emailVerified: user.emailVerified,
    //                 accessToken: user.accessToken,
    //             });
    //             navigate('UITab')
    //         }
    //     })
    // })
    return (
        <KeyboardAvoidingView 
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={{
                flex: 1
            }}>
            <TouchableOpacity
                onPress={() => {
                    navigate('Welcome')
                }}
                style={{
                    flex: 3,
                    height: 300
                }}
            >
                <View style={{
                    flex: 1,
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginHorizontal: 40,
                    height: 300
                }}>
                    <Text style={{
                        flex: 1,
                        fontSize: 28,
                        fontWeight: 'bold',
                        // marginLeft: 20
                    }}>Shop T1 Con</Text>
                    <Image 
                        source={icons.iconRn}
                        style={{
                            // tintColor: 'white',
                            flex: 1,
                            height: 150,
                            width: 150,
                        }}
                    />
                </View>
            </TouchableOpacity>
            <View style={{
                flex: 5,
                // backgroundColor: 'yellow'
            }}>
                <Text style={{
                    color: colors.primaryColor1,
                    fontSize: 18,
                    fontWeight: '500',
                    marginLeft: 42,
                    marginBottom: 10
                }}>Email, email or phone: </Text>
                <TextInput
                    onChangeText={(text) => {
                        // if(!isValidEmail(text)){
                        //     setErrorEmail('Không đúng định dạng email, vui lòng nhập lại')
                        // }else{
                        //     setErrorEmail('')
                        // }
                        setErrorEmail(isValidEmail(text) == true ? '' 
                        : `Email không dược để trống và phải đúng định ${'\n'}dạng theo yêu cầu`)
                        setEmail(text)
                    }} 
                    style={{
                        width: '80%',
                        height: 50,
                        borderWidth: 2,
                        borderColor: '#e5e5e5',
                        borderRadius: 10,
                        alignSelf: 'center',
                        paddingHorizontal: 14          
                    }}
                    placeholder = 'abc123@gmail.com'
                />
                <Text
                    style={{
                        color: 'red',
                        marginLeft: 42
                    }}
                >{errorEmail}</Text>
                <Text style={{
                    color: colors.primaryColor1,
                    fontSize: 18,
                    fontWeight: '500',
                    marginLeft: 42,
                    marginBottom: 10,
                    marginTop: 8
                }}>Password: </Text>
                <TextInput
                    onChangeText={(text) => {
                        setErrorPassword(isValidPassword(text) == true ? '' 
                        : `Mật khẩu không dược để trống và phải có nhiều ${'\n'}hơn 3 ký tự`)
                        setPassword(text)
                    }}
                    style={{
                        width: '80%',
                        height: 50,
                        borderWidth: 2,
                        borderColor: '#e5e5e5',
                        borderRadius: 10,
                        alignSelf: 'center',
                        paddingHorizontal: 14             
                    }}
                    placeholder = 'Enter your password'
                    secureTextEntry = {true}
                />
                <Text
                    style={{
                        color: 'red',
                        marginLeft: 42
                    }}
                >{errorPassword}</Text>
                <View style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginTop: 28
                }}>
                    <TouchableOpacity
                        disabled = {isValidationOK() == false}
                        onPress={() => {
                            signInWithEmailAndPassword(auth, email, password)
                            .then((userCredential) => {
                                const user = userCredential.user                                
                                navigate('UITab')
                            })
                            .catch((error) => {
                                alert(`Cannot signin, error: ${error.message}`)
                            })
                        }}
                        style={{
                            backgroundColor: isValidationOK() == true ? colors.primaryColor1 : 'grey',
                            width: '80%',
                            height: 50,
                            justifyContent: 'center',
                            alignItems: 'center',
                            borderRadius: 10,
                            marginBottom: 14
                        }}
                    >
                        <Text
                            style={{
                                color: 'white',
                                fontSize: 20,
                                fontWeight: 'bold'
                            }}
                        >Login</Text>
                    </TouchableOpacity>
                    <View
                        style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            marginTop: 10
                        }}
                    >
                        <TouchableOpacity 
                            onPress={() => {
                                navigate('Register')
                            }} 
                        >
                            <Text style={{
                                color: colors.primaryColor1,
                                fontSize: 16,
                                fontWeight: '500'
                            }}>Register now</Text>
                        </TouchableOpacity>
                        <View style={{flex: 0.5}}/>
                        <TouchableOpacity>
                            <Text style={{
                                color: colors.primaryColor1,
                                fontSize: 16
                            }}>Forget password?</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>

           {keyboardIsShow == false && <View style={{
                flex: 3,
                // backgroundColor: 'green'
                
            }}>
                <View style={{
                    height: 40,
                    flexDirection: 'row',
                    alignItems: 'center',
                    paddingHorizontal: 40
                }}>
                    <View style={{
                        flex: 1,
                        height: 1,
                        backgroundColor: 'black'
                    }}/>
                    <Text style={{
                        fontSize: 16,
                        paddingHorizontal: 14
                    }}>Other methods</Text>  
                    <View style={{
                        flex: 1,
                        height: 1,
                        backgroundColor: 'black'
                    }}/>
                </View>
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <Icon name='facebook' style={{
                        fontSize: 50,
                        color: '#087ae9',
                        paddingHorizontal: 5
                    }}
                    
                    />
                    <Icon name='google' style={{
                        fontSize: 50,
                        color: '#ea4335',
                        paddingHorizontal: 5
                    }}/>
                </View>
                
            </View>}
        </KeyboardAvoidingView>
    )    
}

export default Login