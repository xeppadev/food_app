import { View, Text } from "react-native";
import React from "react";

export default function Loading() {
  return (
    <View className="flex flex-row justify-center">
      <Text className="text-white text-lg font-semibold">Loading...</Text>
    </View>
  );
}
