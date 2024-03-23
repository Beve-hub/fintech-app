import React, { useState, useEffect } from "react";
import { View, TouchableOpacity, FlatList, SafeAreaView,Image,Text, ScrollView, Modal, } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import { StatusBar } from "expo-status-bar";
import { FontAwesome6 } from "@expo/vector-icons";
import Input from "../Data/Input";
import { Entypo } from '@expo/vector-icons';





const Send = ({ navigation }) => {

  const [searchData, setSearchData] = useState("");
  const [filteredQuery, setFilteredQuery] = useState([]);
  const [modal, setModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null)

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
    setModal(true);
    setSelectedItem(item);
}

const closeModal = () => {
    setModal(false);
}

  const renderItem = ({ item }) => {
    return (
      <ScrollView>
        <TouchableOpacity activeOpacity={0.7} onPress={ openModal} style={{backgroundColor:'#858EC550', marginHorizontal:20,borderRadius:10, flexDirection:'row', display:'row', justifyContent:'space-between',gap:20, alignItems:'center',paddingVertical:5,paddingHorizontal:10}}>
        
       
        <Image source={item.image} style={{width:wp(10),height:wp(10)}}/>


        <View style={{ paddingHorizontal:10}}>        
        <Text style={{color:'white'}}>{item.name}</Text>
        <View style={{flexDirection:'row', display:'row',  alignItems:'center', paddingBottom:10, gap:10}}>
        <Text style={{color:"#E0E0E080" }}>{item.bank}.</Text>
        <Text style={{color:'#E0E0E080'}}>{item.details}</Text>
        </View> 
        </View>
         
        <Entypo name="chevron-small-right" size={24} color="#E0E0E080" style={{ paddingHorizontal:10}}/>    
       
       
        </TouchableOpacity>
      </ScrollView>
    );
  };

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
        <Text style={{color:'#fff', margin:10, margin:10, fontSize:16}}>Beneficiary</Text>
      {searchData !== "" && (
        <FlatList
        data={filteredQuery}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderItem}
        contentContainerStyle={{gap:10, paddingVertical:20,}}
      />
      )}
      </View>
      

      <Modal
        animationType="slide"
        transparent={true}
        visible={modal}
        onRequestClose={() => {
           setModal(!modal);
        }}
        style={{flexDirection: "grid", display: "flex",   alignItems: "center", justifyContent: "center", backgroundColor:'#121212', height:hp('100%')}}>       

          {selectedItem && (<View style={{flexDirection: "grid",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",backgroundColor:'#12121250', height:hp('100%')}}>
        
        
          <View style={{ backgroundColor: '#10194E', height: '60%', width: '100%', marginTop: '70%' }}>

          <View style={{marginVertical:20}}>
     
      
          <View  style={{  flexDirection: "row",
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",marginTop:5,marginRight:30,}}>
            <TouchableOpacity             
              activeOpacity={0.7}
              onPress={() => setModal(!modal)}
              >
              <Text style={{color:'#fff',backgroundColor:'#858EC530',paddingHorizontal:10,paddingVertical:5, borderRadius:20, fontSize:16, fontWeight:'bold'}}>X</Text>
            </TouchableOpacity>
          </View>
     

          <View>
     
     <Text style={{color:'#fff'}}>{selectedItem.name}</Text>
     

     <View style={{ flexDirection: 'grid', display: 'grid', justifyContent: 'center', alignItems:'center',  }}>
       <TouchableOpacity
       onPress={() => navigation.navigate('Send')} 
         activeOpacity={0.7}  style={{
           backgroundColor: '#FF2E63',
           height: 45,   width: '50%', elevation: 10, marginTop: 40,flexDirection: 'row', paddingVertical: 9, display: 'flex', justifyContent: 'center', borderRadius: 10,    
         }}>
         <Text style={{ color: 'white', fontSize:18 }}>Send money</Text>
       </TouchableOpacity>
       <TouchableOpacity
       onPress={() => navigation.navigate('Send')} 
         activeOpacity={0.7}
         style={{
           borderWidth: 1,
           borderColor:'#464E8A',
           height: 45,
           width: '50%',
           flexDirection: 'row',
           paddingVertical: 9,
           display: 'flex',
           justifyContent: 'center',
           borderRadius: 10,
           marginVertical: 10,
         }}
       >
         <Text style={{ color: '#464E8A', fontSize:18 }}>Don't Send money</Text>
       </TouchableOpacity>
     </View>
   </View>
    
          </View>

    
      
   

      

       </View>
          </View>)}
        </Modal>
    </SafeAreaView>
  );
};


