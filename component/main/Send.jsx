import {
  View, Text, TouchableOpacity, Image, SafeAreaView, FlatList,
  StyleSheet,  ScrollView, Dimensions, Modal, TouchableWithoutFeedback, Keyboard} from "react-native";
import React from 'react'
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { StatusBar } from "expo-status-bar";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome6 } from '@expo/vector-icons';



const transactionData = [
  {
    id: 1,
    image: require("../../assets/image/image_pro1.png"),
    name: "Onome Adetayo",
    amount: "200,000",
    status: 'success'
  },
  {
    id: 2,
    image: require("../../assets/image/image_pro2.png"),
    name: "Mercy Popoola",
    amount: "110,000",
    status: 'pending'
  },
  {
    id: 3,
    image: require("../../assets/image/image_pro3.png"),
    name: "Kingsley Abiodun",
    amount: "10,000",
    status: 'failed'
  },
  {
    id: 4,
    image: require("../../assets/image/image_pro4.png"),
    name: "Adeboye Usman",
    amount: "200,000",
    status: 'success'
  },
];


const Send = ({navigation}) => {
  return (
    <SafeAreaView
      style={{ backgroundColor: "#010A43",  width: wp("100%"),height: hp("150%")}}>
      <StatusBar style="light" />


      <View
        style={{
          flexDirection: "row",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 20,
          marginTop: 40,
          paddingHorizontal: 20,
        }} >
        <View
          style={{
            flexDirection: "row",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 10,
          }}
        >
          <TouchableOpacity activeOpacity={0.7} style={{marginTop:20}}>
           <FontAwesome6 name="chevron-left" size={24} color="#fff" />
          </TouchableOpacity>
                </View>
        
      </View>
   

  
    </SafeAreaView>
  )
}

export default Send