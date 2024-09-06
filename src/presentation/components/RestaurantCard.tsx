import {
  View,
  Text,
  TouchableWithoutFeedback,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";

import { Iconify } from "react-native-iconify";
import { useNavigation, NavigationProp } from "@react-navigation/native";
import { RootStackParamList, RestaurantData } from "../types/interfaces";

interface RestaurantCardProps {
  data: RestaurantData;
}

export default function RestaurantCard({ data }: RestaurantCardProps) {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        navigation.navigate("RestaurantStack", {
          screen: "Restaurant",
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
              <Text className="text-sm font-bold">{data.stars}</Text>
              <Iconify icon="mdi:star" size={17} color="#FFD700" />

              <Text className="text-[9px] text-[#8A8E9B] uppercase">
                ({data.reviews}k)
              </Text>
            </View>
            <TouchableOpacity onPress={() => {}}>
              <View className="bg-[#FE724C] rounded-full p-1.5">
                <Iconify icon="mdi:heart" size={20} color="white" />
              </View>
            </TouchableOpacity>
          </View>
        </View>

        <View className="px-3 pb-3 pt-1 space-y-1">
          <View className="flex flex-row items-center space-x-1">
            <Text className="text-lg font-bold">{data.name}</Text>
            <Iconify icon="lets-icons:check-fill" size={20} color="#029094" />
          </View>

          <View className="flex flex-row items-center space-x-3">
            <View className="flex flex-row items-center space-x-1">
              <Iconify icon="ri:motorbike-fill" size={20} color="#FE724C" />

              <Text className="text-sm text-gray-500">{data.type}</Text>
            </View>
            <View className="flex flex-row items-center space-x-1">
              <Iconify icon="weui:time-filled" size={20} color="#FE724C" />

              <Text className="text-sm text-gray-500">{data.time}</Text>
            </View>
          </View>
          <View className="flex flex-row items-center space-x-3 pt-1">
            {data.tag.map((tag) => (
              <View className="bg-[#F6F6F6] rounded-lg p-1 px-2" key={tag}>
                <Text className="text-xs text-[#8A8E9B] uppercase">{tag}</Text>
              </View>
            ))}
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}
