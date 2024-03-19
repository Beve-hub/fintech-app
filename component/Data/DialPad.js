import {
    View,
    Text,
    TouchableOpacity,
    FlatList,   
    Dimensions,
    Modal
  } from "react-native";
import React from 'react'
import { Feather } from "@expo/vector-icons";

const dialPad = [1,2,3,4,5,6,7,8,9,'',0,'del'];
const {width} = Dimensions.get('window')
const dialPadSize = width * 0.2
const dialPadFontSize = dialPadSize * 0.4


const DialPad = ({ onPress }) => {
  return (
    <View style={{flex:1, justifyContent:'center',alignItems:'center',marginTop:30}}>
    <FlatList
    data={dialPad}
    keyExtractor={(_, index) => index.toString()}
    numColumns={3} 
    showsVerticalScrollIndicator={false}
    columnWrapperStyle={{gap: 25}}
    contentContainerStyle={{gap:18}}
    renderItem={({item}) => {
      return (
        <TouchableOpacity onPress={() => onPress(item)} item={item}>
          <View 
          style={{
            width: dialPadSize,
            height: dialPadSize,
            borderWidth:1,
            borderColor:'#10194E',
            borderRadius:40,
            justifyContent:'center',
            alignItems:'center'
          }}
          >
         {item === 'del' ? (<Feather name="delete" size={24} color="#fff" />) : ( <Text style={{color:'#fff', fontSize: dialPadFontSize}}>{item}</Text>)}
          </View>
          
        </TouchableOpacity>
      )
    }}
    />
    </View>
  )
}

export default DialPad