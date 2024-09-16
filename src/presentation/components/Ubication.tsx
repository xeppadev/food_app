import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation, NavigationProp } from "@react-navigation/native";
import { Iconify } from "react-native-iconify";

interface RootParamList {
  Cart: undefined;
}

export default function Ubication() {
  const navigation = useNavigation<NavigationProp<RootParamList>>();
  return (
    <>
      <View className="flex flex-row items-center justify-between px-4 pb-3">
        <View>
          <View className="flex flex-row items-center ">
            <Text className="text-sm font-medium text-gray-500">
              Deliver to
            </Text>
            <Iconify
              icon="mingcute:down-fill"
              size={16}
              fontWeight={"bold"}
              color="gray"
            />
          </View>
          <Text className="text-sm font-medium text-[#FE724C]">
            4158 Oakmound Drive
          </Text>
        </View>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Cart");
          }}
          className="  rounded-full "
        >
          <Iconify icon="emojione:shopping-cart" size={35} color="white" />
        </TouchableOpacity>
      </View>
    </>
  );
}
