import React, { useState } from 'react';
import { View, Text, SafeAreaView, ScrollView, Keyboard, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Input from '../Data/Input';
import Button from '../Data/Button';
import Loader from '../Data/Loader';
import { StatusBar } from "expo-status-bar";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import CountryPicker from "react-native-country-picker-modal";



const Register = ({ navigation }) => {
  const [inputs, setInputs] = useState({
    email: '',
    fullName: '',
    password: '',
    phoneNumber: '',
    countryCode: '+1', 
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  

  const validate = () => {
    Keyboard.dismiss();
    let valid = true;

    if (!inputs.email) {
      handleError('Please input email', 'email');
      valid = false;
    } else if (!inputs.email.match(/^\S+@\S+\.\S+$/)) {
      valid = false;
      handleError('Please input a valid email', 'email');
    }

    if (!inputs.userName) {
      valid = false;
      handleError('Please input userName', 'userName');
    }
    if (!inputs.password) {
      valid = false;
      handleError('Please input password', 'password');
    } else if (inputs.password.length < 5) {
      valid = false;
      handleError('Minimum password length of 5', 'password');
    }

    if (!inputs.phoneNumber) {
      valid = false;
      handleError('Please input phone number', 'phoneNumber');
    } else if (!inputs.phoneNumber.match(/^\d+$/)) {
      valid = false;
      handleError('Please input a valid phone number', 'phoneNumber');
    }

    if (valid) {
      register();
    }
  };

  const register = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);

      try {
        AsyncStorage.setItem('user', JSON.stringify(inputs));
        navigation.navigate('Login');
      } catch (error) {
        Alert.alert('Error', 'Something went wrong');
      }
    }, 3000);
  };

  const handleOnChange = (text, input) => {
    setInputs((prevState) => ({ ...prevState, [input]: text }));
  };

  const handleError = (errorMessage, input) => {
    setErrors((prevState) => ({ ...prevState, [input]: errorMessage }));
  };

  return (
    <SafeAreaView style={{backgroundColor: '#010A43',width:wp('100%'),height:hp('150%')}}>
       <StatusBar style="light" />
      <Loader visible={loading} />
      <ScrollView
        contentContainerStyle={{
          paddingTop: 80,
          paddingHorizontal: 20,
        }}>
        <Text style={{ fontSize: 35, fontWeight: '700', color: '#fff' }}>Register</Text>
        <Text style={{ fontSize: 14, fontWeight: '400', color: '#ffff' }}>Your first time, Let's get to know you more!</Text>

        <View style={{ marginVertical: 60 }}>
          <Input
            label="User Name"
            placeholder="UserName"
            error={errors.userName}
            onFocus={() => {
              handleError(null, 'userName');
            }}
            onChangeText={(text) => handleOnChange(text, 'userName')} />

          <Input
            label="Email"
            placeholder="Email"
            error={errors.email}
            onFocus={() => { handleError(null, 'email'); }}
            onChangeText={(text) => handleOnChange(text, 'email')} />

<Input
            label="Country Code"
            placeholder="+1"
            value={inputs.countryCode}
            onChangeText={(text) => handleOnChange(text, 'countryCode')} />

          <Input
            label="Phone Number"
            placeholder="Phone Number"
            error={errors.phoneNumber}
            onFocus={() => {
              handleError(null, 'phoneNumber');
            }}
            onChangeText={(text) => handleOnChange(text, 'phoneNumber')} />

          <Input
            label="Password"
            placeholder="Password"
            error={errors.password}
            onFocus={() => {
              handleError(null, 'password');
            }}
            onChangeText={(text) => handleOnChange(text, 'password')}
            password />

          

          <Button title="Continue" onPress={validate} />
          <Text style={{ textAlign: 'center', fontSize: 14,color:'#fff' }}>Already have an account? <Text onPress={() => navigation.navigate('Login')} style={{ fontWeight: '700', color: '#fff' }}> Sign In </Text> </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Register;