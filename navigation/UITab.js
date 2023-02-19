import { View, Text } from 'react-native';
import React from 'react';

import { Setting, ClothesList, ProductList, Welcome, User } from '../screens';
import { createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { colors, icons, images } from '../const';
import Icon from 'react-native-vector-icons/FontAwesome5';

const Tab = createBottomTabNavigator()
const screenOptionsFunc = ({ route }) => ({   
    headerShown: false,
    tabBarActiveTintColor: colors.primaryColor2,
    tabBarInactiveTintColor: colors.inactiveColor,
    tabBarIcon: ({ focused, color, size }) => {
        return (
            <Icon
                name={route.name == 'ClothesList' ? 'list' :
                    (route.name == 'ProductList' ? 'th-large' : (
                        route.name == 'Setting' ? 'cog' : (
                            route.name == 'Chat' ? 'comment-dots' : (
                                route.name == 'Welcome' ? 'home' : ''
                            )
                        )
                    ))}
                style={{
                    fontSize: 25,
                    color: focused ? colors.primaryColor2 : colors.inactiveColor
                }}
            />
        )
    }
})

const UITab = (props) => {
    return (
        <Tab.Navigator
            initialRouteName='Chat'
            screenOptions={screenOptionsFunc}
        >
            <Tab.Screen name='Welcome' component={Welcome}
                options={{
                    tabBarLabel: 'Home',
                    tabBarLabelStyle: {
                        fontSize: 14
                    }
                }}
            />
            <Tab.Screen name='ClothesList' component={ClothesList}
                options={{
                    tabBarLabel: 'List',
                    tabBarLabelStyle: {
                        fontSize: 14
                    }
                }}

            />
            <Tab.Screen name='ProductList' component={ProductList}
                options={{
                    tabBarLabel: 'GridList',
                    tabBarLabelStyle: {
                        fontSize: 14
                    }
                }}
            />
            <Tab.Screen name='Chat' component={User}
                options={{
                    tabBarLabel: 'Chat',
                    tabBarLabelStyle: {
                        fontSize: 14
                    }
                }}
            />
            <Tab.Screen name='Setting' component={Setting}
                options={{
                    tabBarLabel: 'Settings',
                    tabBarLabelStyle: {
                        fontSize: 14
                    },

                }}
            />            
        </Tab.Navigator>
    )
}

export default UITab