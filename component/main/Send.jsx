import React, { useState, useEffect } from "react";
import { View, TouchableOpacity, FlatList, SafeAreaView, Image, Text, ScrollView, Modal } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import { StatusBar } from "expo-status-bar";
import { FontAwesome6, Entypo } from "@expo/vector-icons";
import Input from "../Data/Input";

const transactionData = [

  {
    id: 1,
    image: require("../../assets/image/image_pro1.png"),
    name: "Onome Adetayo",
    details: "7654390740",
    bank: 'GTbank'
  },

  {
    id: 2,
    image: require("../../assets/image/image_pro2.png"),
    name: "Mercy Popoola",
    details: "0008765443",
    bank: 'Palmpay'
  },

  {
    id: 3,
    image: require("../../assets/image/image_pro3.png"),
    name: "Kingsley Abiodun",
    details: "1234321555",
    bank: 'Access bank'
  },

  {
    id: 4,
    image: require("../../assets/image/image_pro4.png"),
    name: "Adeboye Usman",
    details: "99996543201",
    bank: 'Opay'
  },

  {
    id: 5,
    image: require("../../assets/image/image_pro5.png"),
    name: "Adeleke Adeyanju",
    details: "6765456661",
    bank: 'fidelity Bank'
  },

  {
    id: 6,
    image: require("../../assets/image/image_pro6.png"),
    name: "Adeleke Ramon",
    details: "0789543277",
    bank: 'FCMBank'
  },

];

