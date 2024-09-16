import {
  View,
  ScrollView,
  Image,
  TouchableOpacity,
  Text,
  TextInput,
} from "react-native";
import React from "react";

import { StatusBar } from "expo-status-bar";
import { Iconify } from "react-native-iconify";
import { signOut } from "firebase/auth";
import { auth } from "@/config/firebase-config";

export default function PerfilScreen() {
  const handleSignOut = async () => {
    await signOut(auth);
  };

  return (
    <>
      <StatusBar style="light" />
      <ScrollView className="bg-white" showsVerticalScrollIndicator={false}>
        <View className="relative shadow">
          <Image
            className="w-full h-72 "
            source={require("../../../assets/Group.png")}
          />

          <View className="absolute  bottom-2 left-[33%] z-10">
            <View className="relative ">
              <Image
                className="w-[136px] h-[136px]  rounded-full border-white border-[10px]"
                source={require("../../../assets/perfil.png")}
              />
              <View className="absolute bottom-3 right-3 bg-white shadow-sm rounded-full p-1">
                <Iconify icon="solar:camera-bold" size={20} color="gray" />
              </View>
            </View>
          </View>
        </View>

        <View className="px-4 flex items-center space-y-1">
          <Text className="text-xl font-bold"> Fábio Santos</Text>
          <Text className="text-[#8A8E9B] text-sm"> Edit Profile</Text>
        </View>
        <View className="mt-8 ">
          <View className="px-4 flex col space-y-4">
            <View className=" space-y-1">
              <Text className="text-base text-[#9796A1] font-medium">
                Full Name
              </Text>
              <View className="border f rounded-2xl border-[#EEEEEE] p-4">
                <TextInput
                  className="w-full text-base font-medium"
                  placeholder="Fábio Santos"
                  placeholderTextColor={"black"}
                />
              </View>
            </View>
            <View className=" space-y-1">
              <Text className="text-base text-[#9796A1] font-medium">
                Email Address
              </Text>
              <View className="border f rounded-2xl border-[#EEEEEE] p-4">
                <TextInput
                  className="w-full text-base font-medium"
                  placeholder="preserc@gmail.com"
                  placeholderTextColor={"black"}
                />
              </View>
            </View>
            <View className=" space-y-1">
              <Text className="text-base text-[#9796A1] font-medium">
                Phone Number
              </Text>
              <View className="border f rounded-2xl border-[#EEEEEE] p-4">
                <TextInput
                  className="w-full text-base font-medium"
                  placeholder="+55 11 99999-9999"
                  placeholderTextColor={"black"}
                />
              </View>
            </View>
            <TouchableOpacity
              onPress={() => {
                handleSignOut();
              }}
              className="bg-[#FE724C] rounded-3xl p-4 flex items-center justify-center"
            >
              <Text className="text-base text-white font-medium">Sign Out</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </>
  );
}
