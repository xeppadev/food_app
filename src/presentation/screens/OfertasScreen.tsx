import { ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React from "react";
import HeaderSearch from "../components/HeaderSearch";
import { feactures } from "@/api/datos";
import { StatusBar } from "expo-status-bar";
import PopularDishes from "../components/PopularDishes";
import MenuOptions from "../components/MenuOptions";
import CartOfertas from "../components/CartOfertas";
import OfertasRow from "../components/OfertasRow";

export default function OfertasScreen() {
  return (
    <SafeAreaView className="bg-white">
      <StatusBar style="auto" />
      {/* Search Bar */}
      <HeaderSearch />

      {/* Main View */}

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 20 }}
      >
        {/* Menu Optiones */}
        <MenuOptions />

        {/* Restaurant Ofertas */}
        <OfertasRow data={feactures.ofertas_dishes} />
        {/* Popular Dishes */}

        <PopularDishes data={feactures.Populardishes} />
      </ScrollView>
    </SafeAreaView>
  );
}
