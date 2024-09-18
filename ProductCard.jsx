import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { Image, Text, View, TouchableOpacity } from 'react-native';
import AntDesign from "react-native-vector-icons/AntDesign";

const ProductCard = ({item, handleLiked }) => {
  const navigation=useNavigation();
    // const [isliked,setIsLiked]=useState(false);
  return (
    <TouchableOpacity 
    onPress={()=>{
      navigation.navigate("PRODUCTS_DETAILS",{item});
    }}
    style={{flex:1, marginTop:10}}>
    <Image source={{uri: item.image}} style={{height:210, borderRadius:20, width:"90%", marginVertical:12, marginLeft:10}} />
    <View style={{paddingHorizontal:15}}>
    <Text style={{fontSize:18, fontWeight:"600", color:"#444444"}}>{item.title}</Text>
    <Text style={{fontSize:18, fontWeight:"600", color:"#9C9C9C"}}>{item.price}</Text>
    
    </View>
    <TouchableOpacity
    onPress={()=> {handleLiked(item);
    }}
    style={{height:30, width:30, backgroundColor:"#FFFFFF", justifyContent:"center", alignItems:"center", borderRadius:22, position:"absolute", top:22, right:15}}>
    {
        item?.isliked ? (
            <AntDesign name="heart" color="red" size={22} />
        ) : (
          <AntDesign name="hearto" color="red" size={22} />
        )
    }
    </TouchableOpacity>
    </TouchableOpacity>
  );
};
export default ProductCard;