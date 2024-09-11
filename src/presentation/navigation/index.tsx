import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "../screens/HomeScreen";
import RestaurantScreen from "../screens/RestaurantScreen";
import { Iconify } from "react-native-iconify";
import PerfilScreen from "../screens/PerfilScreen";
import OfertasScreen from "../screens/OfertasScreen";
import OrdenesScreen from "../screens/OrdenesScreen";
import DishScreen from "../screens/DishScreen";
import FavoriteScreen from "../screens/FavoriteScreen";
import CartScreen from "../screens/CartScreen";
import CheckoutScreen from "../screens/CheckoutScreen";
import OrderPreScreen from "../screens/OrderPreScreen";
import DeliveryScreen from "../screens/DeliveryScreen";
import WelcomeScreen from "../screens/WelcomeScreen";
import SignUpScreen from "../screens/SignUpScreen";
import SignInScreen from "../screens/SignInScreen";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

// HomeStack: Para las pantallas que están bajo el tab de Home

// RestaurantStack: Pantallas que no deben mostrar el TabNavigator
function RestaurantStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Restaurant" component={RestaurantScreen} />
      <Stack.Screen name="Dish" component={DishScreen} />
      <Stack.Screen
        name="Checkout"
        component={CheckoutScreen}
        options={{ presentation: "fullScreenModal" }}
      />
      <Stack.Screen
        name="Preparing"
        options={{ presentation: "fullScreenModal" }}
        component={OrderPreScreen}
      />
      <Stack.Screen
        name="Delivery"
        options={{ presentation: "fullScreenModal" }}
        component={DeliveryScreen}
      />
      <Stack.Screen
        name="Cart"
        options={{ presentation: "modal" }}
        component={CartScreen}
      />
    </Stack.Navigator>
  );
}

export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName="Welcome"
      >
        {/* Pantalla de Welcome */}
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        {/* Pantalla de Sign Up */}
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        {/* Pantalla de Sign In */}
        <Stack.Screen name="SignIn" component={SignInScreen} />
        {/* Tab Navigator */}
        <Stack.Screen name="MainTabs" component={MainTabs} />
        {/* Stack independiente para Restaurant y Dish */}
        <Stack.Screen name="RestaurantStack" component={RestaurantStack} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// Tab Navigator separado para Home, Ofertas, Perfil, etc.
function MainTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#FA4A0C",
      }}
    >
      <Tab.Screen
        name="HomeTab"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Iconify icon="solar:home-2-bold-duotone" size={24} color={color} />
          ),
        }}
      />
      {/* Otras pestañas del Tab Navigator */}
      <Tab.Screen
        name="Ofertas"
        component={OfertasScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Iconify icon="solar:ticket-bold-duotone" size={25} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Favorites"
        component={FavoriteScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Iconify
              icon="lets-icons:favorite-duotone"
              size={25}
              color={color}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Ordenes"
        component={OrdenesScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Iconify
              icon="solar:checklist-minimalistic-bold-duotone"
              size={24}
              color={color}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Perfil"
        component={PerfilScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Iconify
              icon="solar:user-rounded-bold-duotone"
              size={25}
              color={color}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
