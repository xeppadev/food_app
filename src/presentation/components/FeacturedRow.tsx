import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { feactures } from "@/api/datos";
import React from "react";
import RestaurantCard from "./RestaurantCard";

interface FeacturedRowProps {
  data: typeof feactures.feactures_restaurants;
}

export default function FeacturedRow({ data }: FeacturedRowProps) {
  return (
    <View className="mt-4 ">
      <View className="flex flex-row items-center justify-between px-4  ">
        <View>
          <Text className="font-bold text-lg ">{data.title}</Text>
          <Text className="text-gray-500 text-sm">{data.description}</Text>
        </View>
        <TouchableOpacity>
          <Text className="text-sm text-[#FE724C] font-medium">See all</Text>
        </TouchableOpacity>
      </View>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        className="overflow-visible py-5"
        contentContainerStyle={{ paddingHorizontal: 14 }}
      >
        {data.restaurants.map((restaurant, index) => {
          return <RestaurantCard key={index} data={restaurant} />;
        })}
      </ScrollView>
    </View>
  );
}
