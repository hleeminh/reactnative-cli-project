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

const Register = (props) => {
    //state for keyboard on off
    const [keyboardIsShow, setkeyboardIsShow] = useState(false);
    useEffect(() => {
        Keyboard.addListener('keyboardDidShow', () => {
            setkeyboardIsShow(true)
        })
        Keyboard.addListener('keyboardDidHide', () => {
            setkeyboardIsShow(false)  
        })
    })
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
    
    
    return (
        <KeyboardAvoidingView 
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={{
                flex: 1,
                backgroundColor: colors.primaryColor1
            }}>
            <View style={{
                flex: 1.5,
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                marginHorizontal: 40,
            }}>
                <Text style={{
                    flex: 1,
                    fontSize: 28,
                    fontWeight: 'bold',
                    color: 'white'
                }}>React Native Register 123</Text>
                <Image 
                    source={icons.iconRn}
                    style={{
                        tintColor: 'white',
                        flex: 1,
                        height: 150,
                        width: 150,
                    }}
                />
            </View>
            <View style={{
                flex: 5,
                backgroundColor: 'white',
                borderRadius: 10,
                marginHorizontal: 20
            }}>
                <Text style={{
                    color: colors.primaryColor1,
                    fontSize: 18,
                    fontWeight: '500',
                    marginLeft: 42,
                    marginBottom: 10,
                    marginTop: 14
                }}>Email, username or phone: </Text>
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
                <Text style={{
                    color: colors.primaryColor1,
                    fontSize: 18,
                    fontWeight: '500',
                    marginLeft: 42,
                    marginBottom: 10,
                    marginTop: 8
                }}>Re-Password: </Text>
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
                    placeholder = 'Re-Enter your password'
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
                            alert(`Email = ${email} and password = ${password}`)
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
                        >Register</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{marginBottom: 6}}>
                        <Text style={{
                            color: colors.primaryColor1,
                            fontSize: 16
                        }}>New user? Register now</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style={{
                            color: colors.primaryColor1,
                            fontSize: 16
                        }}>Forget password?</Text>
                    </TouchableOpacity>
                </View>
            </View>

           {keyboardIsShow == false && <View style={{
                flex: 1.2,
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
                        backgroundColor: 'white'
                    }}/>
                    <Text style={{
                        fontSize: 16,
                        paddingHorizontal: 14,
                        color: 'white'
                    }}>Other methods</Text>  
                    <View style={{
                        flex: 1,
                        height: 1,
                        backgroundColor: 'white'
                    }}/>
                </View>
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <Icon name='facebook' style={{
                        fontSize: 50,
                        color: 'blue',
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

export default Register