import React, { useEffect, useState } from 'react';
import { View, Text, Button } from 'react-native';




  const Receipt = ({ route, navigation }) => {
    const { selectedItem, amount } = route.params || {};
  
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: "#010A43", paddingVertical: 30 }}>
        
        <Text style={{ color: 'white' }}>Amount: {amount}</Text>
      </View>
    )
  }

export default Receipt