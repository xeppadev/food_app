import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  TextInput,
  Alert,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { useState } from "react";
import { Iconify } from "react-native-iconify";

import { signInWithEmailAndPassword } from "firebase/auth";
import { useSelector, useDispatch } from "react-redux";
import { useNavigation, NavigationProp } from "@react-navigation/native";
import { auth } from "../../config/firebase-config";
import { RootState } from "../store";
import { setUserLoading } from "../store/slices/userSlice";
import Loading from "../components/Loading";

export type RootStackParamList = {
  MainTabs: undefined;

  forgotPassword: undefined;

  SignUp: undefined;

  // Add other routes here
};

export default function SignInScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { userLoading } = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch();

  const handleSignIn = async () => {
    if (email && password) {
      try {
        dispatch(setUserLoading(true));
        await signInWithEmailAndPassword(auth, email, password);
        dispatch(setUserLoading(false));
      } catch (error: any) {
        dispatch(setUserLoading(false));
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
        Alert.alert("Error", errorMessage);
      }
      dispatch(setUserLoading(false));
    } else {
      Alert.alert("Error", "Email and password are required");
    }
  };

  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  return (
    <>
      <StatusBar style="light" />

      <ScrollView className="bg-white" showsVerticalScrollIndicator={false}>
        <View className="relative shadow">
          <Image
            className="w-full h-20"
            source={require("../../../assets/group2.png")}
          />
          <TouchableOpacity
            onPress={() => {
              navigation.goBack();
            }}
            className="absolute top-14 left-4 rounded-full bg-white p-2"
          >
            <Iconify icon="mdi:arrow-left" size={20} color="#000" />
          </TouchableOpacity>
        </View>
        <View className="px-6 mt-16 space-y-1">
          <Text className="text-4xl font-bold">Login</Text>
          <View className="flex flex-col pt-4 space-y-8">
            <View className=" space-y-2">
              <Text className="text-base text-[#9796A1] font-medium">
                Email Address
              </Text>
              <View className="border flex items-center  rounded-2xl border-[#EEEEEE] p-4 ">
                <TextInput
                  className="w-full h-7  text-base font-medium"
                  placeholder="Your Email Address"
                  placeholderTextColor={"#9796A1"}
                  onChange={(e) => setEmail(e.nativeEvent.text)}
                />
              </View>
            </View>
            <View className=" space-y-2">
              <Text className="text-base text-[#9796A1] font-medium">
                Password
              </Text>
              <View className="border f rounded-2xl border-[#EEEEEE] p-4">
                <TextInput
                  className="w-full h-7 text-base font-medium"
                  placeholder="Password"
                  placeholderTextColor={"#9796A1"}
                  secureTextEntry={true}
                  onChange={(e) => setPassword(e.nativeEvent.text)}
                />
              </View>
            </View>
          </View>
          <View className="flex pt-12 flex-col space-y-6">
            <TouchableOpacity
              className="p-4 px-5 rounded-full flex items-center bg-[#FE724C]"
              onPress={() => {
                handleSignIn();
              }}
            >
              {userLoading ? (
                <Loading />
              ) : (
                <Text className="text-white text-lg font-semibold">
                  Sign In
                </Text>
              )}
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => {
                navigation.navigate("forgotPassword");
              }}
              style={{ alignItems: "center" }}
            >
              <Text className="text-[#FE724C] text-base font-medium">
                Forgot Password?
              </Text>
            </TouchableOpacity>

            <View className="flex flex-row items-center justify-center space-x-2">
              <Text className="text-black text-base font-medium">
                Don't have an account?
              </Text>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate("SignUp");
                }}
              >
                <Text className="text-[#FE724C] text-base font-semibold">
                  Sign up
                </Text>
              </TouchableOpacity>
            </View>
            <View className="flex flex-row items-center  space-x-4">
              <View className="border border-black/20 w-1/3"></View>
              <Text className=" text-base font-medium ">Sign in with</Text>
              <View className="border border-black/20 w-[30%]"></View>
            </View>
            <View className="flex flex-row items-center justify-between  space-x-4">
              <TouchableOpacity
                className="p-4 px-6 rounded-full shadow flex flex-row items-center  space-x-3 bg-white"
                onPress={() => {}}
              >
                <Iconify icon="logos:facebook" size={30} color="#FE724C" />
                <Text className=" text-lg font-semibold">Facebook</Text>
              </TouchableOpacity>
              <TouchableOpacity
                className="p-4 px-6 rounded-full shadow flex flex-row items-center space-x-3 bg-white"
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
          </View>
        </View>
      </ScrollView>
    </>
  );
}
