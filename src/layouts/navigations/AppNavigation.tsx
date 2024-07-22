import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import Cappuccino from '../screens/Cappuccino';
import Latte from '../screens/Latte';
import BottomTabNavigation from './BottomTabNavigation';
import ProductsScreen from '../screens/ProductsScreen';
import ExplorerScreen from '../screens/ExplorerScreen';

const Stack = createNativeStackNavigator();

const AppNavigation = () => {
    return (
        <Stack.Navigator
            initialRouteName="Parent"
            screenOptions={{ headerShown: false }}
        >
            <Stack.Screen name="HomeScreen" component={HomeScreen} />
            <Stack.Screen name="Cappuccino" component={Cappuccino} />
            <Stack.Screen name="Latte" component={Latte} />
            <Stack.Screen name="BottomTabNavigation" component={BottomTabNavigation} />
            <Stack.Screen name="ProductsScreen" component={ProductsScreen} />
            <Stack.Screen name="ExplorerScreen" component={ExplorerScreen} />

        </Stack.Navigator>
    );
};

export default AppNavigation;
