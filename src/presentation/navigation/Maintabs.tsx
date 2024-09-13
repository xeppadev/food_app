import HomeScreen from "../screens/HomeScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Iconify } from "react-native-iconify";
import PerfilScreen from "../screens/PerfilScreen";
import OfertasScreen from "../screens/OfertasScreen";
import OrdenesScreen from "../screens/OrdenesScreen";

import FavoriteScreen from "../screens/FavoriteScreen";

const Tab = createBottomTabNavigator();

export default function Maintabs() {
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
