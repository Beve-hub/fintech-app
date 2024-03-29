import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
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
import Bills from './component/main/Bills';
import Investment from './component/main/Investment';
import { Ionicons } from '@expo/vector-icons';
import Transaction from './component/main/Transaction';
import { FontAwesome } from '@expo/vector-icons';
import Profile from './component/main/Profile';
import CardTransfer from './component/main/CardTransfer';
import UsdCode from './component/main/UsdCode';


const Stack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();


function TabGroup() {
  return(
      <Tab.Navigator 
      initialRouteName="Home"
      activeColor='#FF2E63'
      inactiveColor="#CDCDCD"
      activeBackgroundColor="green"
      inactiveBackgroundColor="green"
      style={{ backgroundColor: 'green' }}
          barStyle={{ backgroundColor: "#010A43" }}
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "red",
        tabBarInactiveTintColor: "blue"
      }}
     >
    <Tab.Screen  
          name="Home"
          component={Home}
          options={{ title: 'Home',
          tabBarIcon: ({focused}) => {
              return <Ionicons name={focused ? "home" : 'home-outline'} 
              size={22} color={focused ? '#FF2E63' : "#CDCDCD"}
               />
          }
      }} />
    <Tab.Screen
     name="Bills" 
    component={Bills}
     options={{ title: 'Bills',
          tabBarIcon: ({focused}) => {
              return <Ionicons name={focused ? "card" : 'card-outline'  }
              size={22} color={focused ? '#FF2E63' : "#CDCDCD"}
               />
          }
      }}
     />

  <Tab.Screen
     name="Investment"
     component={Investment}
      options={{ title: 'Investment',
          tabBarIcon: ({focused}) => {
              return <Ionicons name={focused ? "wallet" : 'wallet-outline'  }
              size={22} color={focused ? '#FF2E63' : "#CDCDCD"}
               />
          }
      }}
     />
    <Tab.Screen
     name='Profile'
     component={Profile}
      options={{ title: 'Profile',
          tabBarIcon: ({focused}) => {
              return <FontAwesome name={focused ? 'user-circle' : "user-circle-o"}
              size={22} color={focused ? '#FF2E63' : "#CDCDCD"}
               />
          }
      }}
     />
   
      </Tab.Navigator>
  )
}



const Auth = () => {
  return (
    < NavigationContainer >
      <Stack.Navigator>      
        <Stack.Screen name="SplashScreen" component={SplashScreen} options={{ headerShown: false }}/>        
        <Stack.Screen name="TabGroup" component={TabGroup} options={{ headerShown: false }} />
        <Stack.Screen name="TransactionPin" component={TransactionPin} options={{ headerShown: false }}/>
        <Stack.Screen name="Send" component={Send} options={{ headerShown: false }}/>
        <Stack.Screen name="Home" component={Home} options={{ headerShown: false }}/>
        <Stack.Screen name="Boarding" component={Boarding} options={{ headerShown: false }}/>
        <Stack.Screen name="Board" component={Board} options={{ headerShown: false }}/>
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }}/>
        <Stack.Screen name="Register" component={Register} options={{ headerShown: false }}/>      
        <Stack.Screen name="Request" component={Request} options={{ headerShown: false }}/>
        <Stack.Screen name="Receipt" component={Receipt} options={{ headerShown: false }}/>   
        <Stack.Screen name="UsdCode" component={UsdCode} options={{ headerShown: false }}/>   
        <Stack.Screen name="CardTransfer" component={CardTransfer} options={{ headerShown: false }}/>        
      </Stack.Navigator>
    </ NavigationContainer >
  )
}

export default Auth