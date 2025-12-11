import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ProfileScreen from "../screens/ProfileScreen";
import { MaterialIcons } from "@expo/vector-icons";
import { getThemeColors } from "../utils/theme";
import { useTheme } from "../contexts/ThemeContext";
import SettingsScreen from "../screens/SettingsScreen";
import ServicesScreen from "../screens/services/ServicesScreen";
import AppointmentScreen from "../screens/appointments/AppointmentScreen";

export type TabsParamList = {
    Home: undefined;
    Profile: undefined;
    Settings: undefined;
    Services: undefined;
  Appointments: undefined;
}
const Tab = createBottomTabNavigator<TabsParamList>();

const TabsNavigator = () => {
  const { theme } = useTheme();
  const colors = getThemeColors(theme);

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: true,
        // tabBarActiveTintColor: colors.button,
        tabBarInactiveTintColor: colors.text,
        tabBarStyle: {
          backgroundColor: colors.card,
        },
      }}
    >
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          title: "Perfil",
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="person" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          title: "Configuración",
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="settings" size={size} color={color} />
          ),
        }}
      />
       <Tab.Screen
        name="Services"
        component={ServicesScreen}
        options={{
          title: "Servicios",
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="add" size={size} color={color} />
          ),
        }}
      />
       <Tab.Screen
        name="Appointments"
        component={AppointmentScreen}
        options={{
          title: "Agendar Cita",
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="add" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabsNavigator;