import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation, NavigationProp } from "@react-navigation/native";
import { useSelector } from "react-redux";
import { selectCartItems, selectCartTotal } from "../store/slices/cartSlice";

interface RootParamList {
  Cart: undefined;
}

export default function AddCart() {
  const navigation = useNavigation<NavigationProp<RootParamList>>();
  const cartItems = useSelector(selectCartItems);
  const cartTotal = useSelector(selectCartTotal);
  const cartRedonded = cartTotal.toFixed(2);
  if (cartItems.length === 0) return;

  return (
    <View className="absolute bottom-5 z-50 w-[90%] mx-4">
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Cart");
        }}
        className="bg-[#FE724C]  flex flex-row justify-between items-center   rounded-full p-4"
      >
        <View className="p-1.5 px-4 rounded-full bg-white/30">
          <Text className="text-white font-bold text-lg ">
            {cartItems.length}
          </Text>
        </View>
        <Text className="text-white uppercase text-center text-lg font-medium">
          Add to Cart
        </Text>
        <Text className="text-white font-medium text-lg">${cartRedonded}</Text>
      </TouchableOpacity>
    </View>
  );
}
