import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { feactures } from "@/api/datos";
import React from "react";
import CartOfertas from "./CartOfertas";

interface FeacturedRowProps {
  data: typeof feactures.ofertas_dishes;
}

export default function OfertasRow({ data }: FeacturedRowProps) {
  return (
    <View className="mt-4 ">
      <View className="flex flex-row items-center justify-between px-4  ">
        <View>
          <Text className="font-bold text-3xl text-[#FE724C] italic">
            {data.title}
          </Text>
        </View>
        <TouchableOpacity>
          <Text className="text-3xl text-[#FE724C] font-medium">
            🍟🍿🍰🥤🍧
          </Text>
        </TouchableOpacity>
      </View>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        className="overflow-visible py-5"
        contentContainerStyle={{ paddingHorizontal: 14 }}
      >
        {data.ofertas.map((restaurant, index) => {
          return <CartOfertas key={index} data={restaurant} />;
        })}
      </ScrollView>
    </View>
  );
}
