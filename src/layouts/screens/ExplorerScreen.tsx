import { StyleSheet, Text, View } from 'react-native'
import React from 'react';
import Feather from 'react-native-vector-icons/Feather'
import { Colors } from 'react-native/Libraries/NewAppScreen';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import BottomTabNavigation from '../navigations/BottomTabNavigation';
const ExplorerScreen = () => {
    return (
        <View style={styles.container}>

            <View style={styles.header}>
                <Feather name='align-left' size={35} color={Colors.white} />
                <View style={styles.userDetails}>
                    <Text style={styles.userName}>Howdy Yusuf Khan !!</Text>
                    <View style={styles.addressSection}>
                        <Entypo name='location-pin' color={Colors.white} size={20} />
                        <Text style={styles.address}> Bapu Nagar, Ratlam</Text>
                    </View>
                </View>
                <View>
                    <MaterialIcons name='checklist' size={25} color={Colors.white} />
                    <Text style={[styles.textWhite, styles.fontsize]}>Refine</Text>
                </View>
            </View>
            <View>
            </View>
        </View>
    )
}

export default ExplorerScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        flexDirection: 'row',
        backgroundColor: "#132743",
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
    },
    userDetails: {

    },
    userName: {
        color: Colors.white,
        fontSize: 20,
        fontWeight: '600',
    },
    addressSection: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    address: {
        color: Colors.white,
        fontSize: 16,
    },
    textWhite: {
        color: Colors.white,
    },
    fontsize: {
        fontSize: 16,
    },
})