import React, { useRef, useState, useEffect } from 'react';
import { View, TouchableOpacity, Text, Image } from 'react-native';
import ViewShot from 'react-native-view-shot';
import { StatusBar } from "expo-status-bar";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { FontAwesome6, Entypo } from "@expo/vector-icons";

const Receipt = ({ route, navigation, item }) => {
  const [userDetails, setUserDetails] = useState(null);

  const { amount,  selectedItem } = route.params || {};

  const viewShotRef = useRef(null);


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

 const formatDateTime = () => {
  const currentDate = new Date();
  const date = currentDate.toLocaleDateString('en-US');
  const time = currentDate.toLocaleTimeString('en-US');
  return `${date} ${time}`;
 }
 const formatAmount = (amount) => {
  return parseFloat(amount).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
};
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: "#010A43" }}>

      <ViewShot ref={viewShotRef} options={{ format: 'png', quality: 1 }} >
        <StatusBar style="light" />

        <View style={{ flexDirection: 'row', display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: wp(85),paddingVertical:10, }}>
          <Text style={{ color: 'white',fontSize:16, fontWeight:'bold' }}>Transaction Receipt</Text>
          <Image source={require('../../assets/image/logo3.png')} style={{ width: wp(17), height: wp(12), }} />
        </View>
       
        <View>
          <View style={{ justifyContent: 'center', alignItems: 'center',paddingVertical:25, }}>
          <Text style={{ color: 'white', }}>Amount  </Text>
          <Text style={{ color: 'white', fontSize: 28, fontWeight: 'bold' }}><FontAwesome6 name="naira-sign" size={28} color="#fff" />{formatAmount(amount)}</Text>
            
          </View>
          <Text style={{ color:'white', }}>Details</Text>
          <View style={{  backgroundColor: "#212A6B",padding:10, marginVertical:10, borderRadius:10 }}>           
              <Text style={{ color:'white', }}>{selectedItem.name}</Text>
            </View>


          <View style={{   backgroundColor: "#212A6B", paddingHorizontal:10, paddingVertical:20, borderRadius:10,gap:10 }}>
            <View style={{ flexDirection: 'row', display: 'flex', justifyContent: 'space-between',  borderBottomColor:"#010A43",paddingVertical:10, borderBottomWidth: 1 }}>
              <Text style={{ color: '#FFC100', }}>Sender Name   </Text>
              <Text style={{ color:'white',  }}>{userDetails?.userName.length>10?userDetails?.userName.slice(0,10)+'...':userDetails?.userName}</Text>
            </View>

            <View style={{ flexDirection: 'row', display: 'flex', justifyContent: 'space-between',  borderBottomColor:"#010A43",paddingVertical:10, borderBottomWidth: 1 }}>
              <Text style={{ color: '#FFC100', }}>Beneficiary Name  </Text>             
              <Text style={{ color:'white', }}>{selectedItem.name.length>10?selectedItem.name.slice(0,10)+'...':selectedItem.name}</Text>
            </View>

            <View style={{ flexDirection: 'row', display: 'flex', justifyContent: 'space-between',  borderBottomColor:"#010A43",paddingVertical:10, borderBottomWidth: 1 }}>
              <Text style={{ color: '#FFC100', }}>Beneficiary Account</Text>
              <Text style={{ color:'white',  }}>{selectedItem.details.length>10?selectedItem.details.slice(0,10)+'...':selectedItem.details}</Text>
            </View>

            <View style={{ flexDirection: 'row', display: 'flex', justifyContent: 'space-between',  borderBottomColor:"#010A43",paddingVertical:10, borderBottomWidth: 1 }}>
              <Text style={{ color: '#FFC100', }}>Beneficiary Bank   </Text>
              <Text style={{ color:'white',}}>{selectedItem.bank.length>10?selectedItem.bank.slice(0,10)+'...':selectedItem.bank}</Text>
            </View>

            <View style={{ flexDirection: 'row', display: 'flex', justifyContent: 'space-between',  borderBottomColor:"#010A43",paddingVertical:10, borderBottomWidth: 1 }}>
              <Text style={{ color: '#FFC100', }}>Reference </Text>
              <Text style={{ color:'white',  }}>Sender Name</Text>
            </View>

          </View>

        </View>
      </ViewShot>

      <Text style={{ color: 'white', fontSize:10, padding:10, }}>Generated from <Text style={{ fontWeight:'bold' }}>MoonBank</Text> on {formatDateTime()}</Text>
      <TouchableOpacity
        onPress={() => navigation.navigate('TransactionPin')}
        activeOpacity={0.7} style={{
          backgroundColor: '#FF2E63',
          width: '50%', elevation: 10, marginTop: 40, flexDirection: 'row', paddingVertical: 9, display: 'flex', justifyContent: 'center', borderRadius: 10,
        }}>
        <Text style={{ color: 'white', fontSize: 14, flexDirection: 'row', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>Share</Text>
      </TouchableOpacity>

    </View>
  );
};

export default Receipt;
