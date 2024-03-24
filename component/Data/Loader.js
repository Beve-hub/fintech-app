import React from 'react'
import {  StyleSheet, View, useWindowDimensions,Text,Image } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";

const Loader = ({visible = false}) => {
 const {height, width} = useWindowDimensions();
  return (
   visible && (
   <View style={[style.container, {height, width}]}>
    <View style={style.loader}>
        <Image source={require('../../assets/image/loader.gif')} style={{ width: wp(20), height: wp(20) }} />
        <Text style={{marginLeft:10, fontSize:16, color: "#426DDC"}}>Loading....</Text>
    </View>
   </View>
   )
  )
}


const style = StyleSheet.create({
    container: {
        flex: 1,
        position: 'absolute',
        zIndex:10,
        backgroundColor: 'rgba(0,0,0,0.5)',
        justifyContent: 'center',
    },
    loader: {
        height:200,
        backgroundColor: '#ffff',
        marginHorizontal: 50,
        borderRadius:5,
        flexDirection: 'grid',
        display:'grid',
        justifyContent:'center',
        alignItems: 'center',
        paddingHorizontal:20,
    }
})
export default Loader