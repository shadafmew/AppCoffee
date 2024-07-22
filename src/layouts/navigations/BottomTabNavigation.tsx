import { StyleSheet, Text, View,Dimensions } from 'react-native'
import React from 'react'
import HomeScreen from '../screens/HomeScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Latte from '../screens/Latte';
import Cappuccino from '../screens/Cappuccino';
import Espresso from '../screens/Espresso';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

const { width, height } = Dimensions.get('window');

const Tab = createBottomTabNavigator();
const BottomTabNavigation = () => {
    return (
        <Tab.Navigator screenOptions={({ route }) => ({
            headerShown: false,
            tabBarShowLabel: false,
            tabBarIcon: ({ focused, color, size }) => menuIcons(route, focused),
            tabBarStyle: {
                marginBottom: 20,
                marginHorizontal:16,
                borderRadius: 50,
                backgroundColor: '#996600',
                height:height*0.1,
                // paddingVertical: 10, 
            },
        
        })}>
            <Tab.Screen name="HomeScreen" component={HomeScreen} />
            <Tab.Screen name="favourite" component={HomeScreen} />
            <Tab.Screen name="cart" component={HomeScreen} />
        </Tab.Navigator>
    )
}




const menuIcons = (route, focused:any) => {
    let icon;

    if (route.name == 'HomeScreen') {
        icon = focused ? (
            <Entypo name="home" color={'#996600'} size={30} />
        ) : (
            <MaterialCommunityIcons name="home-outline" color={'white'} size={38} />
        );
    } else if (route.name == 'favourite') {
        icon = focused ? (
            <Entypo name="heart" color={'#996600'} size={30} />
        ) : (
            <Entypo name="heart-outlined" color={'white'} size={35} />
        );
    } else if (route.name == 'cart') {
        icon = focused ? (
            <Ionicons name="cart" color={'#996600'} size={30} />
        ) : (
            <Ionicons name="cart-outline" color={'white'} size={35} />
        );
    }

    const buttonClass = focused ? { backgroundColor: 'white' } : {backgroundColor: ''};

    return (
        <View style={[styles.icons, buttonClass]}>
            {icon}
        </View>
    );
};

const styles = StyleSheet.create({
    icons: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent:'center',
        borderRadius: 80,
        padding: 6,
        backgroundColor: 'white',
    },
    iconText: {
        backgroundColor: 'white',
    },
});

export default BottomTabNavigation;