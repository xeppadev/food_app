import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation, NavigationProp } from "@react-navigation/native";

interface RootParamList {
  Cart: undefined;
}

export default function AddCart() {
  const navigation = useNavigation<NavigationProp<RootParamList>>();

  return (
    <View className="absolute bottom-5 z-50 w-[90%] mx-4">
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Cart");
        }}
        className="bg-[#FE724C]   rounded-full p-4"
      >
        <Text className="text-white uppercase text-center text-lg font-medium">
          Add to Cart
        </Text>
      </TouchableOpacity>
    </View>
  );
}
