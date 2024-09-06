import { View, TextInput } from "react-native";
import React from "react";
import { Iconify } from "react-native-iconify";

export default function HeaderSearch() {
  return (
    <>
      <View className="flex flex-row items-center space-x-2 px-4 pb-2">
        <View className="flex-1 flex-row items-center p-3 rounded-full border border-gray-200 ">
          <Iconify icon="carbon:search" size={24} color="#d1d5db" />
          <TextInput
            placeholder="Find for food or restaurant"
            className="ml-2 flex-1"
          />
        </View>
        <View className="p-3 bg-[#FE724C] rounded-full ">
          <Iconify icon="mage:filter" size={24} color="white" />
        </View>
      </View>
    </>
  );
}
