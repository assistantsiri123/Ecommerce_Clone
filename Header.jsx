import { View, Text, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import AntDesign from "react-native-vector-icons/AntDesign";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useNavigation } from '@react-navigation/native';
const Header = ({ iscart }) => {
  const navigation=useNavigation();
  return (
    <View style={{flexDirection:"row", justifyContent:"space-between", alignItems:"center"}}>
    <TouchableOpacity 
    onPress={()=>{
      navigation.navigate("HOME_STACK");
    }}
    style={{height:44, width:45, backgroundColor:"#FFFFFF", justifyContent:"center", alignItems:"center", borderRadius:22}}>
    { iscart ? (
      <Ionicons name={"chevron-back"} size={24} color={"#E96E6E"} />
    ) : (
      <AntDesign name="appstore-o" size={40} color="red" />
    )}
    </TouchableOpacity>
    {
      iscart && <Text style={{fontSize:22, color:"black"}}>My Cart</Text>
      
    }
    <Image source={require("../Assets/man.jpg")} style={{height:70, width:70}} 
      />
    </View>
  );
};
export default Header;