import { View,  Text, Image, TouchableOpacity,  SafeAreaView,  ScrollView,  } from "react-native";
import React, { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { Feather } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import ImagePicker from 'react-native-image-picker';

const Profile = () => {
  const [userDetails, setUserDetails] = useState(null);
  const [editPro, setEditPro] = useState(null);

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

  const selectImage = () => {
    ImagePicker.showImagePicker({mediaType:'photo'}, (response) => {
      if (!response.didCancel && !response.error) {
        setEditPro(response.uri);
      }
    })
  }

  return (
    <ScrollView
      style={{
        backgroundColor: "#010A43",
        width: wp("100%"),
        height: hp("150%"), }}>
          <StatusBar style="light" />

          <View style={{backgroundColor: "#010A43", flexDirection:'row',  justifyContent:'space-between', alignItems:'center', marginTop:60,marginHorizontal:30}}>
          <Text style={{ color:'white', fontSize:20  }}>{userDetails?.userName}</Text>
          <View>
          {editPro && ( 
           <Image source={require('../../assets/image/image_pro5.png')} style={{width: 50,  height: 50, borderRadius: 100,}} />
          )}
          </View>
          </View>


      <ScrollView contentContainerStyle={{  justifyContent: 'center' }}>


            <View style={{marginHorizontal:20,gap:10,marginVertical:20,}}>
            <Text style={{ color:'white', fontSize:14 }}>Personal Data</Text>
            <View style={{backgroundColor:"#426DDC", padding:15, borderRadius:10,gap:10 }}>
              <View style={{flexDirection:'row', alignItems:'center',gap:10 }}>
                <Feather name="user" size={22} color='#FF2E63'/>
                <View>
                <Text style={{fontSize:12}}> Full Name</Text>
                <Text style={{fontSize:16}}> {userDetails?.userName}</Text>
                </View>              
              </View>

              <View style={{flexDirection:'row', alignItems:'center',gap:10 }}>
              <Ionicons name="call-outline" size={22} color='#FF2E63' />
                <View>
                <Text style={{fontSize:12}}> Phone Number</Text>
                <Text style={{fontSize:16}}> {userDetails?.phoneNumber}</Text>
                </View>              
              </View>

              <View style={{flexDirection:'row', alignItems:'center',gap:10 }}>
                
                <MaterialCommunityIcons name="email-outline" size={22} color='#FF2E63'  />
                <View>
                <Text style={{fontSize:12}}> Email</Text>
                <Text style={{fontSize:16}}> {userDetails?.email}</Text>
                </View>              
              </View>
            
             
            </View>
            </View>

            <View style={{marginHorizontal:20,gap:10,marginVertical:20,}}>
            <Text style={{ color:'white', fontSize:14 }}>Security</Text>
            <View style={{backgroundColor:"#426DDC", padding:15, borderRadius:10,gap:10 }}>

              <TouchableOpacity style={{flexDirection:'row', alignItems:'center',justifyContent:'space-between'}}>
              <View style={{flexDirection:'row', alignItems:'center',gap:10 }}>              
              <MaterialCommunityIcons name="pin-outline" size={22} color='#FF2E63' />
                <View>
                <Text style={{fontSize:12}}> Transaction Pin</Text>
                <Text style={{fontSize:16}}> {userDetails?.userName}</Text>
                </View>                         
              </View>
              <MaterialIcons name="chevron-right" size={22} color='#FF2E63'/>   
              </TouchableOpacity>

             
              <TouchableOpacity style={{flexDirection:'row', alignItems:'center',justifyContent:'space-between'}}>
              <View style={{flexDirection:'row', alignItems:'center',gap:10 }}>              
              <MaterialCommunityIcons name="lock-outline" size={22} color='#FF2E63'/>
                <View>
                <Text style={{fontSize:12}}> Password</Text>
                <Text style={{fontSize:16}}> {userDetails?.userName}</Text>
                </View>                         
              </View>
              <MaterialIcons name="chevron-right" size={22} color='#FF2E63'/>   
              </TouchableOpacity>

            
             
            </View>
            </View>

            <View style={{marginHorizontal:20,gap:10,marginVertical:20,}}>
            <Text style={{ color:'white', fontSize:14 }}>About</Text>
            <View style={{backgroundColor:"#426DDC", padding:15, borderRadius:10,gap:10 }}>

              <TouchableOpacity style={{flexDirection:'row', alignItems:'center',justifyContent:'space-between'}}>
              <View>
                <Text style={{fontSize:16}}> Support</Text>                
                </View>      
              <MaterialIcons name="chevron-right" size={22} color='#FF2E63'/>   
              </TouchableOpacity>

              <TouchableOpacity style={{flexDirection:'row', alignItems:'center',justifyContent:'space-between'}}>
              <View>
                <Text style={{fontSize:16}}> Help</Text>                
                </View>      
              <MaterialIcons name="chevron-right" size={22} color='#FF2E63'/>   
              </TouchableOpacity>         
             
            </View>
            </View>

            <View style={{marginHorizontal:20,gap:10,marginVertical:20,}}>
            <TouchableOpacity style={{flexDirection:'row', alignItems:'center',justifyContent:'space-between',backgroundColor:"#426DDC",padding:15, borderRadius:10,gap:10 }}>
              <View style={{flexDirection:'row', alignItems:'center',justifyContent:'space-between'}}>
              <MaterialIcons name="logout" size={22} color='#FF2E63' />
                <Text style={{fontSize:16}}> Logout</Text>                
                </View>      
              <MaterialIcons name="chevron-right" size={22} color='#FF2E63'/>    
              </TouchableOpacity>       
                        
            </View>
      </ScrollView>

    </ScrollView>
  )
}

export default Profile