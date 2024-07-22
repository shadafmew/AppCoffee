import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign'
import Colors from '../styles/Colors';

const CappuccinoScreen = ({navigation}:any) => {
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <View style={styles.img}>
          <Image source={require('../../../assets/Images/ss.png')} style={styles.coffeemugImg} />
        </View>
        <View style={styles.coffeeDetails}>
          <Text style={styles.coffeeName}>Cappuccino</Text>
          <View style={{
            marginVertical: 14,
            width: 60,
            borderRadius: 50,
            height: 30,
            backgroundColor: '#eeeeee',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'row',
          }}>
            <Entypo name={'star'} color={'#996600'} size={20} />
            <Text style={{ color: '#996600', fontSize: 15, }}> 4.5</Text>
          </View>
          <View style={styles.volume}>
            <Text style={styles.vol}>Volume </Text>
            <Text style={styles.quantity}> 80 ml</Text>
          </View>
          <View style={styles.price}>
            <Text style={styles.rate}>$10.30</Text>
            <TouchableOpacity
            onPress={()=>navigation.navigate('ProductsScreen')}
              style={{
                padding: 6,
                borderRadius: 50,
                backgroundColor: Colors.white,
                marginRight: 20,
              }}
            >
              <AntDesign name={'plus'} size={28} color={'#996600'} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>

  )
}

export default CappuccinoScreen

const styles = StyleSheet.create({

  container: {
    flex: 1,
  },
  box: {
    width: 280,
    height: 320,
    backgroundColor: Colors.boxBg,
    borderRadius: 50,
    alignSelf: 'center',
    marginTop: 60,
  },
  img: {
    alignSelf: 'center',
    marginTop: -30,
  },
  coffeemugImg: {
    borderRadius: 100,
    width: 120,
    height: 110,
  },
  coffeeDetails: {
    marginTop: 10,
    marginLeft: 20,
  },
  coffeeName: {
    color: Colors.white,
    fontSize: 26,
    fontWeight: '700',
  },
  vol: {
    color: Colors.white,
    fontSize: 18,
    opacity: 0.8,
  },
  quantity: {
    color: Colors.white,
    fontSize: 19,
  },
  volume: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  price: {
    marginTop: 35,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  rate: {
    color: Colors.white,
    fontSize: 24,
    fontWeight: '600',
  },
})