import React, {useState, useEffect} from 'react';
import {
    Text,
    View,
    Image,
    KeyboardAvoidingView,
    FlatList
} from 'react-native';
import {images, colors, icons} from '../../const'
import Icon from 'react-native-vector-icons/FontAwesome5';
import {Header} from '../index';
import UserUnit from './UserUnit';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
    auth, 
    firebaseDatabase, 
    createUserWithEmailAndPassword,
    firebaseDatabaseRef,
    firebaseSet,
    onAuthStateChanged,
    sendEmailVerification,
    child,
    get,
    onValue
} from '../../firebase/firebase';


const User = (props) => {
    const { navigation, route } = props //props của Login
    const { navigate, goBack } = navigation // function của navigation
    const [users, setUsers] = useState([])
    const [results, setResults] = useState('')
    const filteredUser = () => {
        return (
            users.filter((user) => {
                return user.name.toLocaleLowerCase().includes(results.toLocaleLowerCase())
            })
        )
    }
    useEffect(() => {
        onValue(firebaseDatabaseRef(firebaseDatabase, 'users'), async(snapshot) => {
            if(snapshot.exists()) {
                let snapshotObject = snapshot.val()
                let stringUser = await AsyncStorage.getItem('user')
                let myUserId = JSON.parse(stringUser).userId
                // debugger
                setUsers(Object.keys(snapshotObject)
                .filter(key => key != myUserId)
                .map((key) => {
                    let user = snapshotObject[key]
                    return{
                        url: 'https://randomuser.me/api/portraits/women/60.jpg',
                        userId: key,
                        name: user.email,
                        email: user.email,
                        accessToken: user.accessToken,
                        numberOfUnreadMessages: 1,
                        online: 1
                    }
                }))
            }
        })
    }, [])
    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={{
                flex: 1
            }}
        >
            <View style={{height: 60}}>                
                <Header
                    onSearch={(text) => {
                        setResults(text)
                    }}
                />
            </View>
            <View
                style={{
                    flex: 1,
                    // backgroundColor: 'green'
                }}
            >
                {filteredUser().length > 0 ? <FlatList
                    style={{
                        flex: 1,                        
                    }}
                    data={filteredUser()}
                    renderItem={({item, index}) => {
                        return (
                            <UserUnit
                                onPressUser={() => {
                                    navigate('Messenger', {userNavi: item})
                                }}
                                userprop={item}
                                key={index}
                            />
                        )
                    }}
                />:
                <View style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                    // backgroundColor: 'red'
                }}>
                    <Text style={{
                        color: 'black',
                        fontSize: 22,
                        fontWeight: '700'
                    }}>Xin lỗi, không có người dùng này</Text>
                </View>
                
                }
            </View>
            
        </KeyboardAvoidingView>
    )
}

export default User;