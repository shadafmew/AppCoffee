import { StyleSheet, Text, View, ImageBackground, SafeAreaView, TouchableOpacity, Dimensions, Image, ScrollView } from 'react-native'
import React from 'react'
import { useState } from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign'
import Entypo from 'react-native-vector-icons/Entypo';
import Colors from '../styles/Colors';
import Ionicons from 'react-native-vector-icons/Ionicons'

const { width, height } = Dimensions.get('window');

const ProductsScreen = ({ navigation }: any) => {
    const [isFavourite, setFavourite] = useState(false);
    const [size, setSize] = useState('small');

    return (
        <View style={styles.container}>
            <ScrollView>
                <View style={{ borderBottomLeftRadius: 40, borderBottomRightRadius: 40, overflow: 'hidden' }}>
                    <ImageBackground source={require('../../../assets/Images/coffee-background-3.jpeg')} style={styles.imageBackground}>

                        <SafeAreaView>
                            <View style={styles.head}>
                                <TouchableOpacity onPress={() => navigation.goBack()} style={styles.leftArrow}>
                                    <AntDesign name='left' size={30} color='white' />
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => setFavourite(!isFavourite)}>
                                    <AntDesign name='heart' size={30} color={isFavourite ? 'red' : 'white'} />
                                </TouchableOpacity>
                            </View>
                        </SafeAreaView>
                    </ImageBackground>
                </View>
                <View
                    style={styles.shadowContainer}>
                    <Image source={require('../../../assets/Images/ss.png')} style={styles.coffeemugImg} />
                </View>
                <View style={{
                    marginHorizontal: 10,
                    marginVertical: 14,
                    width: 60,
                    borderRadius: 50,
                    height: 30,
                    backgroundColor: Colors.boxBg,
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexDirection: 'row',
                }}>
                    <Entypo name={'star'} color={Colors.white} size={20} />
                    <Text style={{ color: Colors.white, fontSize: 15, }}> 4.5</Text>
                </View>

                <View style={styles.coffeeDetails}>
                    <Text style={styles.coffeeName}>Cappuccino</Text>
                    <Text style={styles.coffeePrice}>$ 15.50</Text>
                </View>

                <View style={{ marginHorizontal: 20, }}>
                    <Text style={{ color: Colors.black, fontSize: 16, fontWeight: '500' }}>Coffee Size</Text>
                    <View style={styles.quantity}>

                        <TouchableOpacity
                            onPress={() => setSize('small')}
                            style={[
                                styles.sizeButton,
                                size === 'small' && { backgroundColor: Colors.boxBg, borderColor: Colors.boxBg },
                            ]}
                        >
                            <Text style={[styles.sizeButtonText, size === 'small' && { color: Colors.white }]}>Small</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            onPress={() => setSize('medium')}
                            style={[
                                styles.sizeButton,
                                size === 'medium' && { backgroundColor: Colors.boxBg, borderColor: Colors.boxBg },
                            ]}
                        >
                            <Text style={[styles.sizeButtonText, size === 'medium' && { color: Colors.white }]}>Medium</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            onPress={() => setSize('large')}
                            style={[
                                styles.sizeButton,
                                size === 'large' && { backgroundColor: Colors.boxBg, borderColor: Colors.boxBg },
                            ]}
                        >
                            <Text style={[styles.sizeButtonText, size === 'large' && { color: Colors.white }]}>Large</Text>
                        </TouchableOpacity>

                    </View>

                    <View>
                        <Text style={{ color: Colors.black, fontSize: 16, fontWeight: '500' }}>About</Text>
                        <Text style={styles.desc}>
                            A cappuccino is a popular coffee drink made from espresso, steamed milk, and milk foam.
                            A second layer of steamed milk is added on top, followed by a thick and airy layer of foam to lend the drink a luxurious velvety texture. A cappuccino boasts a much stronger espresso flavor than a latte due to having less milk and more foam than a latte.
                        </Text>
                    </View>
                </View>

                <View style={styles.coffeeQuantity}>
                    <View style={styles.volume}>
                        <Text style={styles.vol}>Volume</Text>
                        <Text style={styles.ml}> 80ml</Text>
                    </View>

                    <View style={styles.bttns}>
                        <TouchableOpacity
                            style={{ marginLeft: 4, }}>
                            <AntDesign name='minus' size={18} color={Colors.black} />
                        </TouchableOpacity>
                        <Text style={{ fontSize: 18, color: Colors.black, fontWeight: '600' }}>2</Text>
                        <TouchableOpacity
                            style={{ marginRight: 4, }}>
                            <AntDesign name='plus' size={18} color={Colors.black} />
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={styles.buyContainer}>
                    <TouchableOpacity style={styles.circle}>
                        <Ionicons name='bag-outline' size={35} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buyNowbttn}>
                        <Text style={{ color: Colors.white, fontWeight: '800', fontSize: 18 }}>Buy Now</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    )
}

export default ProductsScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginBottom: 20,
    },
    imageBackground: {
        width: width * 1,
        height: height * 0.35,
    },
    head: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
    },
    leftArrow: {
        backgroundColor: Colors.boxBg,
        padding: 5,
        borderRadius: 5,
    },
    coffeemugImg: {
        borderRadius: width,
        width: width * 0.70,
        alignSelf: 'center',
        height: height * 0.38,
    },
    shadowContainer: {
        elevation: 8,
        marginTop: height * -0.2,
    },
    coffeeDetails: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginHorizontal: 20,
        marginVertical: 10,
    },
    coffeeName: {
        fontSize: 24,
        fontWeight: '600',
        color: Colors.black,

    },
    coffeePrice: {
        color: Colors.black,
        fontWeight: '600',
        fontSize: 18,
    },
    quantity: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 10,
    },
    sizeButton: {
        backgroundColor: Colors.lightishBlack,
        borderRadius: 50,
        paddingHorizontal: 20,
        paddingVertical: 10,
    },
    sizeButtonText: {
        fontSize: 16,
        fontWeight: '500',
        color: Colors.black,
    },
    desc: {
        marginVertical: 6,
        color: Colors.gray,
    },
    coffeeQuantity: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 20,
        marginHorizontal: 20,
    },
    volume: {
        flexDirection: 'row',
        alignItems: 'center',

    },
    vol: {
        color: Colors.black,
        fontSize: 16,
    },
    ml: {
        color: Colors.black,
        fontWeight: '600',
        fontSize: 18,
    },
    bttns: {
        flexDirection: 'row',
        alignItems: 'center',
        borderColor: Colors.gray,
        borderWidth: 1,
        width: 70,
        paddingVertical: 4,

        // paddingHorizontal:15,
        justifyContent: 'space-between',
        borderRadius: 50,
    },
    buyContainer: {
        marginHorizontal: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    circle: {
        borderColor: Colors.gray,
        borderWidth: 1,
        padding: 10,
        borderRadius: 50,
    },
    buyNowbttn: {
        color: Colors.white,
        backgroundColor: Colors.boxBg,
        width: width * 0.7,
        paddingVertical: 14,
        borderRadius: 50,
        alignItems: 'center',
    },
})