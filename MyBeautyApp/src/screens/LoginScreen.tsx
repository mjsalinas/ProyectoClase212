import { useState } from "react";
import { View, Text, StyleSheet, Alert } from "react-native";
import CustomInput from "../components/CustomInput";
import CustomButton from "../components/CustomButton";

export default function LoginScreen({ navigation }: any) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (!email || !password) {
      Alert.alert("Error", "Por favor, llena todos los campos.");
      return;
    }

    navigation.navigate("Tabs", { email });
  };

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>Sign In</Text>

        <CustomInput
          value={email}
          type="email"
          placeholder="Correo electrónico"
          onChange={setEmail}
        />

        <CustomInput
          value={password}
          type="password"
          placeholder="Contraseña"
          onChange={setPassword}
        />

        <CustomButton title="Iniciar sesión" onPress={handleLogin} />

        <CustomButton
          title="Registrarme"
          variant="secondary"
          onPress={() => navigation.navigate("Register")}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center", 
    justifyContent: "center",
    padding: 20,
  },
  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 15,
    padding: 30,
    width: "85%",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 6,
    justifyContent: "space-between",
  },
  title: {
    fontWeight: "bold",
    fontSize: 28,
    textAlign: "center",
    marginBottom: 20,
    color: "#393434ff",
  },
});
