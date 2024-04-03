import { View, Text, Dimensions, TouchableOpacity, Alert } from 'react-native'
import React, { useState } from 'react'
import { MaterialIcons } from '@expo/vector-icons'; 
import DialPad from '../Data/DialPad'
import { StatusBar } from "expo-status-bar";
import Loader from '../Data/Loader';
const { width } = Dimensions.get('window')
import AsyncStorage from '@react-native-async-storage/async-storage';

const pinLength = 4;
const pinContainerSize = width / 2;
const pinFullSize = pinContainerSize / pinLength;
const pinSpacing = 10;
const pinSize = pinFullSize - pinSpacing * 2;

const Pin = ({ navigation }) => {
  const [loading, setLoading] = useState(false);
  const [code, setCode] = useState([]);
  const [isPinVisible, setIsPinVisible] = useState(false); 

  const remove = (item) => {
    if (item === 'del') {
      setCode(prevAmount => prevAmount.slice(0, -1));
    } else {
      setCode(prevAmount => prevAmount + item);
    }
  }

  const handlePress = (item) => {
    if (item === 'del') {
      setCode(prev => prev.slice(0, -1));
    } else if (typeof item === 'number') {
      if (code.length === pinLength) return;
      setCode(prev => prev + item);
    }
  };

  const handleSendMoney = () => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      navigation.navigate('Login');
    }, 5000);
  };

  const register = async () => {
    const storedPin = code.join('');
    setLoading(true);
  
    try {
      await AsyncStorage.setItem('userPin', storedPin);
      console.log('storedPin');
      setLoading(false);
      navigation.navigate('Login');
    } catch (error) {
      setLoading(false);
      Alert.alert('Error', 'Something went wrong');
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: "#010A43", paddingVertical: 30 }}>
      <StatusBar style="light" />
      <Loader visible={loading} />
      
      <View style={{
        flexDirection: 'row',
        marginTop: 150,
        gap: pinSpacing,
        height: pinSize * 2,
      }}>
        {isPinVisible ? [...Array(pinLength).keys()].map((i) => {
            const isSelected = !!code[i];
            return (
             <Text
             key={i}
              style={{      
                fontSize: 20,        
                fontWeight: 'bold',  
                  color: '#000',
                  width: pinSize,
                  height: isSelected ? pinSize : 2,
                  borderRadius: pinSize,
                  backgroundColor: '#fff',
                  paddingLeft:8
              }}>
        {isPinVisible ? code[i] : '*'}
     </Text> );
     }) : [...Array(pinLength).keys()].map((i) => {
          const isSelected = !!code[i];
          return (
            <View
              key={i}
              style={{
                width: pinSize,
                height: isSelected ? pinSize : 2,
                borderRadius: pinSize,
                backgroundColor: '#fff',
              }}
            />
          )
        })  }

      

      <TouchableOpacity
          onPress={() => setIsPinVisible(prev => !prev)}
          style={{ marginLeft: 10 }}
          activeOpacity={0.7}>
          <MaterialIcons name={isPinVisible ? "visibility" : "visibility-off"} size={24} color="white" />
        </TouchableOpacity>
      </View>

      
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <DialPad remove={remove} onPress={handlePress} />
       
      </View>
      <TouchableOpacity
        onPress={handleSendMoney}
        activeOpacity={0.7} style={{
          backgroundColor: '#FF2E63',
          width: '50%', elevation: 10, flexDirection: 'row', paddingVertical: 12, display: 'flex', justifyContent: 'center', borderRadius: 10,
        }}>
        <Text style={{ color: 'white', fontSize: 14 }}>Continue</Text>
      </TouchableOpacity>
      
      
    </View>
  )
}
export default Pin;
