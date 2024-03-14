import { StyleSheet, Text, View, SafeAreaView,ScrollView,Image, TouchableOpacity } from 'react-native';
import React from 'react'
import { StatusBar } from 'expo-status-bar';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const Boarding = () => {
  return (
    <View style={{backgroundColor: '#010A43',width:wp('100%'),height:hp('150%')}}>
      <StatusBar style="light" />
      <View>
      <Image source={require('../../assets/image/image_board1.png')} style={{width:wp('100%'),height:hp('40%')}}/>
      <Image source={require('../../assets/image/image_board2.png')} style={{width:wp('100%'),height:hp('40%')}}/>
      </View>
      <View style={{position:'absolute',top:570, backgroundColor:'#17288E',height:hp('25%'),width:wp('70%'),borderTopRightRadius:40, padding:20}}>

        <View >
        <Text style={{fontWeight:'bold',fontSize:14,color:'#fff'}}>Transfer That Is Safe</Text>
        <Text style={{fontSize:14,color:'#fff'}}>You have nothing to be scared about, we got you covered.</Text>
        </View>

        <TouchableOpacity style={{ backgroundColor:'#ffff',borderRadius:40, paddingVertical:7, width:wp('40%')}}>
          <Text>Start Banking</Text>
        </TouchableOpacity>
      </View>
      
    </View>
  )
}

export default Boarding

