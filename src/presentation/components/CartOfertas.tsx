import {
  View,
  Text,
  TouchableWithoutFeedback,
  Image,
  TouchableOpacity,
} from "react-native";

import { useNavigation, NavigationProp } from "@react-navigation/native";
import React from "react";
import { RootStackParamList2, OfertasDishes } from "../types/interfaces";
import { Iconify } from "react-native-iconify";
interface RestaurantCardProps {
  data: OfertasDishes;
}

export default function CartOfertas({ data }: RestaurantCardProps) {
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
            <View className="bg-[#FE724C] rounded-full p-1 px-2 flex flex-row items-center justify-center">
              <Text className="text-sm font-bold  text-white">
                -{data.porcentajedescount}%
              </Text>
            </View>
            <TouchableOpacity onPress={() => {}}>
              <View className="bg-[#FE724C] rounded-full p-1.5">
                <Iconify icon="mdi:heart" size={20} color="white" />
              </View>
            </TouchableOpacity>
          </View>
        </View>

        <View className="p-3 flex flex-row items-center justify-between">
          <View className="flex flex-row">
            <Text className="text-lg font-bold">${data.price}</Text>
            <View className="flex flex-row items-center ml-2 rounded-full  p-1 px-3 bg-[#FE724C]">
              <Text className="text-white text-sm">-${data.discount}</Text>
            </View>
          </View>

          <View className="bg-white rounded-full p-1 px-2 flex flex-row items-center justify-center">
            <Text className="text-sm font-bold">{data.stars}</Text>
            <Iconify icon="mdi:star" size={17} color="#FFD700" />

            <Text className="text-xs text-[#8A8E9B] uppercase">
              ({data.reviews}k)
            </Text>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}
