import { View, Text,SafeAreaView,TouchableOpacity, Image, FlatList, StyleSheet,  } from 'react-native'
import React from 'react'
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome6 } from "@expo/vector-icons";
import { Entypo } from '@expo/vector-icons';
import { StatusBar } from "expo-status-bar";

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
const Transaction = ({navigation}) => {
  const renderItem = ({ item }) => {
    let amountColor = '000';
    let statusIcon = null;


    switch (item.status) {
      case 'success' :
        amountColor = '#1DC7AC';
        statusIcon = <Ionicons name="checkmark-circle" size={14} color="white" />;
        break;
      case 'pending' : 
        amountColor = '#FAAD39';  
        statusIcon = <Ionicons name="hourglass" size={14} color="white" />;             
        break; 
        case 'failed' : 
        amountColor = '#FE4A54';  
        statusIcon = <Ionicons name="close-circle" size={14} color="white" />;
        break;   
      default :
        amountColor = 'white';  
    }
    return (
      <View style={{ flexDirection: "row", display: "flex", alignItems: "center", justifyContent:'space-between', padding:10, backgroundColor:'#858EC550',}}>
        <View style={{ flexDirection: "row", display: "flex", alignItems: "center",  gap: 10,}}>
        <Image source={item.image} style={{width:wp(10),height:wp(10)}}/>
        <View style={{gap:10}}>
        <Text style={{color:'#858EC5', fontWeight:'bold',fontSize:14}}>{item.name}</Text>
        <View style={{...styles.amount, backgroundColor: amountColor, flexDirection:'row', display:'flex', alignItems:'center', justifyContent:'flex-start',  paddingLeft:15,  gap:5, borderRadius:20}}>
        <Text >{statusIcon}</Text>
        <Text style={{color:'#fff'}}>{item.status}</Text>
        </View>
        </View>
        </View>                
        <Text style={{...styles.amount, color: amountColor,fontWeight:'bold'}}><FontAwesome6 name="naira-sign" size={12}/> {item.amount}</Text>
      </View>
    );
  
  }
  return (
    <SafeAreaView style={{backgroundColor: "#010A43", width: wp("100%"), height: hp("150%"),}}>
      <StatusBar style="light" />

      <View style={{marginHorizontal:20, marginVertical:50  }}>
        <View style={{ flexDirection:'row',alignItems:'center',justifyContent:'flex-start',gap:50, }}>
         <TouchableOpacity
         activeOpacity={0.7}
         onPress={() => navigation.navigate('TabGroup')}
         style={{ backgroundColor:"#426DDC50", width: wp(10), height: hp(5), flexDirection:'row',alignItems:'center',justifyContent:'center',borderRadius:20,}} >
        <Entypo name="chevron-small-left" size={24} color='#fff' />
        </TouchableOpacity>
        <Text style={{color:'#fff', fontSize:20, fontWeight:'bold'}}>Recent Transaction</Text>
        </View>
      </View>
      <View>
        
      <FlatList
            data={transactionData}
            renderItem={renderItem}
            keyExtractor={(item) => item.id.toString()}
            showsVerticalScrollIndicator={true}
            VerticalScroll={true}
            contentContainerStyle={{gap:10, paddingVertical:10,paddingHorizontal:15,}}
          />
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22,
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  
});
export default Transaction