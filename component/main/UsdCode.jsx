import { View, Text, TouchableOpacity,  SafeAreaView, Clipboard,Modal} from "react-native";
import React, { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Entypo } from '@expo/vector-icons';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { FontAwesome6 } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { MaterialIcons } from '@expo/vector-icons';
import DialPad from '../Data/DialPad';
import Loader from "../Data/Loader";


const UsdCode = ({navigation}) => {
    const [modal, setModal] = useState(false);
    const [amount, setAmount] = useState('');
    const [loading, setLoading] = useState(false);
    
  
    const AmountLength  = 10;
  
    const formatAmountWithCommas = (amount) => {
     
      return parseFloat(amount).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
    }
  
    const remove = (item) => {
      if (item === 'del') {
        setAmount(prevAmount => prevAmount.slice(0, -1));
      } else {
        setAmount(prevAmount => prevAmount + item);
      }
    }
  
    const handlePress = (item) => {
      if (item === 'del') {
        setAmount((prev) => prev.slice(0, -1));
      } else if (typeof item === 'number') {
        if (amount.length === AmountLength) return;
        setAmount((prev) => prev + item);
      }
      
    };


    const openModal = () => {
        setModal(true);
    }
  
    const closeModal = () => {
        setModal(false);
    }

  return (
    <SafeAreaView  style={{
        backgroundColor: "#010A43",
        width: wp("100%"),
        height: hp("150%"),   
      }}>
        <StatusBar style="light" />
         <View style={{
        marginHorizontal:20, marginVertical:40  }}>
          <View style={{ flexDirection:'row',alignItems:'center',justifyContent:'flex-start',gap:70, }}>
           <TouchableOpacity
           activeOpacity={0.7}
           onPress={() => navigation.navigate('TabGroup')}
           style={{ backgroundColor:"#426DDC50", width: wp(10), height: hp(5), flexDirection:'row',alignItems:'center',justifyContent:'center',borderRadius:20,}}
           >
          <Entypo name="chevron-small-left" size={24} color='#fff' />
          </TouchableOpacity>
          <Text style={{color:'#fff', fontSize:20, fontWeight:'bold'}}>Request Via USSD</Text>
          </View>
        </View>
  
       
        <View style={{marginVertical:20}}>
     
      
     <TouchableOpacity  style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
       <FontAwesome6 name="naira-sign" size={35} color="#fff" />
       <Text style={{color:'#fff', fontSize:40, fontWeight:'bold'}}>{amount.length === 0 ? '0.00' : formatAmountWithCommas(amount)}</Text>
     </TouchableOpacity>


     </View>


   <DialPad remove={remove}
    onPress={handlePress} />


     
        
      </SafeAreaView>
  )
}

export default UsdCode