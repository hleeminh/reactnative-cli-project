import React, { useState, useEffect } from 'react';
import {
    Text,
    View,
    Image,
    KeyboardAvoidingView,
    FlatList,
    TouchableOpacity
} from 'react-native';
import { images, colors, icons } from '../../const'
import Icon from 'react-native-vector-icons/FontAwesome5';
import MessHeader from './MessHeader';
import MessFooter from './MessFooter';
import MessUnit from './MessUnit';
import {
    auth, 
    firebaseDatabase, 
    createUserWithEmailAndPassword,
    firebaseDatabaseRef,
    firebaseSet,
    onAuthStateChanged,
    sendEmailVerification,
    onValue
} from '../../firebase/firebase';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Messenger = (props) => {
    const { navigate, goBack } = props.navigation
    const [messages, setMessages] = useState([])

    useEffect(() => {
        onValue(firebaseDatabaseRef(firebaseDatabase, 'chats'), async(snapshot) => {
            if(snapshot.exists()) {
                let snapshotObject = snapshot.val()
                let stringUser = await AsyncStorage.getItem('user')
                let myUserId = JSON.parse(stringUser).userId

                setMessages(Object.keys(snapshotObject)
                .filter(item => item.includes(myUserId))
                .map(key => {
                    let chatObject = snapshotObject[key]
                    return {
                        ...chatObject,
                        isSender: key.split('-')[0] == myUserId,
                    }
                })
                .sort((item1, item2) => item1.timeStamp - item2.timeStamp)
                )
            }
        })
    })

    const [inputMessages, setInputMessages] = useState('')
    const { url, userId, name } = props.route.params.userNavi



    return (
        <View
            style={{
                flex: 1,
                backgroundColor: 'white'
            }}
        >
            <View style={{ height: 70, }}>
                <MessHeader
                    onPressBack={() => {
                        goBack()
                    }}
                    nameUser={name}
                    avatarUser={url}
                />
            </View>

            <View style={{ height: 2, backgroundColor: colors.inactiveColor, opacity: 0.2 }} />

            <View
                style={{
                    flex: 1,
                }}
            >
                
                <FlatList               
                    data={messages}
                    renderItem={({ item, index }) => {
                        return (
                            <MessUnit
                                onPressMessage={() => {
                                    alert(`${item.timeStamp}`)
                                }}
                                messprop={item}
                                key={index}
                            />
                        )
                    }}
                />
            </View>

            <View style={{ height: 60, }}>
                <MessFooter 
                    onEnterText={(text) => {
                        setInputMessages(text)
                    }}
                    onPressSend={async() => {
                        if(inputMessages.trim().length == 0) {
                            return
                        }
                        let newMessagerObject = {
                            url: 'https://randomuser.me/api/portraits/men/1.jpg',
                            showUrl: false,
                            chatHis: inputMessages,
                            timeStamp: (new Date()).getTime(),
                        }
                        let stringUser = await AsyncStorage.getItem('user')
                        let myUserId = JSON.parse(stringUser).userId
                        let myFriendUserId = props.route.params.userNavi.userId

                        firebaseSet(firebaseDatabaseRef(
                            firebaseDatabase,
                            `chats/${myUserId} - ${myFriendUserId}`
                        ), newMessagerObject).then(() => {
                            setInputMessages('')
                        })
                        
                    }}
                    value={inputMessages}
                />
            </View>
        </View>
    )
}
export default Messenger