import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { useNavigation, NavigationProp } from "@react-navigation/native";
import React from "react";
import { Iconify } from "react-native-iconify";
import { SafeAreaView } from "react-native-safe-area-context";
interface RootParamList {
  Preparing: undefined;
}

export default function CheckoutScreen() {
  const navigation = useNavigation<NavigationProp<RootParamList>>();
  return (
    <SafeAreaView className="bg-white flex-1">
      <View className="relative py-4 shadow">
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}
          className=" absolute z-10 left-5 top-5 rounded-full bg-white p-2"
        >
          <Iconify icon="mdi:arrow-left" size={20} color="#000" />
        </TouchableOpacity>
        <View className="mt-2">
          <Text className="text-center text-xl font-semibold">
            Confirm Order
          </Text>
        </View>
      </View>
      <ScrollView
        className="bg-white"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 30 }}
      >
        <View className="p-5 space-y-4">
          <View className="flex justify-center ">
            <Text className="text-lg font-semibold">Details Delivery</Text>
          </View>
          <View className="flex flex-col items-start space-y-4 p-4 bg-white shadow rounded-2xl">
            <View className="flex flex-row space-x-1">
              <Iconify icon="solar:map-point-bold" size={40} color="#FE724C" />
              <View className="flex flex-col">
                <Text className=" text-base">1234 Main Street, NY 10001</Text>
                <Text className="text-[#8A8E9B] text-sm">
                  Call me when you arrive
                </Text>
              </View>
            </View>
            <View className="flex flex-row  space-x-2">
              <Iconify icon="fa:motorcycle" size={25} color="#FE724C" />
              <View className="flex flex-col">
                <Text className=" text-base">Delivery 25 - 30 min</Text>
              </View>
            </View>
          </View>
          <View className="flex justify-center ">
            <Text className="text-lg font-semibold">Payment Method</Text>
          </View>

          <View className="flex flex-col items-start space-y-3 p-4 bg-white shadow rounded-2xl">
            <View className="flex flex-row space-x-1 justify-between w-full items-center">
              <View className="flex flex-row items-center space-x-1">
                <Iconify icon="mdi:credit-card" size={48} color="#FE724C" />
                <View className="flex flex-col">
                  <Text className=" text-base">**** **** **** 1234</Text>
                  <Text className="text-[#8A8E9B] text-sm">Expires 12/23</Text>
                </View>
              </View>
              <View className="flex flex-row space-x-1">
                <Text className="text-[#8A8E9B] text-base pt-0.5">$28.00</Text>
                <Iconify icon="mdi:chevron-right" size={30} color="#8A8E9B" />
              </View>
            </View>
            <View className="flex flex-row justify-between w-full  items-center space-x-2">
              <View className="flex flex-row items-center space-x-1">
                <Iconify icon="solar:ticket-bold" size={45} color="#FE724C" />

                <Text className=" text-base">Agregar Cupon</Text>
              </View>
              <Iconify icon="mdi:chevron-right" size={30} color="#8A8E9B" />
            </View>
          </View>
          <View className="flex justify-center ">
            <Text className="text-lg font-semibold">Tip for the driver</Text>
          </View>

          {/* Botones de propina */}

          <View className="flex flex-row justify-between space-x-2">
            <TouchableOpacity
              className="py-2 px-4  rounded-full bg-white border border-[#FE724C]"
              onPress={() => {}}
            >
              <Text className="text-[#FE724C] ">No Tip</Text>
            </TouchableOpacity>
            <TouchableOpacity
              className="py-2 px-4 rounded-full bg-white border border-[#FE724C]"
              onPress={() => {}}
            >
              <Text className="text-[#FE724C] ">5%</Text>
            </TouchableOpacity>
            <TouchableOpacity
              className="py-2 px-4 rounded-full bg-white border border-[#FE724C]"
              onPress={() => {}}
            >
              <Text className="text-[#FE724C] ">10%</Text>
            </TouchableOpacity>
            <TouchableOpacity
              className="py-2 px-4 rounded-full bg-white border border-[#FE724C]"
              onPress={() => {}}
            >
              <Text className="text-[#FE724C] ">15%</Text>
            </TouchableOpacity>
            <TouchableOpacity
              className="py-2 px-4 rounded-full bg-white border border-[#FE724C]"
              onPress={() => {}}
            >
              <Text className="text-[#FE724C] ">Otro</Text>
            </TouchableOpacity>
          </View>
          {/* Summary */}

          <View className="flex flex-col items-start space-y-2 p-4 bg-white shadow rounded-2xl">
            <View className="flex flex-row justify-between w-full">
              <Text className="text-base font-semibold">Subtotal</Text>
              <Text className="text-base font-semibold">$30.00 USD</Text>
            </View>
            <View className="border-b border-[#e5e7eb] w-full"></View>
            <View className="flex flex-row justify-between w-full">
              <Text className="text-base font-semibold">Delivery</Text>
              <Text className="text-base font-semibold">$1.00 USD</Text>
            </View>
            <View className="border-b border-[#e5e7eb] w-full"></View>
            <View className="flex flex-row justify-between w-full">
              <Text className="text-base font-semibold">Tip</Text>
              <Text className="text-base font-semibold">$1.00 USD</Text>
            </View>
            <View className="border-b border-[#e5e7eb] w-full"></View>
            <View className="flex flex-row justify-between w-full">
              <Text className="text-base font-semibold">Total</Text>
              <Text className="text-base font-semibold">$32.00 USD</Text>
            </View>
          </View>
        </View>
      </ScrollView>
      <View className="absolute bottom-5 z-50 w-[90%] mx-4">
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Preparing");
          }}
          className="bg-[#FE724C]   rounded-full p-4"
        >
          <Text className="text-white uppercase text-center text-lg font-medium">
            Submit
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
