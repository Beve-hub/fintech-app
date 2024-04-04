import React, { useState, useEffect } from "react";
import { View, TouchableOpacity, FlatList, SafeAreaView,Image,Text, ScrollView, } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import { StatusBar } from "expo-status-bar";
import { FontAwesome6 } from '@expo/vector-icons';


const Investment = () => {
  return (
    <SafeAreaView
      style={{
        flex:1,
        flexDirection:'grid', alignItems:'center',justifyContent:'center',
        backgroundColor: "#010A43",
        width: wp("100%"),
        height: hp("150%"),   

      }}
    >
      <StatusBar style="light" />

     <View style={{margin:20, flexDirection:'grid', alignItems:'center',justifyContent:'center', gap:20, marginTop:70}}>
     <FontAwesome6 name="vault" size={100} color="white" />
     <Text style={{color:'#ededed50', fontSize:12}}>
        We are trying very hard to complete it as soon as possible, but you can always use our other cool features.
     </Text>
     </View>
     
    </SafeAreaView>
  )
}

export default Investment