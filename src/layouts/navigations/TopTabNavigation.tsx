import { StyleSheet, Text, View, ScrollView, Dimensions } from 'react-native'
import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
// import CustomTopTavNavigation from './CustomTopTavNavigation';
import Latte from '../screens/Latte';
import Cappuccino from '../screens/Cappuccino';
import Espresso from '../screens/Espresso';
const { width, height } = Dimensions.get('window');

const Tab = createMaterialTopTabNavigator();

// const CappuccinoScreen = () => (
//   <View style={styles.content}>
//     <Text>Cappuccino Screen</Text>
//   </View>
// );

// const LatteScreen = () => (
//   <View style={styles.content}>
//     <Text>Latte Screen</Text>
//   </View>
// );

// const EspressoScreen = () => (
//   <View style={styles.content}>
//     <Text>Espresso Screen</Text>
//   </View>
// );

// const MochaScreen = () => (
//   <View style={styles.content}>
//     <Text>Mocha Screen</Text>
//   </View>
// );

// const AmericanoScreen = () => (
//   <View style={styles.content}>
//     <Text>Americano Screen</Text>
//   </View>
// );

const TopTabNavigation = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        labelStyle: { fontSize: 14, fontWeight: 'bold' },
        tabStyle: { width: width * 0.333 },
        indicatorStyle: { backgroundColor: '#cc9900', padding: 24, borderRadius: 50, },
        activeBackgroundColor: 'purple',
      }}
    >
      <Tab.Screen name="Cappuccino" component={Cappuccino} />
      <Tab.Screen name="Latte" component={Latte} />
      <Tab.Screen name="Espresso" component={Espresso} />

    </Tab.Navigator>


  )
}

export default TopTabNavigation

const styles = StyleSheet.create({

  content: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 20,
    alignItems: 'center',
    // marginTop:20,
    // width:width*0.2,
    // color:'white',
    // backgroundColor:'black',
    // overflow:'visible',
  },
})