const Send = ({route,navigation}) => {
  const [searchData, setSearchData] = useState("");
  const [filteredQuery, setFilteredQuery] = useState([]);
  const [modal, setModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  
  const { amount } = route.params || {};

  const formatAmount = (amount) => {
    return parseFloat(amount).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
  };

  useEffect(() => {
    filteredData();
  }, [searchData]);

  const filteredData = () => {
    const filtered = transactionData.filter((item) =>
      item.name.toLowerCase().includes(searchData.toLowerCase())
    );
    setFilteredQuery(filtered);
  };

  const handleSearch = (text) => {
    setSearchData(text);
     
  };

  const openModal = (item) => {
    setSelectedItem(item);
    setModal(true);
  }

  const closeModal = () => {
    setModal(false);
  }

  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity activeOpacity={0.7} onPress={() => openModal(item)} style={{ backgroundColor: '#858EC550', marginHorizontal: 20, borderRadius: 10, flexDirection: 'row', justifyContent: 'space-between', gap: 20, alignItems: 'center', paddingVertical: 5, paddingHorizontal: 10 }}>
        <Image source={item.image} style={{ width: wp(10), height: wp(10) }} />
        <View style={{ paddingHorizontal: 10 }}>
          <Text style={{ color: 'white' }}>{item.name}</Text>
          <View style={{ flexDirection: 'row', alignItems: 'center', paddingBottom: 10, gap: 10 }}>
            <Text style={{ color: "#E0E0E080" }}>{item.bank}.</Text>
            <Text style={{ color: '#E0E0E080' }}>{item.details}</Text>
          </View>
        </View>
        <Entypo name="chevron-small-right" size={24} color="#E0E0E080" style={{ paddingHorizontal: 10 }} />
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={{ backgroundColor: "#010A43", flex: 1 }}>
      <StatusBar style="light" />
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          marginTop: 20,
          paddingHorizontal: 20,
        }}
      >
        <TouchableOpacity activeOpacity={0.7} onPress={() => navigation.navigate('Home')} style={{ marginTop: 20 }}>
          <FontAwesome6 name="chevron-left" size={24} color="#fff" />
        </TouchableOpacity>

        <Input
          type="text"
          placeholder="Name or acct number..."
          iconName="search"
          iconColor="black"
          onChangeText={handleSearch}
          value={searchData}
          
        />
      </View>
      <View>
        <Text style={{ color: '#fff', margin: 10, fontSize: 16 }}>Beneficiary</Text>
        {searchData !== "" && (
          <FlatList
            data={filteredQuery}
            keyExtractor={(item, index) => index.toString()}
            renderItem={renderItem}
            contentContainerStyle={{ gap: 10, paddingVertical: 20 }}
          />
        )}
      </View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modal}
        onRequestClose={() => setModal(!modal)}
        >   

        <View style={{flexDirection: "grid", display: "flex",   alignItems: "center", justifyContent: "center", backgroundColor:'#12121260', height:hp('100%')}}>

          <View style={{ backgroundColor: '#10194E', height: '60%', width: '100%', marginTop: '90%' }}>

            <View style={{marginVertical:20}}>


            <View  style={{  flexDirection: "row",
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",marginRight:30}}>
            <TouchableOpacity             
              activeOpacity={0.7}
              onPress={() => setModal(!modal)}
              >
              <Text style={{color:'#fff',backgroundColor:'#858EC530',paddingHorizontal:10, borderRadius:20, fontSize:16, fontWeight:'bold'}}>X</Text>
            </TouchableOpacity>
            </View>
          <View>
          
          </View>

            <View style={{flexDirection:'grid',display:'grid', alignItems: "center", justifyContent: "center",}}>

            <Text style={{fontWeight:'bold',color:'#fff',fontSize:18, marginLeft:10,paddingVertical:10}}>Payment Summary</Text>
              
              {selectedItem && (
                <View style={{flexDirection:'grid',display:'grid', alignItems: "center", justifyContent: "center",gap:5}}>
                  <Image source={selectedItem.image} style={{ width: wp(15), height: wp(15) }} />
                   <Text style={{color:'#fff',fontSize:14, }}>Acct Name: <Text style={{color:'#fff',fontSize:16, fontWeight:'bold'}}>{selectedItem.name}</Text></Text>
                   <Text style={{color:'#fff',fontSize:14, }}>Bank Name: <Text style={{color:'#fff',fontSize:16, fontWeight:'bold'}}>{selectedItem.bank}</Text></Text>
                   <Text style={{color:'#fff',fontSize:14, }}>Acct Number: <Text style={{color:'#fff',fontSize:16, fontWeight:'bold'}}>{selectedItem.details}</Text></Text>
                   
                    <Text style={{color:'#fff',fontSize:14, }}>Amount: <Text style={{color:'#fff',fontSize:18, fontWeight:'bold'}}><FontAwesome6 name="naira-sign" size={18} color="#fff" />{formatAmount(amount)}</Text></Text>
                </View>
              )}

              

                  
            </View>



            <View style={{ flexDirection: 'grid', display: 'grid', justifyContent: 'center', alignItems:'center',  }}>
               <TouchableOpacity
       onPress={() => navigation.navigate('TransactionPin',{amount: amount, selectedItem: selectedItem })} 
         activeOpacity={0.7}  style={{
           backgroundColor: '#FF2E63',
              width: '50%', elevation: 10, marginTop: 40,flexDirection: 'row', paddingVertical: 9, display: 'flex', justifyContent: 'center', borderRadius: 10,    
         }}>
         <Text style={{ color: 'white', fontSize:14 }}>Send money</Text>
               </TouchableOpacity>
               <TouchableOpacity
       onPress={() => navigation.navigate('Send')} 
         activeOpacity={0.7}
         style={{
           borderWidth: 1,
           borderColor:'#fff',
           
           width: '50%',
           flexDirection: 'row',
           paddingVertical: 9,
           display: 'flex',
           justifyContent: 'center',
           borderRadius: 10,
           marginVertical: 10,
         }}
       >
         <Text style={{ color: '#fff', fontSize:14 }}>Cancel</Text>
               </TouchableOpacity>
             </View>

            </View>
         
          </View>
          </View>   
      </Modal>
    </SafeAreaView>
  );
};

export default Send;
