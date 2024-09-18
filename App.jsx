import { View, Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {NavigationContainer} from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/Screens/HomeScreen';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from "react-native-vector-icons/FontAwesome";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import ProductDetailScreen from './src/Screens/ProductDetailScreen';
import CartScreen from './src/Screens/CartScreen';
import { CardContext, CartContext, CartProvider } from './Context/CartContext';
import { useContext } from 'react';
import AccountScreen from './src/Screens/AcccountScreen';
import ReorderScreen from './src/Screens/ReorderScreen';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();
function Home(){
  return(
    <View>
    <Text>Ahsan</Text>
    </View>
  );
}

const MyHomeStack = () => {
  return(
    <Stack.Navigator screenOptions={{headerShown:false}} initialRouteName='HomeScreen'>
    <Stack.Screen name="HOME" component={HomeScreen} />
    <Stack.Screen name="PRODUCTS_DETAILS" component={ProductDetailScreen} />
  </Stack.Navigator>
  );
};
const App = () => {
  return (
    <CartProvider>
    <NavigationContainer>
    <Tab.Navigator screenOptions={{headerShown:false, tabBarShowLabel:false, tabBarActiveTintColor:"#E96E6E"}} initialRouteName='CartScreen'>
    <Tab.Screen name='HOME_STACK' component={MyHomeStack} options={{
      tabBarIcon: ({size,focused,color}) => {
        return <Entypo name="home" size={size} color={color} />
      }
    }}/>
    <Tab.Screen name='REORDER' component={ReorderScreen} options={{
      tabBarIcon: ({size,color}) => {
        return <FontAwesome name="reorder" size={size} color={color} />
      }
    }}/>
    <Tab.Screen name='CART' component={CartScreen} 
    options={{
      tabBarIcon: ({size,color}) => {
        const { cartItems } = useContext(CartContext);
          return (
            <View style={{position:"relative"}}>
            <FontAwesome name="shopping-cart" size={size} color={color} />
            <View style={{height:16, width:16, borderRadius:7, justifyContent:"center", alignItems:"center", position:"absolute", top:-12, right:-5, backgroundColor:color}}>
            <Text style={{fontSize:12, color:"white", fontWeight:"600"}}>{cartItems.length}</Text>
            </View>
            </View>
          );
        },
    }} />
    <Tab.Screen name='ACCOUNT' component={AccountScreen}  options={{
      tabBarIcon: ({size,color}) => {
        return <MaterialCommunityIcons name="account" size={size} color={color} />
      }
    }} />
    </Tab.Navigator>
    </NavigationContainer>
    </CartProvider>
  );
};

export default App;