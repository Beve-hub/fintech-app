import { View, Text, Dimensions,TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import DialPad from '../Data/DialPad'
import { StatusBar } from "expo-status-bar";
import Loader from '../Data/Loader';
const {width} = Dimensions.get('window')



const pinLength = 4;
    const   pinContainerSize = width / 2;
    const pinFullSize = pinContainerSize / pinLength;
    const pinSpacing = 10;
    const pinSize = pinFullSize - pinSpacing * 2;

const TransactionPin = ({ navigation, route }) => {
  const [loading, setLoading] = useState(false);   
 const [pin, setPin] = useState('');
 
 
 const remove = (item) => {
    if (item === 'del') {
      setPin(prevPin => prevPin.slice(0, -1));
    } else {
      setPin(prevPin => prevPin + item);
    }
  }

  const handlePress = (item) => {
    if (item === 'del') {
      setPin((prevPin) => prevPin.slice(0, -1));
    } else if (typeof item === 'number') {
      if (pin.length === pinLength) return;
      setPin((prevPin) => prevPin + item);
    }
  };

  const handleSendMoney = () => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      navigation.navigate('Receipt', {
        amount: route.params['amount'],
        selectedItem: route.params['selectedItem'],
        pin: pin,
      });
    }, 5000);
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
       </View>
        <DialPad  remove={remove}
         onPress={handlePress} />


      <TouchableOpacity
       onPress={handleSendMoney} 
         activeOpacity={0.7}  style={{
           backgroundColor: '#FF2E63',
              width: '50%', elevation: 10, flexDirection: 'row', paddingVertical: 12, display: 'flex', justifyContent: 'center', borderRadius: 10,    
         }}>
         <Text style={{ color: 'white', fontSize:14 }}>Send money</Text>
       </TouchableOpacity>
    </View>
  )
}

export default TransactionPin  