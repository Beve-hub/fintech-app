import React, { useState } from 'react';
import { View, Text, SafeAreaView, ScrollView, Keyboard, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Input from '../Data/Input';
import Button from '../Data/Button';
import Loader from '../Data/Loader';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';


const Login = ({ navigation }) => {
  const [inputs, setInputs] = useState({
    email: '',
    password: '',
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const validate = () => {
    Keyboard.dismiss();
    let valid = true;

    if (!inputs.email) {
      handleError('Please input email', 'email');
      valid = false;
    } 

    if (!inputs.password) {
      handleError('Please input password', 'password');
      valid = false;
    } 

    if (valid) {
      login();
    }
  };

  const login = async () => {
    setLoading(true);
    try {
       setTimeout(async () => {
        setLoading(false);

        let userData = await AsyncStorage.getItem('user');
        if (userData) { 
          userData = JSON.parse(userData);
          if (
            inputs.email === userData.email &&
            inputs.password === userData.password
          ) {
             AsyncStorage.setItem(
              'user', 
              JSON.stringify({ ...userData, loggedIn: true })
            );
            navigation.navigate("TabGroup")
          } else {
            Alert.alert('Error', 'Invalid email or password');
          }
        } else {
          Alert.alert('Error', 'User not found');
        }
      }, 3000);
    } catch (error) {
      console.error('Error signing in:', error);
      Alert.alert('Error', 'Something went wrong');
      setLoading(false);
    }
  };

  const handleOnChange = (text, input) => {
    setInputs((prevState) => ({ ...prevState, [input]: text }));
  };

  const handleError = (errorMessage, input) => {
    setErrors((prevState) => ({ ...prevState, [input]: errorMessage }));
  };

  return (
    <SafeAreaView style={{backgroundColor: '#010A43',width:wp('100%'),height:hp('150%')}}>
      <Loader visible={loading} />
      <ScrollView 
        contentContainerStyle={{
          paddingTop: 80,
          paddingHorizontal: 20,
        }}
      >
        <Text style={{ fontSize: 35, fontWeight: '700', color: '#fff' }}>Log in</Text>
        <Text style={{ fontSize: 14, fontWeight: '400', color: '#ffff' }}>Welcome back, Please provide your details</Text>
        
        <View style={{ marginVertical: 60 }}>
          <Input
            label="Email"
            placeholder="Email" 
            error={errors.email}
            onFocus={() => handleError(null, 'email')}
            onChangeText={text => handleOnChange(text, 'email')}
          />
          <Input
            label="Password"
            placeholder="Password" 
            error={errors.password}
            onFocus={() => handleError(null, 'password')}
            onChangeText={text => handleOnChange(text, 'password')}
            password
          />
          <Text onPress={() => navigation.navigate('ForgotPassword')} style={{ textAlign: 'right', fontSize: 14, color: '#fff' }}>Forgotten Password?</Text>

          <Button title="Continue" onPress={validate}/>
          <Text style={{ textAlign: 'center', fontSize: 14,color: '#ffff' }}>Don't have an account? <Text onPress={() => navigation.navigate('Register')} style={{ fontWeight: '700', color: '#ffff' }}>Sign Up</Text></Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Login;