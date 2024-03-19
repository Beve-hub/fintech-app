import {
  View,
  Text,
  TouchableOpacity,
  Image,
  SafeAreaView,
  FlatList,
  StyleSheet,
  ScrollView,
  Dimensions,
  Modal,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import React, { useState, useEffect } from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { StatusBar } from "expo-status-bar";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome6 } from "@expo/vector-icons";
import Input from "../Data/Input";
import { Feather } from "@expo/vector-icons";

const transactionData = [
  {
    id: 1,
    image: require("../../assets/image/image_pro1.png"),
    name: "Onome Adetayo",
    details: "7654390740",
  },
  {
    id: 2,
    image: require("../../assets/image/image_pro2.png"),
    name: "Mercy Popoola",
    details: "0008765443",
  },
  {
    id: 3,
    image: require("../../assets/image/image_pro3.png"),
    name: "Kingsley Abiodun",
    details: "1234321555",
  },
  {
    id: 4,
    image: require("../../assets/image/image_pro4.png"),
    name: "Adeboye Usman",
    details: "99996543201",
  },
  {
    id: 5,
    image: require("../../assets/image/image_pro5.png"),
    name: "Adeleke Adeyanju",
    details: "6765456661",
  },
  {
    id: 6,
    image: require("../../assets/image/image_pro6.png"),
    name: "Adeleke Ramon",
    details: "0789543277",
  },
];

const Send = ({ navigation }) => {
  const [searchData, setSearchData] = useState("");
  const [filteredQuery, setFilteredQuery] = useState([]);

  useEffect(() => {
    filteredData;
  }, [searchData]);

  const filteredData = () => {
    const filtered = dataArray.filter((item) =>
      item.name.toLowerCase().include(searchData.toLowerCase())
    );
    setFilteredQuery(filteredQuery);
  };

  const handleSearch = (text) => {
    setSearchData(text)
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
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 20,
          marginTop: 20,
          paddingHorizontal: 20,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 40,
          }}
        >
          <TouchableOpacity activeOpacity={0.7} style={{ marginTop: 20 }}>
            <FontAwesome6 name="chevron-left" size={24} color="#fff" />
          </TouchableOpacity>

          <Input
            type="text"
            placeholder="Search"
            iconName="search"
            iconColor="black"
            style={{ width: wp("30%") }}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Send;
