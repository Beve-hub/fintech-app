import { View, Text, TouchableOpacity,  SafeAreaView, Clipboard} from "react-native";
import React, { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { Entypo } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import AsyncStorage from "@react-native-async-storage/async-storage";

import { widthPercentageToDP as wp,  heightPercentageToDP as hp,} from "react-native-responsive-screen";

const Request = ({navigation}) => {
  const [userDetails, setUserDetails] = useState(null);

  const copyToClipboard = () => {
    const codeToCopy = JSON.stringify(userDetails?.userName + ' 99112345890');
    Clipboard.setString(codeToCopy);
      alert('Code copied to clipboard!');
  };

  useEffect(() => {
    getUserDetails();
  }, []);

  const getUserDetails = async () => {
    try {
      const userData = await AsyncStorage.getItem("user");
      if (userData) {
        setUserDetails(JSON.parse(userData));
      }
    } catch (error) {
      console.error("Error getting user details:", error);
    }
  };

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
        <Text style={{color:'#fff', fontSize:20, fontWeight:'bold'}}>Request Fund</Text>
        </View>
      </View>

      <View style={{  backgroundColor: "#212A6B",padding:10, marginVertical:10, borderRadius:10, margin:20 }}>    
          <View style={{  flexDirection:'row',alignItems:'center',justifyContent:'flex-start',gap:20 }}>
            <View style={{  backgroundColor: '#fff', width: wp(10), height: hp(5), flexDirection:'row',alignItems:'center',justifyContent:'center',borderRadius:20, }}>
              <MaterialCommunityIcons name="bank-outline" size={22} color="black" />
              </View>
          <Text style={{ color:'white',fontSize:16,  }}>Via Bank Transfer</Text>
         </View> 
          <View style={{borderTopColor:"#010A43",borderTopWidth: 1,paddingVertical:5,marginTop:20}}>
          <Text style={{ color:'#D9D9D9',fontSize:12,padding:10  }}>Moon Bank Account Number</Text>

          <View style={{  flexDirection:'grid',alignItems:'center',justifyContent:'center',}}>
          <Text style={{ color:'white',fontSize:20, fontWeight:'bold' }}>{userDetails?.userName}</Text>
          <View style={{  flexDirection:'row',alignItems:'center',justifyContent:'center',gap:20, paddingVertical:10, }}>
            
            <Text style={{ color:'white',fontSize:20, fontWeight:'bold' }}>99112345890</Text>
            <TouchableOpacity
            activeOpacity={0.7}
            onPress={copyToClipboard}
            style={{width: wp(10), height: hp(5), flexDirection:'row',alignItems:'center',justifyContent:'center',borderRadius:20,}}>
            <MaterialCommunityIcons name="content-copy" size={20} color="white" />
            </TouchableOpacity>
            
         </View> 
          </View>
         
         </View>      
              
      </View>


      <View style={{ gap:20 , marginTop:30,  marginHorizontal:20 }}>    


          <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => navigation.navigate('UsdCode')}
           style={{padding:15,  backgroundColor: "#212A6B", flexDirection:'row',alignItems:'center',justifyContent:'space-between',gap:20 ,borderRadius:10,}}>
          <View style={{  flexDirection:'row',alignItems:'center',justifyContent:'flex-start',gap:20 }}>
          <View style={{  backgroundColor: '#fff', width: wp(10), height: hp(5), flexDirection:'row',alignItems:'center',justifyContent:'center',borderRadius:20, }}>
          <MaterialIcons name="numbers" size={20} color="black" />
          </View>
            
            <Text style={{ color:'white',fontSize:16,  }}>Via USSD</Text>
         </View> 
         <MaterialCommunityIcons name="chevron-right" size={24} color="white" />
         </TouchableOpacity>

       
         <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => navigation.navigate('CardTransfer')}
           style={{padding:15, backgroundColor: "#212A6B",  flexDirection:'row',alignItems:'center',justifyContent:'space-between',gap:20 ,borderRadius:10,}}>
          <View style={{  flexDirection:'row',alignItems:'center',justifyContent:'flex-start',gap:20 }}>
          <View style={{  backgroundColor: '#fff', width: wp(10), height: hp(5), flexDirection:'row',alignItems:'center',justifyContent:'center',borderRadius:20, }}>
           <Ionicons name="card-outline" size={20} color="black" />
           </View>
           
            <Text style={{ color:'white',fontSize:16,  }}>Debit/Credit Card</Text>
         </View> 
         <MaterialCommunityIcons name="chevron-right" size={24} color="white" />
         </TouchableOpacity>

         <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => navigation.navigate('CardTransfer')}
           style={{padding:15, backgroundColor: "#212A6B",  flexDirection:'row',alignItems:'center',justifyContent:'space-between',gap:20 ,borderRadius:10,}}>
          <View style={{  flexDirection:'row',alignItems:'center',justifyContent:'flex-start',gap:20 }}>
          <View style={{  backgroundColor: '#fff', width: wp(10), height: hp(5), flexDirection:'row',alignItems:'center',justifyContent:'center',borderRadius:20, }}>
          <MaterialCommunityIcons name="send" size={20} color="black" />
           </View>
           
            <Text style={{ color:'white',fontSize:16,  }}>Request Funds</Text>
         </View> 
         <MaterialCommunityIcons name="chevron-right" size={24} color="white" />
         </TouchableOpacity>
         
              
      </View>
    </SafeAreaView>
  )
}

export default Request