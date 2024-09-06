import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
} from "react-native";
import React from "react";
import { Iconify } from "react-native-iconify";
import { feactures } from "@/api/datos";
import DishCard from "@/presentation/components/DishCard";
import { useNavigation } from "@react-navigation/native";
export default function FavoriteScreen() {
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
          <Text className="text-center text-xl font-semibold">Favorites</Text>
        </View>
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
