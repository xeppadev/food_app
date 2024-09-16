import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Image,
  TextInput,
} from "react-native";
import React from "react";
import { Iconify } from "react-native-iconify";
import { useNavigation } from "@react-navigation/native";

import { selectDish } from "../store/slices/dishSlice";
import CheckoutButton from "../components/CheckoutButton";
import { useSelector, useDispatch } from "react-redux";
import { selectCartItems, selectCartTotal } from "../store/slices/cartSlice";

export default function CartScreen() {
  const restaurant = useSelector(selectDish);
  const cartItems = useSelector(selectCartItems);
  const dispatch = useDispatch();
  const cartTotal = useSelector(selectCartTotal);
  const cartRedonded = cartTotal.toFixed(2);
  const navigation = useNavigation();
  const delivery = 1.0;
  const [itemsGroup, setItemsGroup] = React.useState<{ [key: number]: any[] }>(
    {},
  );

  React.useEffect(() => {
    const items = cartItems.reduce((acc: { [key: number]: any[] }, item) => {
      if (acc[item.id]) {
        acc[item.id].push(item);
      } else {
        acc[item.id] = [item];
      }
      return acc;
    }, {});
    setItemsGroup(items);
  }, [cartItems]);

  return (
    <View className="bg-white flex-1">
      {/* Back Button */}
      <View className="relative py-4 shadow">
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}
          className=" absolute z-10 left-2 top-5 rounded-full bg-white p-2"
        >
          <Iconify icon="mdi:arrow-left" size={20} color="#000" />
        </TouchableOpacity>
        <View className="mt-1">
          <Text className="text-center text-xl font-semibold">Cart</Text>
          <Text className="text-center text-[#8A8E9B] text-sm">
            {restaurant?.restaurant}
          </Text>
        </View>
      </View>
      <ScrollView className="bg-white" showsVerticalScrollIndicator={false}>
        {Object.entries(itemsGroup).map(([key, items]) => {
          const item = items[0];
          return (
            <View
              key={key}
              className="flex p-4 flex-row items-center space-x-2 relative"
            >
              <Image source={item.image} className="w-24 h-24 rounded-2xl" />
              <View className="flex flex-col space-y-0.5">
                <Text className="text-lg font-bold">{item.name}</Text>
                <Text
                  numberOfLines={2}
                  style={{ maxWidth: 160 }}
                  ellipsizeMode="tail"
                  className="text-[#8A8E9B] text-sm  "
                >
                  Spicy chicken, cheese, and tomato
                </Text>
                <Text className="text-[#FE724C] font-medium text-sm">
                  ${item.price}
                </Text>
              </View>

              <View className="flex mt-[60px] flex-row items-center  space-x-2">
                <TouchableOpacity
                  className="p-1 rounded-full bg-white border border-[#FE724C]"
                  disabled
                  onPress={() => {}}
                >
                  <Iconify icon="tabler:minus" size={20} color="#FE724C" />
                </TouchableOpacity>
                <Text className="text-lg font-bold"> {items.length}</Text>
                <TouchableOpacity
                  className="p-1 rounded-full bg-[#FE724C] border border-[#FE724C]"
                  disabled
                  onPress={() => {}}
                >
                  <Iconify icon="ic:round-add" size={20} color="white" />
                </TouchableOpacity>
              </View>
              {/* Botón de eliminación */}
              <TouchableOpacity
                className="absolute top-3 right-6  rounded-full bg-white  border-gray-300"
                onPress={() => {}}
              >
                <Iconify icon="mdi:close" size={20} color="#FE724C" />
              </TouchableOpacity>
            </View>
          );
        })}
        <View className="p-4 ">
          <View className="flex-1 flex-row items-center p-2 rounded-full border border-gray-200 ">
            <TextInput
              placeholder="Promo Code"
              placeholderTextColor={"#e5e7eb"}
              className="ml-2 flex-1  "
            />
            <TouchableOpacity
              className="p-3 px-7 bg-[#FE724C] rounded-full "
              onPress={() => {}}
            >
              <Text className="text-white text-base">Apply</Text>
            </TouchableOpacity>
          </View>

          <View className="flex flex-col justify-between mt-4 space-y-2">
            <View className="flex flex-row justify-between">
              <Text className="text-base font-semibold">Subtotal</Text>
              <Text className="text-base font-semibold">
                ${cartRedonded} USD
              </Text>
            </View>

            <View className="border-b border-[#e5e7eb] w-full"></View>
            <View className="flex flex-row justify-between">
              <Text className="text-base font-semibold">Delivery</Text>
              <Text className="text-base font-semibold">${delivery} USD</Text>
            </View>
            <View className="border-b border-[#e5e7eb] w-full"></View>
            <View className="flex flex-row justify-between">
              <Text className="text-base font-semibold">Total</Text>
              <Text className="text-base font-semibold">
                ${cartRedonded + delivery} USD
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
      <CheckoutButton />
    </View>
  );
}
