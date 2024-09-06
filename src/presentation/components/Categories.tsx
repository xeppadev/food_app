import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import React from "react";
import { categories } from "@/api/datos";
import { themeColors } from "../theme";

export default function Categories() {
  const [activeCategory, setActiveCategory] = React.useState<number | null>(
    categories.length > 0 ? categories[0].id : null,
  );
  return (
    <View className="mt-4">
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        className="overflow-visible"
        contentContainerStyle={{ paddingHorizontal: 14 }}
      >
        {categories.map((category, index) => {
          let isActived = category.id === activeCategory;

          return (
            <View key={index} className="flex justify-center items-center mr-4">
              <TouchableOpacity
                style={{
                  shadowColor: isActived
                    ? themeColors.cardActivate(0.25)
                    : themeColors.cardDeactivate(0.25),
                  shadowOffset: { width: 0, height: 10 },
                  shadowOpacity: 1,
                  shadowRadius: 10,
                }}
                className={`py-4 px-2 w-14 h-[88px] rounded-full items-center justify-center ${
                  isActived ? "bg-[#FE724C]" : " bg-white"
                }`}
                onPress={() => setActiveCategory(category.id)}
              >
                <Text className={`text-3xl `}>{category.icon}</Text>
                <Text
                  className={`text-xs  ${
                    isActived ? "text-white" : "text-gray-800"
                  }`}
                  numberOfLines={1} // Limitar a una línea
                  ellipsizeMode="tail" // Agregar puntos suspensivos al final
                >
                  {category.name}
                </Text>
              </TouchableOpacity>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
}
