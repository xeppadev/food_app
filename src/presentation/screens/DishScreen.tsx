import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";

import React from "react";
import { useRoute, useNavigation } from "@react-navigation/native";
import { Iconify } from "react-native-iconify";
import Checkbox from "expo-checkbox";
import { useState } from "react";
import { DishData } from "../types/interfaces";
import CartIcon from "../components/CartIcon";
import { StatusBar } from "expo-status-bar";
import { useDispatch } from "react-redux";

export default function DishScreen() {
  const [isChecked, setChecked] = useState(false);
  const navigation = useNavigation();
  const { params } = useRoute();
  let items = (params as { data: DishData }).data;
  const dispatch = useDispatch();

  return (
    <View className="h-full">
      <CartIcon />
      <StatusBar style="light" />
      <ScrollView className="bg-white" showsVerticalScrollIndicator={false}>
        <View className="relative shadow">
          <Image className="w-full h-72 " source={items.image} />
          <View className="absolute w-full top-14 left-0 right-0  flex flex-row items-center justify-between  px-6">
            <TouchableOpacity
              onPress={() => {
                navigation.goBack();
              }}
              className=" rounded-full bg-white p-2"
            >
              <Iconify icon="mdi:arrow-left" size={20} color="#000" />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {}}>
              <View className="bg-[#FE724C] rounded-full p-1.5">
                <Iconify icon="mdi:heart" size={20} color="white" />
              </View>
            </TouchableOpacity>
          </View>
          <View className="absolute  -bottom-14 left-[33%] z-10"></View>
        </View>

        <View className="p-4 space-y-1">
          <Text className="text-2xl font-semibold">{items.name}</Text>
          <View className="flex flex-row items-center  pt-1">
            <Iconify icon="mdi:star" size={23} color="#FFD700" />
            <Text className="text-sm font-bold">{items.stars}</Text>

            <Text className="text-xs text-[#8A8E9B] uppercase">
              ({items.reviews}k)
            </Text>
            <Text className="text-[#FE724C] text-sm underline ">
              {" "}
              See Reviews
            </Text>
          </View>
          <View className="flex flex-row items-center justify-between  pt-1">
            <View className="flex flex-row items-center">
              <Iconify icon="pepicons-pop:dollar" size={20} color="#FE724C" />
              <Text className=" font-bold text-[#FE724C] text-4xl">
                {items.price}
              </Text>
            </View>
            <View className="flex flex-row items-center space-x-2">
              <TouchableOpacity
                className="p-1 rounded-full bg-white border border-[#FE724C]"
                onPress={() => {}}
              >
                <Iconify icon="tabler:minus" size={20} color="#FE724C" />
              </TouchableOpacity>
              <Text className="text-lg font-bold">1</Text>
              <TouchableOpacity
                className="p-1 rounded-full bg-[#FE724C] border border-[#FE724C]"
                onPress={() => {}}
              >
                <Iconify icon="ic:round-add" size={20} color="white" />
              </TouchableOpacity>
            </View>
          </View>
          <Text
            style={{ lineHeight: 24 }}
            className="text-[#8A8E9B] text-base "
          >
            {items.description}
          </Text>
          <Text className="text-lg font-bold">Choice of Add Ons</Text>
          <View className="flex flex-col items-start space-y-4">
            {items.extras.map((addon, key) => (
              <View
                key={key}
                className="flex flex-row justify-between w-full items-center"
              >
                <View className="flex flex-row items-center space-x-1">
                  <Text className="text-xl font-medium">{addon.image}</Text>
                  <Text className="text-base">{addon.name}</Text>
                </View>
                <View className="flex flex-row items-center space-x-2">
                  <Text className="text-base ml-2">+${addon.price}</Text>
                  <Checkbox
                    value={isChecked}
                    onValueChange={setChecked}
                    color="#FE724C"
                    className="rounded-full "
                  />
                </View>
              </View>
            ))}
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
