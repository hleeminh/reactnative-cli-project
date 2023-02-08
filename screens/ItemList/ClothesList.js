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
    FlatList
} from 'react-native';
import React, { useState, useEffect } from 'react';
import { icons, images, colors } from '../../const';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { isValidEmail, isValidPassword } from '../../handlings/validation';
import Header from './Header';
import ClothesUnit from './ClothesUnit';
import Footer from './Footer';
import RowList from './RowList';


const ClothesList = (props) => {
    const [keyboardShow, setkeyboardShow] = useState(false);
    useEffect(() => {
        Keyboard.addListener('keyboardDidShow', () => {
            setkeyboardShow(true)
        })
        Keyboard.addListener('keyboardDidHide', () => {
            setkeyboardShow(false)  
        })
    })

    const [clothes, setClothes] = useState([
        {
            id: 1,
            url: 'https://cdn2.yame.vn/pimg/ao-khoac-hoodie-zipper-than-co-ai-athena-ver1-0021591/a6c4598e-eac4-ac00-cff8-0019d0c114e3.jpg',
            name: 'Áo hoodies',
            price: 250000,
            status: 'Còn hàng',
            heart: 4.1
        },
        {
            id: 2,
            url: 'https://cdn2.yame.vn/pimg/ao-so-mi-tay-dai-soi-cotton-toi-gian-m24-0021772/8276b989-bffc-a100-3eec-0019c5b8a008.jpg',
            name: 'Áo sơ mi nam',
            price: 100000,
            status: 'Còn hàng',
            heart: 4.2
        },
        {
            id: 3,
            url: 'https://cdn2.yame.vn/pimg/quan-jean-slimfit-on-gian-b43-0021623/be94499b-b1df-5001-7d32-00197e3ad2db.jpg',
            name: 'Quần jean nam',
            price: 300000,
            status: 'Tạm hết hàng',
            heart: 4.3
        },
        {
            id: 4,
            url: 'https://cdn2.yame.vn/pimg/quan-short-the-thao-y-nguyen-ban-ver53-0021795/a2e93b0e-6104-5a01-4478-0019c5c0278c.jpg',
            name: 'Quần short nam',
            price: 350000,
            status: 'Còn hàng',
            heart: 4.4
        },
        {
            id: 5,
            url: 'https://cdn2.yame.vn/pimg/pktt-non-y-nguyen-ban-ver12-0021818/a35d7e6d-a3f1-3f01-1892-0019c0442aeb.jpg',
            name: 'Mũ lưỡi trai',
            price: 550000,
            status: 'Tạm hết hàng',
            heart: 4.5
        },
        {
            id: 6,
            url: 'https://cdn2.yame.vn/pimg/pktt-non-y-nguyen-ban-ver12-0021818/a35d7e6d-a3f1-3f01-1892-0019c0442aeb.jpg',
            name: 'Mũ lưỡi trai',
            price: 550000,
            status: 'Tạm hết hàng',
            heart: 4.5
        },
        {
            id: 7,
            url: 'https://cdn2.yame.vn/pimg/pktt-non-y-nguyen-ban-ver12-0021818/a35d7e6d-a3f1-3f01-1892-0019c0442aeb.jpg',
            name: 'Mũ lưỡi trai',
            price: 550000,
            status: 'Tạm hết hàng',
            heart: 4.5
        },
        {
            id: 8,
            url: 'https://cdn2.yame.vn/pimg/pktt-non-y-nguyen-ban-ver12-0021818/a35d7e6d-a3f1-3f01-1892-0019c0442aeb.jpg',
            name: 'Mũ lưỡi trai',
            price: 550000,
            status: 'Tạm hết hàng',
            heart: 4.5
        },
        {
            id: 9,
            url: 'https://cdn2.yame.vn/pimg/pktt-non-y-nguyen-ban-ver12-0021818/a35d7e6d-a3f1-3f01-1892-0019c0442aeb.jpg',
            name: 'Mũ lưỡi trai',
            price: 550000,
            status: 'Tạm hết hàng',
            heart: 4.5
        },
    ])

    const [categories, setCategories] = useState([
        {
            id: 1,
            name: 'Áo khoác',
            url: 'https://i0.wp.com/salt.tikicdn.com/cache/w300/ts/product/20/e4/66/5a69a7d5cc88232ca5d3309a3cc9b057.jpg'
        },
        {
            id: 2,
            name: 'Áo thun',
            url: 'https://i0.wp.com/salt.tikicdn.com/cache/w300/ts/product/7b/c9/bd/d8e7c6dc8b831e75f13cda3ab50210b8.jpg'
        },
        {
            id: 3,
            name: 'Quần lửng',
            url: 'https://i0.wp.com/salt.tikicdn.com/cache/w300/ts/product/f8/70/16/4b2dfe80a14a13d4da7e513702354963.png'
        },
        {
            id: 4,
            name: 'Áo sơ mi',
            url: 'https://i0.wp.com/salt.tikicdn.com/cache/w300/ts/product/c8/1b/23/dc52846eb1f3b8e670448ae62389cd66.jpg'
        },
        {
            id: 5,
            name: 'Áo hoodies',
            url: 'https://i0.wp.com/salt.tikicdn.com/cache/w300/ts/product/b5/0b/00/421db5d3db29ecd2e6bbcd5cd7a57dd6.jpg'
        },
        {
            id: 6,
            name: 'Quần dài',
            url: 'https://i0.wp.com/salt.tikicdn.com/cache/w300/ts/product/5c/e7/d4/6286bf303c0cf447f589bcc104938f5a.jpg'
        },
        {
            id: 7,
            name: 'Áo ba lỗ',
            url: 'https://i0.wp.com/salt.tikicdn.com/cache/w300/ts/product/22/a5/14/7febe82c3f197061c941c2069ce1df61.jpg'
        },
        {
            id: 8,
            name: 'Áo ba lỗ',
            url: 'https://i0.wp.com/salt.tikicdn.com/cache/w300/ts/product/22/a5/14/7febe82c3f197061c941c2069ce1df61.jpg'
        },
        {
            id: 9,
            name: 'Áo ba lỗ',
            url: 'https://i0.wp.com/salt.tikicdn.com/cache/w300/ts/product/22/a5/14/7febe82c3f197061c941c2069ce1df61.jpg'
        },
        {
            id: 10,
            name: 'Áo ba lỗ',
            url: 'https://i0.wp.com/salt.tikicdn.com/cache/w300/ts/product/22/a5/14/7febe82c3f197061c941c2069ce1df61.jpg'
        },
    ])

    const [results, setResults] = useState('');

    const filteredClothe = () => {
        return (
            clothes.filter((clothe) => {
                return clothe.name.toLocaleLowerCase().includes(results.toLocaleLowerCase())
            })
        )
    }
    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={{
                flex: 1,
            }}
        >
            <View style={{ flex: 1 }}>
                <View style={{height: 60}}>
                    <Header
                        onSearch={(text) => {
                            setResults(text)
                        }}
                    />
                </View>
                <View style={{
                    height: 2,
                    backgroundColor: '#dfe3ec'

                }}></View>
                {/* RowList */}
                <View style={{height: 100}}>
                    <FlatList
                        horizontal={true}
                        data={categories}
                        renderItem={({ item }) => {
                            return (
                                <RowList
                                    onPressCategory={() => {
                                        alert(`${item.id}.${item.name}`)
                                    }}
                                    categoryprop={item}
                                />
                            )
                        }}
                        keyExtractor={category => category.id}
                    />
                </View>
                <View style={{ flex: 1, backgroundColor: '#e5e5e5' }}>
                    {/* <ScrollView>
                        {clothes.map((clothe, index) => {
                            return (
                                <ClothesUnit
                                    onPressClothe = {() => {
                                        alert(`${index+1} ${clothe.name}`)
                                    }}
                                    key = {index}
                                    clotheprop = {clothe}
                                />
                            )
                        })}
                    </ScrollView> */}
                    {
                        filteredClothe().length > 0 ?
                            <FlatList
                                style={{
                                    flex: 1,
                                }}
                                data={filteredClothe()}
                                renderItem={({ item }) => {
                                    return (
                                        <ClothesUnit
                                            onPressClothe={() => {
                                                alert(`${item.id}.${item.name}`)
                                            }}
                                            clotheprop={item}
                                        />
                                    )
                                }}
                                keyExtractor={clothe => clothe.id}
                            /> :
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

                                }}>Xin lỗi, hiện tại không có mặt hàng này</Text>
                            </View>
                    }

                </View>
                {keyboardShow == false && <View style={{height: 75 }}>
                    <Footer />
                </View>}
            </View>
        </KeyboardAvoidingView>
    )
}

export default ClothesList;