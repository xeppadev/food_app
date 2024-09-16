import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { RootState } from "../store";
import { useEffect } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useSelector, useDispatch } from "react-redux";
import RestaurantScreen from "../screens/RestaurantScreen";
import { setUser } from "../store/slices/userSlice";
import DishScreen from "../screens/DishScreen";
import { auth } from "../../config/firebase-config";
import CartScreen from "../screens/CartScreen";
import CheckoutScreen from "../screens/CheckoutScreen";
import OrderPreScreen from "../screens/OrderPreScreen";
import DeliveryScreen from "../screens/DeliveryScreen";
import WelcomeScreen from "../screens/WelcomeScreen";
import SignUpScreen from "../screens/SignUpScreen";
import SignInScreen from "../screens/SignInScreen";
import MainTabs from "./Maintabs";
import { onAuthStateChanged, User } from "firebase/auth";

const Stack = createNativeStackNavigator();

async function extractToken(user: User): Promise<string> {
  return await user.getIdToken();
}

export default function Navigation() {
  const { user } = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        const token = await extractToken(user);
        dispatch(setUser(token));
      } else {
        dispatch(setUser(null));
      }
    });

    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, [dispatch]);

  return (
    <NavigationContainer>
      {user ? <AuthenticatedStack /> : <AuthStack />}
    </NavigationContainer>
  );
}

// AuthStack: Pantallas que deben mostrar el AuthStack
function AuthStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="Welcome"
    >
      <Stack.Screen name="Welcome" component={WelcomeScreen} />
      <Stack.Screen name="SignUp" component={SignUpScreen} />
      <Stack.Screen name="SignIn" component={SignInScreen} />
    </Stack.Navigator>
  );
}

// MainTabs: Pantallas que deben mostrar el TabNavigator
function AuthenticatedStack() {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="MainTabs"
    >
      <Stack.Screen name="MainTabs" component={MainTabs} />
      <Stack.Screen name="RestaurantStack" component={RestaurantStack} />
      <Stack.Screen
        name="Cart"
        options={{ presentation: "modal" }}
        component={CartScreen}
      />
    </Stack.Navigator>
  );
}

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
    </Stack.Navigator>
  );
}
