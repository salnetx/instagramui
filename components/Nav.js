import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, Linking } from 'react-native';
import tw from 'twrnc'
import { Ionicons } from '@expo/vector-icons'; // Make sure to install and import Ionicons or any other icon library you prefer

const Nav = ({navigation}) => {
  return (
    <View>

    <View style={[styles.navbar,tw`bg-[#FFF] pt-12`]}>
     
      <View style={styles.leftContainer}>
        {/* Logo */}
        <Text style={tw`text-2xl px-2 font-bold`}>salnetxyz</Text>
      </View>

      <View style={styles.rightContainer}>
        {/* Icons */}
        <TouchableOpacity onPress={()=>{Linking.openURL('https://instagram.com/rampurhatapp')}}>
              <Image
        source={require('../assets/plus.png')}
        style={{ width: 22, height: 22 }}
      />
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>{Linking.openURL('https://instagram.com/rampurhatapp')}} style={[styles.icon,tw`ml-4`]}>
          <Ionicons name="menu-outline" size={30} color="#000" />
        </TouchableOpacity>
      </View>

    </View>




    </View>
  );
};

const styles = StyleSheet.create({
  navbar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'white',
    paddingHorizontal: 12,
  },
  leftContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rightContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  }
});

export default Nav;