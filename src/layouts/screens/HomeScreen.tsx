import * as React from 'react';
import { Text, View, StyleSheet, ImageBackground, Image, Dimensions, SafeAreaView, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Entypo from 'react-native-vector-icons/Entypo'
import Colors from '../styles/Colors';
import TopTabNavigation from '../navigations/TopTabNavigation';
const { width, height } = Dimensions.get('window');



const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <ImageBackground source={require('../../../assets/Images/coffeeBeans.jpeg')} style={styles.beansBg} imageStyle={{ opacity: 0.2 }}>
        <View style={styles.iconsContainer}>
          <FontAwesome5 name="user-circle" size={30} color={Colors.iconColor} />
          <View style={styles.locationIcon}>
            <Ionicons name="location-sharp" size={30} color={Colors.iconColor} />
            <Text style={styles.locationText}>
              New York, NYC
            </Text>
          </View>
          <FontAwesome name="bell-o" size={28} color={Colors.iconColor} />
        </View>
      </ImageBackground>


      {/* SEARCH BAR */}
      <View style={styles.searchBarContainer}>
        <TextInput placeholder='Search' style={styles.searchText} />
        <TouchableOpacity style={styles.magnifying}>
          <Entypo name='magnifying-glass' size={26} color={'white'} />
        </TouchableOpacity>
      </View>
      <TopTabNavigation />
      
    </View >
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  iconsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
  },
  beansBg: {
    height: 100,
    resizeMode: 'cover',
  },
  locationIcon: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  locationText: {
    fontWeight: '700',
    marginTop: 4,
    fontSize: 16,
    color: 'black',
  },

  searchBarContainer: {
    marginHorizontal: 20,
    borderColor:Colors.lightGray,
    borderWidth: 1,
    padding: 6,
    flexDirection: 'row',
    backgroundColor: Colors.lightishBlack,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom:20,
  },
  searchText: {
    padding: 6,
    fontSize: 16,
    color: Colors.gray,
    marginLeft: 4,
  },
  magnifying: {
    padding: 8,
    color: Colors.white,
    backgroundColor: Colors.iconColor,
    borderRadius: 20,
    marginRight: 4,
  },
});
