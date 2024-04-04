import React, { useState, useEffect } from "react";
import { View, TouchableOpacity, FlatList, SafeAreaView,Image,Text, ScrollView, } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import { StatusBar } from "expo-status-bar";
import { Entypo } from '@expo/vector-icons';
import { Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';


const Bills = ({navigation}) => {

  

  return (
    <SafeAreaView
      style={{
        backgroundColor: "#010A43",
        width: wp("100%"),
        height: hp("150%"),   

      }}
    >
      <StatusBar style="light" />

      <View
        style={{ 
          marginTop: 50,marginBottom: 100}}
      >
        <View
          style={{    flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            gap: 70,
          }}
        >
         
          <Text style={{ color: "#fff", fontSize: 20, fontWeight: "bold" }}>
            Pay BIlls
          </Text>
        </View>
      </View>

      <View style={{gap:15}}>
        <TouchableOpacity
         activeOpacity={0.7} 
         onPress={() => navigation.navigate("AirtimeDetails")}
        style={{width: wp('85%'), backgroundColor:'#858EC550', marginHorizontal:20,borderRadius:10, flexDirection:'row', display:'row', justifyContent:'space-between',gap:20, alignItems:'center',paddingVertical:5,paddingHorizontal:10}}>
                   
        <View style={{flexDirection:'row', display:'row', justifyContent:'space-between', padding:10,gap:10,}}>    
        <Text style={{color:'white'}}><Ionicons name="call" size={16} color="white" /></Text>           
        <Text style={{color:'white'}}>Airtime Purchase</Text>        
        </View>         
        <Entypo name="chevron-small-right" size={24} color="#E0E0E080" style={{ paddingHorizontal:10}}/>    
             
        </TouchableOpacity>

        <TouchableOpacity
         activeOpacity={0.7} 
         onPress={() => navigation.navigate("DataPurchase")}
        style={{width: wp('85%'), backgroundColor:'#858EC550', marginHorizontal:20,borderRadius:10, flexDirection:'row', display:'row', justifyContent:'space-between',gap:20, alignItems:'center',paddingVertical:5,paddingHorizontal:10}}>
                   
                   <View style={{flexDirection:'row', display:'row', justifyContent:'space-between', padding:10,gap:10,}}>    
                   <Text style={{color:'white'}}><MaterialCommunityIcons name="database" size={16} color="white" /></Text>           
                   <Text style={{color:'white'}}>Buy Data</Text>        
                   </View>  
                   <Text>
                   <Entypo name="chevron-small-right" size={24} color="#E0E0E080" style={{ paddingHorizontal:10}}/>  
                    </Text>       
                     
                        
         </TouchableOpacity>

         <TouchableOpacity 
         activeOpacity={0.7}
         onPress={() => navigation.navigate("CableTv")}
          style={{width: wp('85%'), backgroundColor:'#858EC550', marginHorizontal:20,borderRadius:10, flexDirection:'row', display:'row', justifyContent:'space-between',gap:20, alignItems:'center',paddingVertical:5,paddingHorizontal:10}}>
                   <View style={{flexDirection:'row', display:'row', justifyContent:'space-between', padding:10,gap:10,}}>    
                   <Text style={{color:'white'}}> <Ionicons name="tv" size={16} color="white" /> </Text>           
                   <Text style={{color:'white'}}>Cable Tv</Text>        
                   </View>         
                   <Entypo name="chevron-small-right" size={24} color="#E0E0E080" style={{ paddingHorizontal:10}}/>    
                        
         </TouchableOpacity>

         <TouchableOpacity 
         activeOpacity={0.7} 
         onPress={() => navigation.navigate("ElectricBills")}
         style={{width: wp('85%'), backgroundColor:'#858EC550', marginHorizontal:20,borderRadius:10, flexDirection:'row', display:'row', justifyContent:'space-between',gap:20, alignItems:'center',paddingVertical:5,paddingHorizontal:10}}>
               
                   <View style={{flexDirection:'row', display:'row', justifyContent:'space-between', padding:10,gap:10,}}>    
                   <Text style={{color:'white'}}><MaterialIcons name="lightbulb" size={16} color="white"/></Text>           
                   <Text style={{color:'white'}}>Electricity Bills</Text>        
                   </View>         
                   <Entypo name="chevron-small-right" size={24} color="#E0E0E080" style={{ paddingHorizontal:10}}/>    
                        
         </TouchableOpacity>
     
         

         <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => navigation.navigate("Betting")}
           style={{width: wp('85%'), backgroundColor:'#858EC550', marginHorizontal:20,borderRadius:10, flexDirection:'row', display:'row', justifyContent:'space-between',gap:20, alignItems:'center',paddingVertical:5,paddingHorizontal:10}}>
              
                   <View style={{flexDirection:'row', display:'row', justifyContent:'space-between', padding:10,gap:10,}}>    
                   <MaterialIcons name="sports-soccer" size={16} color="white" />          
                   <Text style={{color:'white'}}>Betting</Text>        
                   </View>         
                   <Entypo name="chevron-small-right" size={24} color="#E0E0E080" style={{ paddingHorizontal:10}}/>    
                        
         </TouchableOpacity>

        
                          




      </View>
    </SafeAreaView>
  )
}

export default Bills