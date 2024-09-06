import {
  View,
  Text,
  TouchableWithoutFeedback,
  TouchableOpacity,
  Image,
} from "react-native";
import { useNavigation, NavigationProp } from "@react-navigation/native";
import { RestaurantData } from "../types/interfaces";
import React from "react";

// interface RootParamList {
//   Cart: undefined;
// }

export default function OrderCard({ data }: { data: RestaurantData }) {
  const navigation = useNavigation();

  return (
    <TouchableWithoutFeedback onPress={() => {}}>
      <View className=" p-4 bg-white shadow rounded-3xl flex flex-col space-y-2">
        <View className="flex flex-row justify-between">
          <View className="flex flex-row space-x-3 items-center">
            <View className="bg-white shadow rounded-2xl p-2">
              <Image source={data.logo} className="h-12 w-12" />
            </View>
            <View className="flex flex-col">
              <Text className="text-sm font-semibold text-[#8A8E9B]">
                3 items
              </Text>
              <Text className="text-base font-medium">{data.name}</Text>
            </View>
          </View>
          <Text className="text-base text-[#FE724C] font-semibold">
            #264100
          </Text>
        </View>
        <View className="flex flex-row justify-between">
          <View className="flex flex-col space-y-1">
            <Text className="text-[#8A8E9B] font-semibold text-sm">
              Estimated Arrival
            </Text>
            <Text className="text-xl font-semibold">25 min</Text>
          </View>
          <View className="flex flex-col space-y-1">
            <Text className="text-[#8A8E9B] font-semibold text-sm">Now</Text>
            <Text className="text-base font-semibold">Food on the way</Text>
          </View>
        </View>
        <View className="flex flex-row space-x-4 justify-between">
          <TouchableOpacity
            className="bg-white shadow rounded-full py-3 px-8"
            onPress={() => {}}
          >
            <Text className="text-base font-medium">Cancel</Text>
          </TouchableOpacity>
          <TouchableOpacity
            className="bg-[#FE724C] rounded-full py-3 px-8 "
            onPress={() => {}}
          >
            <Text className="text-white text-base font-medium">
              Tracker Order
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}
