// import React from 'react';
// import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
// const imagesUrl= "https://res.cloudinary.com/dlc5c1ycl/image/upload/v1710567613/cwlk21f74nd9iamrlzkh.png";
// import MaterialIcons  from "react-native-vector-icons/MaterialIcons";

// const CartCart = ({item, deleteCartItem}) => {
//   return (
//     <View style={{marginVertical:10, flexDirection:"row"}}>
//     <Image source={{uri: item.image}} style={{height:110, width:"30%"}} />
//     <View style={{flex:1, marginHorizontal:10}}>
//     <Text style={{fontSize:18, color:"#444444"}}>{item.title}</Text>
//     <Text style={{color:"darkgray", marginVertical:8}}>${item.price}</Text>
//     <View style={{flexDirection:"row"}}>
//     <View style={[styles.sizecircles, { backgroundColor:item.color}]} />
//     <View style={{height:30, width:30, backgroundColor:"white", borderRadius:20, borderWidth:2, marginLeft:10, justifyContent:"center", alignItems:"center"}}>
//     <Text style={{fontSize:18, fontWeight:"bold"}}>{item.size}</Text>
//     </View>
//     </View>
//     </View> 
//     <TouchableOpacity onPress={() => {
//       deleteCartItem(item);
//     }}>
//     <MaterialIcons name={"delete"} size={28} color={"#E96E6E"} />
//     </TouchableOpacity> 
//      </View>
//   );
// };
// export default CartCart;

// const styles=StyleSheet.create({
//   sizecircles:{
//     height:30,
//      width:30, 
//      borderRadius:20,
//   },
// });

import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import MaterialIcons  from "react-native-vector-icons/MaterialIcons";
import { fonts } from "../utils/fonts";

const CartCart = ({ item, handleDeleteItem }) => {
  const imageUrl =
    "https://res.cloudinary.com/dlc5c1ycl/image/upload/v1710567613/cwlk21f74nd9iamrlzkh.png";
  return (
    <View style={styles.card}>
      <Image source={{ uri: item.image }} style={styles.image} />
      <View style={styles.content}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.price}>${item.price}</Text>
        <View style={styles.textCircleContainer}>
          <View
            style={[styles.circle, { backgroundColor: item?.color || "red" }]}
          ></View>
          <View style={styles.sizeContainer}>
            <Text style={styles.sizeText}>{item.size}</Text>
          </View>
        </View>
      </View>
      <TouchableOpacity onPress={() => handleDeleteItem(item.id)}>
         <MaterialIcons name={"delete"} size={28} color={"#E96E6E"} />
      </TouchableOpacity>
    </View>
  );
};

export default CartCart;

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    marginVertical: 15,
  },
  image: {
    height: 125,
    width: "30%",
    resizeMode: "contain",
    borderRadius: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: "700",
    fontFamily: fonts.medium,
    color: "#444444",
  },
  price: {
    fontSize: 18,
    fontFamily: fonts.medium,
    color: "#797979",
    marginVertical: 7,
    fontWeight: "700",
  },
  content: {
    flex: 1,
    padding: 5,
  },
  circle: {
    height: 32,
    width: 32,
    borderRadius: 16,
  },
  sizeContainer: {
    backgroundColor: "#FFFFFF",
    height: 32,
    width: 32,
    borderRadius: 16,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 20,
  },
  sizeText: {
    fontSize: 18,
    fontWeight: "700",
    fontFamily: fonts.medium,
  },
  textCircleContainer: {
    flexDirection: "row",
  },
  deleteIcon: {
    height: 30,
    width: 30,
    marginTop: 10,
  },
});