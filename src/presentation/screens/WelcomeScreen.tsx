import { View, Image, Text, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { Iconify } from "react-native-iconify";
import { useNavigation, NavigationProp } from "@react-navigation/native";
export type RootStackParamList = {
  SignIn: undefined;

  SignUp: undefined;

  // Add other routes here
}; // Adjust the import path according to your project structure

export default function LoginScreen() {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  return (
    <View className="flex-1">
      {/* Imagen de fondo */}
      <Image
        source={require("../../../assets/background-login.png")}
        className="absolute w-full h-full"
        style={{ resizeMode: "cover" }} // Ajusta la imagen para cubrir toda la vista
      />
      {/* Gradiente concentrado en la parte inferior */}
      <LinearGradient
        colors={["transparent", "#191B2F"]}
        start={{ x: 0.1, y: 0 }} // Comienza desde la parte superior central
        end={{ x: 0.5, y: 1 }} // Termina en la parte inferior central
        className="absolute w-full h-full"
        style={{ zIndex: 1 }} // Asegura que el gradiente esté encima de la imagen
      />
      {/* Texto de bienvenida */}
      <View className="absolute w-full my-8  p-5" style={{ zIndex: 2 }}>
        <TouchableOpacity className="bg-white p-2 w-fit rounded-full ml-auto">
          <Text className="text-[#FE724C] px-2 font-semibold">Skip</Text>
        </TouchableOpacity>
        <View className="flex flex-col space-y-2  mt-24">
          <Text className="text-black text-5xl font-bold">Welcome to </Text>
          <Text className="text-[#FE724C] text-4xl font-bold">
            Delivery iGO
          </Text>
          <Text className="text-[#30384F] text-base">
            Order your favorite meals from your {"\n"}
            favorite restaurants.
          </Text>
        </View>

        {/* Botones de inicio de sesión */}
        <View className="flex flex-col space-y-4  mt-52">
          <View className="flex flex-row items-center  space-x-4">
            <View className="border border-white/50 w-1/3"></View>
            <Text className="text-white text-lg font-semibold ">
              Sign in with
            </Text>
            <View className="border border-white/50 w-[30%]"></View>
          </View>
          <View className="flex flex-row items-center justify-between  space-x-4">
            <TouchableOpacity
              className="p-4 px-6 rounded-full  flex flex-row items-center  space-x-3 bg-white"
              onPress={() => {}}
            >
              <Iconify icon="logos:facebook" size={30} color="#FE724C" />
              <Text className=" text-lg font-semibold">Facebook</Text>
            </TouchableOpacity>
            <TouchableOpacity
              className="p-4 px-6 rounded-full  flex flex-row items-center space-x-3 bg-white"
              onPress={() => {}}
            >
              <Iconify
                icon="flat-color-icons:google"
                size={30}
                color="#FE724C"
              />
              <Text className=" text-lg font-semibold">Google</Text>
            </TouchableOpacity>
          </View>
          <View className="pt-2">
            <TouchableOpacity
              className="p-4 px-5 rounded-full flex items-center border-white border  bg-white/30"
              onPress={() => {
                navigation.navigate("SignIn");
              }}
            >
              <Text className=" text-lg font-semibold text-white">
                Sign in with Email
              </Text>
            </TouchableOpacity>
          </View>
          <View className="flex flex-row items-center justify-center space-x-2">
            <Text className="text-white text-base">Don't have an account?</Text>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("SignUp");
              }}
            >
              <Text className="text-[#FE724C] underline text-base font-semibold">
                Sign up
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}
