import { StyleSheet, Text, View, SafeAreaView,ScrollView,Image, TouchableOpacity } from 'react-native';
import React from 'react'
import { StatusBar } from 'expo-status-bar';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const Boarding = ({ navigation }) => {
  return (
    <SafeAreaView style={{backgroundColor: '#010A43',width:wp('100%'),height:hp('150%')}}>
      <StatusBar style="light" />
      <View>
      <Image source={require('../../assets/image/image_board1.png')} style={{width:wp('100%'),height:hp('40%')}}/>
      <Image source={require('../../assets/image/image_board2.png')} style={{width:wp('100%'),height:hp('40%')}}/>
      </View>
      <View style={{position:'absolute',top:570, backgroundColor:'#17288E',height:hp('25%'),width:wp('70%'),borderTopRightRadius:40, padding:20}}>

      <View style={{flexDirection:'row',gap:2, }}>
        <Text style={{width:wp(6),height:hp(0.8),borderRadius:40,backgroundColor:'#FFB129'}}></Text>
        <Text style={{width:wp(3),height:hp(0.8),backgroundColor:'#FDD570',borderRadius:40,}}></Text>       
        </View>

        <View style={{paddingVertical:18}} >
        <Text style={{fontWeight:'bold',fontSize:14,color:'#fff'}}>Transfer That Is Safe</Text>
        <Text style={{fontSize:12,color:'#fff'}}>You have nothing to be scared about, we got you covered.</Text>
        </View>

        <TouchableOpacity onPress={() => navigation.navigate('Board')} activeOpacity={0.7}  style={{flexDirection: 'row',  display:'flex', justifyContent:'center', backgroundColor:'#ffff', borderRadius:10, paddingVertical:7, width:wp('30%')}}>
          <Text style={{fontSize:12,  alignItems:'center', justifyContent:'center',display:'flex',color:'#17288E' }}>Start Banking</Text>
        </TouchableOpacity>
      </View>
      
    </SafeAreaView>
  )
}

export default Boarding

