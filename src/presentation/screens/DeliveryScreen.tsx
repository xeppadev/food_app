import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import MapView, { Marker } from "react-native-maps";
import { Iconify } from "react-native-iconify";
import { useNavigation } from "@react-navigation/native";

export default function DeliveryScreen() {
  const navigation = useNavigation();
  return (
    <View className="flex-1">
      <MapView
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        className="flex-1"
        mapType="standard"
      >
        <Marker
          coordinate={{
            latitude: 37.78825,
            longitude: -122.4324,
          }}
          title="McDonald's"
          description="Hot Burgers"
        />
      </MapView>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("HomeTab");
        }}
        className=" absolute z-10 left-5 top-10 rounded-full bg-white p-2"
      >
        <Iconify icon="mdi:arrow-left" size={20} color="#000" />
      </TouchableOpacity>
      <View className="rounded-t-[30px] -mt-12 bg-white relative ">
        <View className="flex flex-row justify-between px-5 pt-8">
          <View>
            <Text className="text-lg font-semibold  text-gray-700">
              Estimated Arrival
            </Text>
            <Text className="text-3xl font-semibold">15-30 minutes</Text>
            <Text className=" text-base font-medium">
              Delivery to your door
            </Text>
          </View>
          <Image
            source={require("../../../assets/delivery.gif")}
            className="h-24 w-24"
          />
        </View>
        <View className="bg-[#FE724C] p-2 px-3 flex-row justify-between items-center rounded-full  my-5 mx-2">
          <View className="p-1 rounded-full border-2 border-white">
            <Iconify icon="mdi:phone" size={45} color="#fff" />
          </View>
          <View className="flex-1 ml-3">
            <Text className="text-white text-lg font-semibold">
              Call Driver
            </Text>
            <Text className="text-white text-sm">Driver is on the way</Text>

            <Text className="text-white text-sm">+1 234 567 890</Text>
          </View>
          <View className="p-1 rounded-full border-2 border-white">
            <Iconify icon="mdi:message-text" size={45} color="#fff" />
          </View>
        </View>
      </View>
    </View>
  );
}
