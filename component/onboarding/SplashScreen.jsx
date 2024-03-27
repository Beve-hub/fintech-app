import { View, Text,Image } from 'react-native'
import React,{useState, useEffect} from 'react'
import { StatusBar } from 'expo-status-bar';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";

const SplashScreen = ({navigation}) => {

    useEffect(() => {
        setTimeout(() => {
            navigation.replace('Home');
        },4000)
    }, [])

  return (
    <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
        <StatusBar style="dark" />
      <Image source={require('../../assets/image/logo.gif')} style={{ width: wp(70), height: wp(50) }} />
    </View>
  )
}

export default SplashScreen