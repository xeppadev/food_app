import { View, Text, SafeAreaView, ScrollView } from "react-native";
import { feactures } from "@/api/datos";

import React from "react";
import OrderCard from "../components/OrderCard";

export default function OrdenesScreen() {
  return (
    <SafeAreaView className="bg-white flex-1">
      {/* Back Button */}
      <View className="relative py-2 shadow">
        <Text className="text-center text-xl font-semibold">Ordenes</Text>
      </View>
      <ScrollView
        className="bg-white "
        contentContainerStyle={{
          alignItems: "center",
          justifyContent: "center",
        }}
        showsVerticalScrollIndicator={false}
      >
        {feactures.feactures_restaurants.restaurants.map(
          (restaurant, index) => {
            return (
              <View key={index} className="p-3">
                <OrderCard data={restaurant} />
              </View>
            );
          },
        )}
      </ScrollView>
    </SafeAreaView>
  );
}
