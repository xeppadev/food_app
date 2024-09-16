import { View, Text } from "react-native";
import React from "react";

export default function MenuOptions() {
  return (
    <View className="flex flex-row items-center p-4  w-full h-[300px] gap-3">
      <View className="row-span-2 p-3 h-full w-2/5 rounded-2xl flex flex-col justify-between   bg-white shadow">
        <View className="flex flex-col ">
          <Text className="text-lg font-semibold">Restaurants</Text>
        </View>

        <Text className="text-[100px] text-center font-semibold">🍲</Text>
      </View>
      <View className="w-3/5 space-y-3 pr-2 ">
        <View className=" bg-white h-1/2 shadow rounded-2xl p-3">
          <Text className="text-lg font-semibold">Pharmacies </Text>

          <Text className="text-[65px] text-center font-semibold">🚑</Text>
        </View>
        <View className=" bg-white  h-1/2 shadow rounded-2xl p-3">
          <Text className="text-lg font-semibold">Supermarkets</Text>

          <Text className="text-[65px] text-center font-semibold">🛒</Text>
        </View>
      </View>
    </View>
  );
}
