import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  Clipboard,
  Modal,  
} from "react-native";
import React, { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Entypo } from "@expo/vector-icons";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { FontAwesome6 } from "@expo/vector-icons";
import DialPad from "../Data/DialPad";
import Loader from "../Data/Loader";
import { Bank } from "../Data/Banks";
import { Dropdown } from "react-native-element-dropdown";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const UsdCode = ({ navigation }) => {
  const [modal, setModal] = useState(false);
  const [amount, setAmount] = useState("");
  const [loading, setLoading] = useState(false);
  const [selectedBank, setSelectedBank] = useState(null);
  const [isFocus, setIsFocus] = useState(false);
  const [userDetails, setUserDetails] = useState(null);

 

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

  const copyToClipboard = () => {
    const codeToCopy = JSON.stringify(" *400*000*2356#");
    Clipboard.setString(codeToCopy);
    };

  const AmountLength = 10;

  const formatAmountWithCommas = (amount) => {
    return parseFloat(amount)
      .toFixed(2)
      .replace(/\d(?=(\d{3})+\.)/g, "$&,");
  };

  const remove = (item) => {
    if (item === "del") {
      setAmount((prevAmount) => prevAmount.slice(0, -1));
    } else {
      setAmount((prevAmount) => prevAmount + item);
    }
  };

  const handlePress = (item) => {
    if (item === "del") {
      setAmount((prev) => prev.slice(0, -1));
    } else if (typeof item === "number") {
      if (amount.length === AmountLength) return;
      setAmount((prev) => prev + item);
    }
  };

  const openModal = () => {
    setModal(true);
  };

  const closeModal = () => {
    setModal(false);
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
          marginHorizontal: 20,
          marginVertical: 40,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "flex-start",
            gap: 70,
          }}
        >
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => navigation.navigate("Request")}
            style={{
              backgroundColor: "#426DDC50",
              width: wp(10),
              height: hp(5),
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 20,
            }}
          >
            <Entypo name="chevron-small-left" size={24} color="#fff" />
          </TouchableOpacity>
          <Text style={{ color: "#fff", fontSize: 20, fontWeight: "bold" }}>
            Request Via USSD
          </Text>
        </View>
      </View>

      <View style={{}}>
        <TouchableOpacity
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <FontAwesome6 name="naira-sign" size={35} color="#fff" />
          <Text style={{ color: "#fff", fontSize: 40, fontWeight: "bold" }}>
            {amount.length === 0 ? "0.00" : formatAmountWithCommas(amount)}
          </Text>
        </TouchableOpacity>
      </View>

      <DialPad remove={remove} onPress={handlePress} />

      <View style={{ position: "absolute", top: hp("80%"), left: wp("25%") }}>
        <TouchableOpacity
          onPress={openModal}
          activeOpacity={0.7}
          style={{
            backgroundColor: "#FF2E63",
            elevation: 10,
            marginTop: 40,
            flexDirection: "row",
            paddingHorizontal: 50,
            paddingVertical: 10,
            justifyContent: "center",
            borderRadius: 10,
            marginVertical: 10,
          }}
        >
          <Text style={{ color: "white", fontSize: 18 }}>Continue</Text>
        </TouchableOpacity>
      </View>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modal}
        onRequestClose={() => {
          setModal(!modal);
        }}
        style={{
          flexDirection: "grid",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#121212",
          height: hp("100%"),
        }}
      >
        <Loader visible={loading} />

        <View
          style={{
            flexDirection: "grid",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#12121270",
            height: hp("100%"),
          }}
        >
          <View
            style={{
              backgroundColor: "#10194E",
              height: "100%",
              width: "100%",
              marginTop: "90%",
            }}
          >
            <View
              style={{
                flexDirection: "row",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                margin: 20,
              }}
            >
              <View>
              <Text style={{ color: "white", fontSize: 12, fontWeight:'medium' }}>{userDetails?.email}</Text>
              <Text style={{ color: "#FF2E63", fontSize: 16, fontWeight:'bold' }}><FontAwesome6 name="naira-sign" size={15} color="#FF2E63" />{amount.length === 0 ? "0.00" : formatAmountWithCommas(amount)}</Text>
              </View>
              <TouchableOpacity
                activeOpacity={0.7}
                onPress={() => setModal(!modal)}
              >
                <Text
                  style={{ fontSize: 20, fontWeight: "bold", color: "white" }}
                >
                  X
                </Text>
              </TouchableOpacity>
            </View>



              
            <View style={{ marginHorizontal: 40, marginVertical: 30, gap: 20 }}>            
              <Text style={{ color: "#ededed90", fontSize: 14 }}>
                Select your bank to begin payment
              </Text>
              <Dropdown
                style={[ { height: 40, borderColor: "gray", borderWidth: 0.5, borderRadius: 8, paddingHorizontal: 8, },isFocus && { borderColor: "blue" },]}
                placeholderStyle={{ fontSize: 16, color: "white" }}
                selectedTextStyle={{ fontSize: 16, color: "white" }}
                inputSearchStyle={{ height: 40, fontSize: 16 }}
                iconStyle={{ width: 20, height: 20 }}
                data={Bank[0].entity}
                maxHeight={300}
                labelField="name"
                placeholder={!isFocus ? selectedBank : "..."}
                searchPlaceholder="Search..."
                value={selectedBank}
                onFocus={() => setIsFocus(true)}
                onBlur={() => setIsFocus(false)}
                onChange={(item) => { setSelectedBank(item.name); }}/>

              <View style={{backgroundColor: "#010A43",padding: 10,}}>
                <Text style={{ color: "#ededed90", fontSize: 14 }}>
                  Dial the code below on your mobile phone to complete payment.
                </Text>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 20,
                    paddingVertical: 4,
                    borderRadius: 10,
                  borderColor: "#fff",
                  borderWidth: 1,
                    marginVertical: 20,                   
                  }}
                >
                  <Text
                    style={{ color: "white", fontSize: 20, fontWeight: "bold" }}
                  >
                    *400*000*2356#
                  </Text>
                  <TouchableOpacity
                    activeOpacity={0.7}
                    onPress={copyToClipboard}
                    style={{
                      width: wp(10),
                      height: hp(5),
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "center",
                      borderRadius: 20,
                    }}
                  >
                    <MaterialCommunityIcons
                      name="content-copy"
                      size={20}
                      color="white"
                    />
                  </TouchableOpacity>
                </View>
              </View>

              <View>
              <TouchableOpacity
                activeOpacity={0.7}
                
                style={{
                  flexDirection: "row", alignItems: "center",justifyContent: "center", paddingHorizontal: 25,
                  paddingVertical: 10, marginVertical: 10, borderRadius: 10, borderColor: "#fff", borderWidth: 1, }} >
                <Text
                  style={{ color: "#fff",  fontSize: 16 }}
                >
                  I have made the transfer
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                activeOpacity={0.7}                
                style={{ flexDirection: "row",alignItems: "center", justifyContent: "center", paddingHorizontal: 25,  paddingVertical: 10,borderRadius: 10, borderColor: "#fff", borderWidth: 1,  gap:10}} >
                 <FontAwesome6 name="arrow-right-arrow-left" size={20} color="white"  />
                <Text  style={{ color: "#fff", fontSize: 16,  }}  >                 
                  Change payment method
                </Text>
              </TouchableOpacity>
              </View>

            </View>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

export default UsdCode;
