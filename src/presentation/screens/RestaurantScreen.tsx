import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import React from "react";
import { useRoute, useNavigation } from "@react-navigation/native";
import { RestaurantData } from "../types/interfaces";
import { Iconify } from "react-native-iconify";
import DishCard from "../components/DishCard";
import { StatusBar } from "expo-status-bar";
import { capitalizeFirstLetter } from "@/utils/fuctions";

export default function RestaurantScreen() {
  const navigation = useNavigation();
  const { params } = useRoute();
  let items = (params as { data: RestaurantData }).data;

  return (
    <>
      <StatusBar style="light" />
      <ScrollView className="bg-white" showsVerticalScrollIndicator={false}>
        <View className="relative shadow">
          <Image className="w-full h-72 " source={items.image} />

          <TouchableOpacity
            onPress={() => {
              navigation.goBack();
            }}
            className="absolute top-14 left-4 rounded-full bg-white p-2"
          >
            <Iconify icon="mdi:arrow-left" size={20} color="#000" />
          </TouchableOpacity>
          <View className="absolute  -bottom-14 left-[33%] z-10">
            <View className="relative ">
              <Image
                style={{
                  backgroundColor: items.colorLogo,
                }}
                className="w-[136px] h-[136px]  rounded-full border-white border-[10px]"
                source={items.logo}
              />
              <View className="absolute bottom-3 right-3 bg-white shadow-sm rounded-full p-0.5">
                <Iconify
                  icon="lets-icons:check-fill"
                  size={25}
                  color="#029094"
                />
              </View>
            </View>
          </View>
        </View>
        <View className="mt-20 ">
          <View className="px-4 flex items-center space-y-1">
            <Text className="text-xl font-bold">{items.name}</Text>
            <Text className="text-[#8A8E9B] text-sm">{items.address}</Text>
            <View className="flex flex-row items-center space-x-3 pt-1">
              {items.tag.map((tag) => (
                <View className="bg-[#F6F6F6] rounded-lg p-1 px-2" key={tag}>
                  <Text className="text-xs text-[#8A8E9B] uppercase">
                    {tag}
                  </Text>
                </View>
              ))}
            </View>
            <View className="flex flex-row items-center space-x-3">
              <View className="flex flex-row items-center space-x-1">
                <Iconify icon="ri:motorbike-fill" size={20} color="#FE724C" />

                <Text className="text-sm text-gray-500">{items.type}</Text>
              </View>
              <View className="flex flex-row items-center space-x-1">
                <Iconify icon="weui:time-filled" size={20} color="#FE724C" />

                <Text className="text-sm text-gray-500">{items.time}</Text>
              </View>
            </View>
            <View className="flex flex-row items-center space-x-1 mt-2">
              <Iconify icon="mdi:star" size={20} color="#FFD700" />
              <Text className="text-[#8A8E9B] text-sm">{items.stars}</Text>
              <Text className="text-[#8A8E9B] text-sm">({items.reviews}k)</Text>
              <Text className="text-[#FE724C] text-sm underline ">
                {" "}
                See Reviews
              </Text>
            </View>
          </View>
          <ScrollView
            horizontal
            className="overflow-visible py-2"
            contentContainerStyle={{ paddingHorizontal: 10 }}
          >
            {Object.keys(items.dishes).map((dish, index) => {
              return (
                <TouchableOpacity key={index} onPress={() => {}}>
                  <View
                    className={`p-2 rounded-full  ${
                      index === 0 ? "bg-[#FE724C]" : "bg-[#F6F6F6]"
                    }  mx-2`}
                  >
                    <Text
                      className={`text-xs uppercase ${
                        index === 0 ? "text-white" : "text-[#8A8E9B]"
                      }`}
                    >
                      {capitalizeFirstLetter(dish)}
                    </Text>
                  </View>
                </TouchableOpacity>
              );
            })}
          </ScrollView>

          <View className="px-4">
            <Text className="font-bold text-lg  text-left">
              {capitalizeFirstLetter(Object.keys(items.dishes)[0])}
            </Text>
          </View>
          <ScrollView
            horizontal
            className="overflow-visible py-2"
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ paddingHorizontal: 14 }}
          >
            {items.dishes.recommended.map((dish, index) => {
              return <DishCard key={index} data={dish} />;
            })}
          </ScrollView>
          <View className="px-4">
            <Text className="font-bold text-lg  text-left">
              {capitalizeFirstLetter(Object.keys(items.dishes)[1])}
            </Text>
          </View>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            className="overflow-visible py-2"
            contentContainerStyle={{ paddingHorizontal: 14 }}
          >
            {items.dishes.best_discounts.map((dish, index) => {
              return <DishCard key={index} data={dish} />;
            })}
          </ScrollView>
        </View>
      </ScrollView>
    </>
  );
}
