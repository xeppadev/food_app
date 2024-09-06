import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation, NavigationProp } from "@react-navigation/native";

interface RootParamList {
  Checkout: undefined;
}

export default function CheckoutButton() {
  const navigation = useNavigation<NavigationProp<RootParamList>>();

  return (
    <View className="absolute bottom-5 z-50 w-[90%] mx-4">
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Checkout");
        }}
        className="bg-[#FE724C]   rounded-full p-4"
      >
        <Text className="text-white uppercase text-center text-lg font-medium">
          Checkout
        </Text>
      </TouchableOpacity>
    </View>
  );
}
