import { View, Image } from "react-native";
import React, { useEffect } from "react";
import { useNavigation, NavigationProp } from "@react-navigation/native";

interface RootParamList {
  Delivery: undefined;
}

export default function OrderPreScreen() {
  const navigation = useNavigation<NavigationProp<RootParamList>>();
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate("Delivery");
    }, 2000);
  }, []);

  return (
    <View className="flex-1 bg-white  justify-center items-center">
      <Image
        source={require("../../../assets/delivery.gif")}
        className="h-80 w-80"
      />
    </View>
  );
}
