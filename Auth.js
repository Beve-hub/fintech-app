import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Boarding from './component/onboarding/Boarding';
import Board from './component/onboarding/Board';
import Login from './component/onboarding/Login';
import Register from './component/onboarding/Register';
import Home from './component/main/Home';
import Send from './component/main/Send';
import Request from './component/main/Request';
import TransactionPin from './component/main/TransactionPin';
import Receipt from './component/main/Receipt';
import SplashScreen from './component/onboarding/SplashScreen';



const Stack = createStackNavigator();


const Auth = () => {
  return (
    < NavigationContainer >
      <Stack.Navigator>
      
      <Stack.Screen name="SplashScreen" component={SplashScreen} options={{ headerShown: false }}/>        
        <Stack.Screen name="TransactionPin" component={TransactionPin} options={{ headerShown: false }}/>
        <Stack.Screen name="Send" component={Send} options={{ headerShown: false }}/>
        <Stack.Screen name="Home" component={Home} options={{ headerShown: false }}/>
        <Stack.Screen name="Boarding" component={Boarding} options={{ headerShown: false }}/>
        <Stack.Screen name="Board" component={Board} options={{ headerShown: false }}/>
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }}/>
        <Stack.Screen name="Register" component={Register} options={{ headerShown: false }}/>      
        <Stack.Screen name="Request" component={Request} options={{ headerShown: false }}/>
        <Stack.Screen name="Receipt" component={Receipt} options={{ headerShown: false }}/>
        
      </Stack.Navigator>
    </ NavigationContainer >
  )
}

export default Auth