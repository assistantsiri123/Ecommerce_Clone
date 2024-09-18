import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';

const Category = ({ item, selectedCategory, setSelectedCategory }) => {
  return (
    <TouchableOpacity onPress={()=> setSelectedCategory(item)} >
      <Text style={[styles.categoryText,
        selectedCategory === item && {
        color:"#FFFFFF", 
        backgroundColor:"#E96E6E",
      },
     ]}
     >
     {item}
     </Text>
    </TouchableOpacity>
  );
};
const styles=StyleSheet.create({
  categoryText:{
    fontSize:18, 
    color:"#938F8F", 
    backgroundColor:"#DFDCDC", 
    fontWeight:"bold", 
     paddingHorizontal:10,
      borderRadius:16, 
      textAlign:"center", 
      marginHorizontal:10, 
      paddingVertical:10
  }
})
export default Category;