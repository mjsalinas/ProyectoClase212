import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "../screens/LoginScreen";
import TabsNavigator from "./TabsNavigator";
import ServiceRegistryScreen from "../screens/services/ServiceRegistryScreen";
import RegisterScreen from "../screens/auth/RegisterScreen";

export type RootStackParamList = {
  Login: undefined;
  Register: undefined;
  Tabs: { email: string };
  ServiceRegistry: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function StackNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
      <Stack.Screen name="Tabs" component={TabsNavigator} />
      <Stack.Screen name="ServiceRegistry" component={ServiceRegistryScreen} />
    </Stack.Navigator>
  );
}
