import { StyleSheet, Text, View, SafeAreaView,ScrollView,Image, TouchableOpacity,Animated} from 'react-native';
import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const Board = ({ navigation }) => {
  const [isShowing, setIsShowing] = useState(false);


  const handleToggle = () => {
    setIsShowing(!isShowing);
    navigation.navigate('Login')
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsShowing(true);
    }, 1000)    

    return () => clearTimeout(timer);
  }, []);

  return (
    <SafeAreaView style={{backgroundColor: '#010A43',width:wp('100%'),height:hp('150%')}}>
      <StatusBar style="light" />
      <View style={{flexDirection:'row'}}>
      <Image source={require('../../assets/image/image_board1.png')} style={{width:wp('100%'),height:hp('40%')}}/>
      <Image source={require('../../assets/image/image_board2.png')}  style={{width:wp('100%'),height:hp('40%')}}/>  
      </View>
      

      {isShowing && <Drawer toggle={handleToggle} />}
       

       
      
      
    </SafeAreaView>
  )
}


 const Drawer = ({toggle}) => {

  const [animation] = useState(new Animated.Value(0));

  useEffect(() => {
    Animated.timing(animation, {
      toValue:1,
      duration: 500,
      useNativeDriver:false,
    }).start();
  }, [animation]);
  return (

  <Animated.View style={[{position:'absolute',top:450, right:0, backgroundColor:'#fff',height:hp('27%'),width:wp('60%'),borderTopLeftRadius:40,borderBottomLeftRadius:40, padding:20, }, {transform: [{ translateX: animation.interpolate({ inputRange: [0, 1],outputRange: [wp('100%'), 0],}),},], }]}>      
    
  <View style={{paddingBottom:15,gap:10 }} >
  <Text style={{fontWeight:'bold',fontSize:16,color:'#1C265C'}}>Transfer That Is Safe</Text>
  <Text style={{fontSize:14,color:'#1C265C'}}>You have nothing to be scared about, we got you covered.</Text>
      <TouchableOpacity onPress={toggle} activeOpacity={0.7}  style={{flexDirection: 'row',  display:'flex', justifyContent:'flex-end',  borderRadius:10,  marginTop:10}}>
          <Text style={{fontSize:14,  alignItems:'center', justifyContent:'center',display:'flex',color:'#fff',backgroundColor:'#1C265C',padding:10, }}>Start Banking</Text>
        </TouchableOpacity>
  </View>
 
  </Animated.View>

)
 }
export default Board;