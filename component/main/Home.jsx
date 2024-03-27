import React, { useEffect, useState } from "react";
import {
  View, Text, TouchableOpacity, Image, SafeAreaView, FlatList,
  StyleSheet,  ScrollView, Dimensions, Modal,} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { StatusBar } from "expo-status-bar";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome6 } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { MaterialIcons } from '@expo/vector-icons';
import DialPad from '../Data/DialPad';
import Loader from "../Data/Loader";

const {width} = Dimensions.get('window')

const transactionData = [
  {
    id: 1,
    image: require("../../assets/image/image_pro1.png"),
    name: "Onome Adetayo",
    amount: "200,000",
    status: 'success'
  },
  {
    id: 2,
    image: require("../../assets/image/image_pro2.png"),
    name: "Mercy Popoola",
    amount: "110,000",
    status: 'pending'
  },
  {
    id: 3,
    image: require("../../assets/image/image_pro3.png"),
    name: "Kingsley Abiodun",
    amount: "10,000",
    status: 'failed'
  },
  {
    id: 4,
    image: require("../../assets/image/image_pro4.png"),
    name: "Adeboye Usman",
    amount: "200,000",
    status: 'success'
  },
];




const Home = ({ navigation }) => {
  const [userDetails, setUserDetails] = useState(null);
  const [modal, setModal] = useState(false);
  const [amount, setAmount] = useState('');
  const [loading, setLoading] = useState(false);
  

  const AmountLength  = 10;

  const formatAmountWithCommas = (amount) => {
   
    return parseFloat(amount).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
  }

  const remove = (item) => {
    if (item === 'del') {
      setAmount(prevAmount => prevAmount.slice(0, -1));
    } else {
      setAmount(prevAmount => prevAmount + item);
    }
  }

  const handlePress = (item) => {
    if (item === 'del') {
      setAmount((prev) => prev.slice(0, -1));
    } else if (typeof item === 'number') {
      if (amount.length === AmountLength) return;
      setAmount((prev) => prev + item);
    }
    
  };
  const openModal = () => {
      setModal(true);
  }

  const closeModal = () => {
      setModal(false);
  }


  useEffect(() => {
    getUserDetails();
  }, []);

  const getUserDetails = async () => {
    try {
      const userData = await AsyncStorage.getItem("user");
      if (userData) {
        setUserDetails(JSON.parse(userData));
      }
    } catch (error) {
      console.error("Error getting user details:", error);
    }
  };

  const renderItem = ({ item }) => {
    let amountColor = '000';
    let statusIcon = null;


    switch (item.status) {
      case 'success' :
        amountColor = '#1DC7AC';
        statusIcon = <Ionicons name="checkmark-circle" size={14} color="white" />;
        break;
      case 'pending' : 
        amountColor = '#FAAD39';  
        statusIcon = <Ionicons name="hourglass" size={14} color="white" />;             
        break; 
        case 'failed' : 
        amountColor = '#FE4A54';  
        statusIcon = <Ionicons name="close-circle" size={14} color="white" />;
        break;   
      default :
        amountColor = 'white';  
    }
    return (
      <View style={{ flexDirection: "row", display: "flex", alignItems: "center", justifyContent:'space-between', padding:15, backgroundColor:'#858EC550',}}>
        <View style={{ flexDirection: "row", display: "flex", alignItems: "center",  gap: 15,}}>
        <Image source={item.image} style={{width:wp(10),height:wp(10)}}/>
        <View style={{gap:10}}>
        <Text style={{color:'#858EC5', fontWeight:'bold',fontSize:16}}>{item.name}</Text>
        <View style={{...styles.amount, backgroundColor: amountColor, flexDirection:'row', display:'flex', alignItems:'center', justifyContent:'flex-start',  paddingLeft:15, paddingVertical:2, gap:5, borderRadius:20}}>
        <Text >{statusIcon}</Text>
        <Text style={{color:'#fff'}}>{item.status}</Text>
        </View>
        </View>
        </View>                
        <Text style={{...styles.amount, color: amountColor,fontWeight:'bold'}}><FontAwesome6 name="naira-sign" size={12}/> {item.amount}</Text>
      </View>
    );
  
  }
  return (
    <SafeAreaView
      style={{
        backgroundColor: "#010A43",
        width: wp("100%"),
        height: hp("150%"),   

      }}
    >
      <StatusBar style="light" />
      <View
        style={{
          flexDirection: "row",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 20,
          marginTop: 40,
          paddingHorizontal: 20,
        }} >
        <View
          style={{
            flexDirection: "row",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 10,
          }}
        >
          <TouchableOpacity
            activeOpacity={0.7}
            style={{
              color: "#fff",
              backgroundColor: "#212A6B",
              padding: 10,
              borderRadius: 20,
            }}
          >
            <Ionicons name="menu-outline" size={24} color="#FF2E63" />
          </TouchableOpacity>
          <Text style={{ color: "#fff", fontWeight: "bold", fontSize: 18 }}>
            Hello {userDetails?.userName},
          </Text>
        </View>
        <TouchableOpacity
          activeOpacity={0.7}
          style={{
            color: "#fff",
            backgroundColor: "#212A6B",
            padding: 10,
            borderRadius: 10,
          }}
        >
          <Text style={{ color: "#426DDC", fontWeight: "bold" }}>
            Add Money
          </Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          flexDirection: "grid",
          display: "grid",
          alignItems: "flex-start",
          justifyContent: "flex-start",
          gap: 30,
          marginTop: 40,
          paddingHorizontal: 20,
        }}
      >
        <View>
          <Text style={{ color: "#fff" }}>Your current balance is</Text>
          <Text
            style={{
              flexDirection: "row",
              display: "flex",
              color: "#fff",
              fontWeight: "bold",
              fontSize: 30,
              gap: 20,
            }}
          >
            <FontAwesome6 name="naira-sign" size={30} color="#fff" />
            200,000
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 10,
          }}
        >
          <TouchableOpacity
            activeOpacity={0.7}
            style={{
              color: "#fff",
              paddingHorizontal: 25,
              paddingVertical: 15,
              borderRadius: 10,
              borderColor: "#212A6B",
              borderWidth: 1,
            }}
          >
            <Text
              style={{ color: "#426DDC", fontWeight: "bold", fontSize: 16 }}
            >
              Request money
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={openModal}
            style={{
              color: "#fff",
              paddingHorizontal: 30,
              paddingVertical: 15,
              borderRadius: 10,
              borderColor: "#212A6B",
              borderWidth: 1,
            }}
          >
            <Text
              style={{ color: "#426DDC", fontWeight: "bold", fontSize: 16 }}
            >
              Send money
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      <View
        style={{
          backgroundColor: "#10194B",
          height: hp("80%"),
          marginTop: 70,
          borderTopEndRadius: 20,
          borderTopStartRadius: 20,
          paddingHorizontal: 10
        }}
      >
        <View
          style={{
            flexDirection: "row",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text
            style={{
              width: wp(15),
              height: hp(0.8),
              backgroundColor: "#426DDC",
              borderRadius: 20,
              margin: 10,
            }}
          ></Text>
        </View>

        <View
          style={{
            flexDirection: "row",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            paddingHorizontal: 10,
          }}
        >
          <Text style={{ color: "#fff" }}>All Transactions</Text>

          <View
            style={{
              flexDirection: "row",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: 10,
              gap: 10,
            }}
          >
            <Text style={{ color: "#4E589F" }}>Sort by:</Text>
            <View
              style={{
                flexDirection: "row",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Text style={{ color: "#fff" }}>Recent</Text>
              <Feather name="chevron-down" size={20} color="#fff" />
            </View>
          </View>
        </View>

       
          <FlatList
            data={transactionData}
            renderItem={renderItem}
            keyExtractor={(item) => item.id.toString()}
            showsVerticalScrollIndicator={true}
            VerticalScroll={true}
            contentContainerStyle={{gap:10, paddingVertical:20,}}
          />
      
      
      </View>



      <Modal
        animationType="slide"
        transparent={true}
        visible={modal}
        onRequestClose={() => {
           setModal(!modal);
        }}
        style={{flexDirection: "grid",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor:'#121212',
         height:hp('100%')}}>

        <Loader visible={loading} />


        <View style={{flexDirection: "grid",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",backgroundColor:'#121212', height:hp('100%')}}>
          <View  style={{  flexDirection: "row",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",marginTop:30}}>
            <TouchableOpacity             
              activeOpacity={0.7}
              onPress={() => setModal(!modal)}>
              <MaterialIcons name="cancel" size={35} color="white" />
            </TouchableOpacity>
          </View>
        
          <View style={{ backgroundColor: '#10194E', height: '85%', width: '100%', marginTop: 40 }}>

          <View style={{marginVertical:20}}>
     
      
          <TouchableOpacity  style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
            <FontAwesome6 name="naira-sign" size={35} color="#fff" />
            <Text style={{color:'#fff', fontSize:40, fontWeight:'bold'}}>{amount.length === 0 ? '0.00' : formatAmountWithCommas(amount)}</Text>
          </TouchableOpacity>
     
    
    </View>

    
        <DialPad remove={remove}
         onPress={handlePress} />
   

   <View style={{ flexDirection: 'row', justifyContent: 'center', marginBottom: 50 }}>
  <TouchableOpacity
    onPress={() => navigation.navigate('Send', { amount: amount })} 
    activeOpacity={0.7}
    style={{
      backgroundColor: '#FF2E63',
      height: 45,
      width: '50%',
      elevation: 10,
      marginTop: 40,
      flexDirection: 'row',
      paddingVertical: 9,
      justifyContent: 'center',
      borderRadius: 10,
      marginVertical: 10,
    }}
  >
    <Text style={{ color: 'white', fontSize: 18 }}>Send Money</Text>
  </TouchableOpacity>
</View>

    </View>
        </View>


        </Modal>
    </SafeAreaView>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22,
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  
});

export default Home;
