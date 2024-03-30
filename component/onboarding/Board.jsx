import { StyleSheet, Text, View, SafeAreaView,ScrollView,Image, TouchableOpacity } from 'react-native';
import React from 'react'
import { StatusBar } from 'expo-status-bar';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const Board = ({ navigation }) => {
  return (
    <SafeAreaView style={{backgroundColor: '#010A43',width:wp('100%'),height:hp('150%')}}>
      <StatusBar style="light" />
      <View style={{flexDirection:'row'}}>
      <Image source={require('../../assets/image/image_board1.png')} style={{width:wp('100%'),height:hp('40%')}}/>
      <Image source={require('../../assets/image/image_board2.png')}  style={{width:wp('100%'),height:hp('40%')}}/>  
      </View>
      
      <View style={{position:'absolute',top:450, right:0, backgroundColor:'#fff',height:hp('27%'),width:wp('60%'),borderTopLeftRadius:40,borderBottomLeftRadius:40, padding:20, }}>      

        <View style={{paddingBottom:15,gap:10 }} >
        <Text style={{fontWeight:'bold',fontSize:16,color:'#1C265C'}}>Transfer That Is Safe</Text>
        <Text style={{fontSize:14,color:'#1C265C'}}>You have nothing to be scared about, we got you covered.</Text>
        </View>

        <TouchableOpacity onPress={() => navigation.navigate('Login')} activeOpacity={0.7}  style={{flexDirection: 'row',  display:'flex', justifyContent:'flex-end',  borderRadius:10,  marginTop:10}}>
          <Text style={{fontSize:14,  alignItems:'center', justifyContent:'center',display:'flex',color:'#fff',backgroundColor:'#1C265C',padding:10, }}>Start Banking</Text>
        </TouchableOpacity>

      </View>
      
    </SafeAreaView>
  )
}

export default Board