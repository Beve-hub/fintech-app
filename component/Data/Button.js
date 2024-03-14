import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

const Button = ({title, onPress = () => {}}) => {
  return (
  <TouchableOpacity 
  activeOpacity={0.7}
  onPress={onPress}
   style={{
    height:45,
    width: '100%',
     elevation: 10, 
    marginTop:40, 
    flexDirection: 'row',
     backgroundColor:'#ffff40', 
    paddingVertical: 9, 
     display:'flex', 
    justifyContent:'center', 
    borderRadius:10,  
    marginVertical:10
  }}>
    <Text style={{fontSize:16,   color: 'white', display:'flex', justifyContent: 'center',alignItems: 'center',color:'#010A43'}}>{title}</Text>
  </TouchableOpacity>
  )
  
}

export default Button