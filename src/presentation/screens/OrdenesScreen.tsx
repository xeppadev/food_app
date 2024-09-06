import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { feactures } from "@/api/datos";
import { useNavigation } from "@react-navigation/native";
import { Iconify } from "react-native-iconify";
import React from "react";
import OrderCard from "../components/OrderCard";

export default function OrdenesScreen() {
  const navigation = useNavigation();
  return (
    <SafeAreaView className="bg-white flex-1">
      {/* Back Button */}
      <View className="relative py-4 shadow">
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}
          className=" absolute z-10 left-6 top-5 rounded-full bg-white p-2"
        >
          <Iconify icon="mdi:arrow-left" size={20} color="#000" />
        </TouchableOpacity>
        <View className="mt-1">
          <Text className="text-center text-xl font-semibold">Ordenes</Text>
        </View>
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
