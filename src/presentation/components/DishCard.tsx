import {
  View,
  Text,
  TouchableWithoutFeedback,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { themeColors } from "../theme";

import { useNavigation, NavigationProp } from "@react-navigation/native";
import { Iconify } from "react-native-iconify";
import { RootStackParamList2, DishData } from "../types/interfaces";
interface DishCardProps {
  data: DishData;
}

export default function DishCard({ data }: DishCardProps) {
  const navigation = useNavigation<NavigationProp<RootStackParamList2>>();
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        navigation.navigate("RestaurantStack", {
          screen: "Dish",
          params: { data },
        });
      }}
    >
      <View className=" shadow-lg rounded-[20px] w-[330px] bg-white mr-5">
        <View className="relative">
          <Image
            source={data.image}
            className="w-full h-40 rounded-t-[20px]"
            resizeMode="cover"
          />
          <View className="absolute top-0 left-0 right-0 flex flex-row justify-between items-center p-3">
            <View className="bg-white rounded-full p-1 px-2 flex flex-row items-center justify-center">
              <Iconify icon="solar:dollar-bold" size={17} color="#FE724C" />
              <Text className="text-sm font-bold">{data.price}</Text>
            </View>
            <TouchableOpacity onPress={() => {}}>
              <View className="bg-[#FE724C] rounded-full p-1.5">
                <Iconify icon="mdi:heart" size={20} color="white" />
              </View>
            </TouchableOpacity>
          </View>
          <View
            style={{
              shadowColor: themeColors.cardDeactivate(0.25),
              shadowOffset: { width: 0, height: 10 },
              shadowOpacity: 1,
              shadowRadius: 10,
            }}
            className="absolute bottom-0 left-0 right-0 flex flex-row justify-between items-center px-3 mb-[-15px]"
          >
            <View className="bg-white rounded-full p-1 px-2 flex flex-row items-center justify-center">
              <Text className="text-sm font-bold">{data.stars}</Text>
              <Iconify icon="mdi:star" size={17} color="#FFD700" />

              <Text className="text-[9px] text-[#8A8E9B] uppercase">
                ({data.reviews}k)
              </Text>
            </View>
          </View>
        </View>

        <View className="p-3">
          <Text className="text-lg font-bold">{data.name}</Text>
          <Text className="text-[#5B5B5E] text-sm">{data.restaurant}</Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}
