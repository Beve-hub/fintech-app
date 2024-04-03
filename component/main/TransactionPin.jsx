import { View, Text, Dimensions, TouchableOpacity, Alert } from 'react-native'
import React, { useState } from 'react'
import DialPad from '../Data/DialPad'
import { StatusBar } from "expo-status-bar";
import Loader from '../Data/Loader';
const { width } = Dimensions.get('window');
import { MaterialIcons } from '@expo/vector-icons'; 
import AsyncStorage from '@react-native-async-storage/async-storage';

const pinLength = 4;
const pinContainerSize = width / 2;
const pinFullSize = pinContainerSize / pinLength;
const pinSpacing = 10;
const pinSize = pinFullSize - pinSpacing * 2;

const TransactionPin = ({ navigation, route }) => {
  const [loading, setLoading] = useState(false);
  const [pin, setPin] = useState('');
  const [isPinVisible, setIsPinVisible] = useState(false);

  const remove = (item) => {
    if (item === 'del') {
      setPin(prevPin => prevPin.slice(0, -1));
    } else {
      setPin(prevPin => prevPin + item);
    }
  }

  const handlePress = (item) => {
    if (item === 'del') {
      setPin(prevPin => prevPin.slice(0, -1));
    } else if (typeof item === 'number') {
      if (pin.length === pinLength) return;
      setPin(prevPin => prevPin + item);
    }
  };

  const validatePin = async (enteredPin) => {
    try {
      const storedPin = await AsyncStorage.getItem('userPin');
      return storedPin === enteredPin;
    } catch (error) {
      return false;
    }
  }

  const handleSendMoney = async () => {
    setLoading(true);

    setTimeout(async () => {
      setLoading(false);
      
      const isPinValid = await validatePin(pin);
      if (isPinValid) {
        navigation.navigate('Receipt', {
          amount: route.params['amount'],
          selectedItem: route.params['selectedItem'],
          pin: pin,
        });
      } else {
        Alert.alert('Invalid PIN', 'Please enter a valid PIN');
      }      
    }, 5000);
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
          const isSelected = i < pin.length;
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
                paddingLeft: 8
              }}>
              {isPinVisible ? pin[i] : '*'}
            </Text>
          );
        }) : [...Array(pinLength).keys()].map((i) => {
          const isSelected = i < pin.length;
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
        })}

        <TouchableOpacity
          onPress={() => setIsPinVisible(prev => !prev)}
          style={{ marginLeft: 10 }}
          activeOpacity={0.7}>
          <MaterialIcons name={isPinVisible ? "visibility" : "visibility-off"} size={24} color="white" />
        </TouchableOpacity>
      </View>

      <DialPad remove={remove} onPress={handlePress} />

      <TouchableOpacity
        onPress={handleSendMoney}
        activeOpacity={0.7} style={{
          backgroundColor: '#FF2E63',
          width: '50%', elevation: 10, flexDirection: 'row', paddingVertical: 12, display: 'flex', justifyContent: 'center', borderRadius: 10,
        }}>
        <Text style={{ color: 'white', fontSize: 14 }}>Send money</Text>
      </TouchableOpacity>

    </View>
  )
}

export default TransactionPin;
