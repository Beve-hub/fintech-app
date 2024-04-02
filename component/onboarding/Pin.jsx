import { View, Text, Dimensions,TouchableOpacity,Alert } from 'react-native'
import React, { useState } from 'react'
import DialPad from '../Data/DialPad'
import { StatusBar } from "expo-status-bar";
import Loader from '../Data/Loader';
const {width} = Dimensions.get('window')
import AsyncStorage from '@react-native-async-storage/async-storage';



const pinLength = 4;
    const   pinContainerSize = width / 2;
    const pinFullSize = pinContainerSize / pinLength;
    const pinSpacing = 10;
    const pinSize = pinFullSize - pinSpacing * 2;


const Pin = ({ navigation }) => {

  const [loading, setLoading] = useState(false);   
 const [code, setCode] = useState([]);
 
 const remove = (item) => {
    if (item === 'del') {
        setCode(prevAmount => prevAmount.slice(0, -1));
    } else {
        setCode(prevAmount => prevAmount + item);
    }
  }

  const handlePress = (item) => {
    if (item === 'del') {
        setCode((prev) => prev.slice(0, -1));
    } else if (typeof item === 'number') {
      if (code.length === pinLength) return;
      setCode((prev) => prev + item);
    }
  };

  const handleSendMoney = () => {

    const storedPin = code.join('');

    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      navigation.navigate('TabGroup');
    }, 5000);
  };

  

  const register = () => {

    const storedPin = code.join('');
    setLoading(true);
    setTimeout(() => {
      setLoading(false);

      try {
        AsyncStorage.setItem('userPin', storedPin);
        navigation.navigate('Login');
      } catch (error) {
        Alert.alert('Error', 'Something went wrong');
      }
    }, 3000);
  };
  return (
    <View style={{flex:1,justifyContent:'center',alignItems:'center', backgroundColor: "#010A43", paddingVertical:30}}>
       <StatusBar style="light" />
       <Loader visible={loading} />
       <View style={{
        flexDirection: 'row',
        marginTop:150,
        gap: pinSpacing,
        height: pinSize * 2,
       }}>
    {[...Array(pinLength).keys()].map((i) => {
        const isSelected = !!code[i]
        return (
            <View
            style={{
                width: pinSize,
                height: isSelected ? pinSize : 2,
                borderRadius: pinSize,
                backgroundColor: '#fff',
            }}
            />
        )
    })}
       </View>
        <DialPad  remove={remove}
         onPress={handlePress} />


      <TouchableOpacity
       onPress={handleSendMoney} 
         activeOpacity={0.7}  style={{
           backgroundColor: '#FF2E63',
              width: '50%', elevation: 10, flexDirection: 'row', paddingVertical: 12, display: 'flex', justifyContent: 'center', borderRadius: 10,    
         }}>
         <Text style={{ color: 'white', fontSize:14 }}>Continue</Text>
       </TouchableOpacity>
    </View>
  )
}
export default Pin