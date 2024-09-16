import { ScrollView } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { feactures } from "@/api/datos";
import HeaderSearch from "../components/HeaderSearch";

import Categories from "../components/Categories";
import FeacturedRow from "../components/FeacturedRow";
import PopularDishes from "../components/PopularDishes";
import Ubication from "../components/Ubication";

export default function HomeScreen() {
  return (
    <SafeAreaView className="bg-white">
      <StatusBar style="auto" />
      {/* Ubication zone */}
      <Ubication />
      {/* Search Bar */}
      <HeaderSearch />

      {/* Main View */}
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 20 }}
      >
        {/* List Categories */}
        <Categories />
        {/* Restaurant Feactured */}

        <FeacturedRow data={feactures.feactures_restaurants} />

        {/* Popular Dishes */}

        <PopularDishes data={feactures.Populardishes} />
      </ScrollView>
    </SafeAreaView>
  );
}
