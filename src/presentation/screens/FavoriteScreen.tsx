import { View, Text, SafeAreaView, ScrollView } from "react-native";
import React from "react";

import { feactures } from "@/api/datos";
import DishCard from "@/presentation/components/DishCard";

export default function FavoriteScreen() {
  return (
    <SafeAreaView className="bg-white flex-1">
      {/* Back Button */}
      <View className="relative py-2 shadow">
        <Text className="text-center text-xl font-semibold">Favorites</Text>
      </View>
      {/* ScrollView */}
      <ScrollView
        className="bg-white pl-5"
        contentContainerStyle={{
          alignItems: "center",
          justifyContent: "center",
        }}
        showsVerticalScrollIndicator={false}
      >
        {feactures.Populardishes.dishes.map((restaurant, index) => {
          return (
            <View key={index} className="p-3">
              <DishCard data={restaurant} />
            </View>
          );
        })}
      </ScrollView>
    </SafeAreaView>
  );
}
