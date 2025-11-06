import React from "react";
import { SafeAreaView, View, Text, StyleSheet } from "react-native";
import CustomButton from "../components/CustomButton";
import { navigationRef } from "../navigation/NavigationService";

export default function ProfileScreen() {
  const handleLogout = () => {
    if (navigationRef.isReady()) {
      navigationRef.reset({
        index: 0,
        routes: [{ name: "Login" }],
      });
    }
  };

  const goToLogin = () => {
    if (navigationRef.isReady()) {
      navigationRef.navigate("Login");
    }
  };

  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.container}>
        <Text style={styles.title}>Pantalla de Perfil</Text>

        <CustomButton title="Cerrar Sesión" onPress={handleLogout} variant="primary" />

        <CustomButton title="Ir a Login" onPress={goToLogin} variant="tertiary" />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: "#F5F6FA",
  },
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 22,
    fontWeight: "700",
    marginBottom: 20,
  },
});
