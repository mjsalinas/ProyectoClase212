import React, { useState } from "react";
import { View, Text, ScrollView, Alert, StyleSheet } from "react-native";
import CustomInput from "../../components/CustomInput";
import CustomButton from "../../components/CustomButton";

export default function RegisterScreen({ navigation }: any) {
  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");
  const [password, setPassword] = useState("");
  const [confirmar, setConfirmar] = useState("");
  const [telefono, setTelefono] = useState("");
  const [fechaNacimiento, setFechaNacimiento] = useState("");

  const validateEmail = (email: string) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  const isValidDate = (dateString: string) => {
    // formato YYYY-MM-DD
    if (!/^\d{4}-\d{2}-\d{2}$/.test(dateString)) return false;
    const [y, m, d] = dateString.split("-").map((s) => Number(s));
    const date = new Date(y, m - 1, d);
    return (
      date.getFullYear() === y &&
      date.getMonth() === m - 1 &&
      date.getDate() === d
    );
  };

  const handleRegister = () => {

    if (!nombre.trim() || !correo.trim() || !password || !confirmar) {
      Alert.alert("Error", "Por favor completa los campos obligatorios.");
      return;
    }


    if (!validateEmail(correo)) {
      Alert.alert("Error", "Ingresa un correo electrónico válido.");
      return;
    }


    if (password.length < 6) {
      Alert.alert("Error", "La contraseña debe tener al menos 6 caracteres.");
      return;
    }


    if (password !== confirmar) {
      Alert.alert("Error", "Las contraseñas no coinciden.");
      return;
    }

    if (telefono.trim()) {
      const onlyDigits = telefono.replace(/\D/g, "");
      if (onlyDigits.length < 7 || onlyDigits.length > 15) {
        Alert.alert(
          "Teléfono inválido",
          "Ingresa un teléfono válido (entre 7 y 15 dígitos)."
        );
        return;
      }
    }


    if (fechaNacimiento.trim() && !isValidDate(fechaNacimiento.trim())) {
      Alert.alert(
        "Fecha inválida",
        "La fecha debe estar en formato YYYY-MM-DD (ej: 1990-05-23)."
      );
      return;
    }


    Alert.alert("Registro exitoso", `Bienvenido, ${nombre}!`);
    navigation.navigate("Tabs", { email: correo });
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Registro</Text>

      <CustomInput
        placeholder="Nombre completo"
        value={nombre}
        onChange={setNombre}
        type="text"
      />

      <CustomInput
        placeholder="Correo electrónico"
        value={correo}
        onChange={setCorreo}
        type="email"
      />

      <CustomInput
        placeholder="Contraseña"
        value={password}
        onChange={setPassword}
        type="password"
      />

      <CustomInput
        placeholder="Confirmar contraseña"
        value={confirmar}
        onChange={setConfirmar}
        type="password"
      />

      <CustomInput
        placeholder="Teléfono (opcional)"
        value={telefono}
        onChange={setTelefono}
        type="number"
      />

      <CustomInput
        placeholder="Fecha de nacimiento (YYYY-MM-DD) (opcional)"
        value={fechaNacimiento}
        onChange={setFechaNacimiento}
        type="text"
      />

      <CustomButton title="Registrarme" onPress={handleRegister} />

      <CustomButton
        title="Volver al inicio de sesión"
        variant="secondary"
        onPress={() => navigation.navigate("Login")}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    justifyContent: "center",
  },
  title: {
    fontSize: 22,
    fontWeight: "700",
    marginBottom: 16,
    textAlign: "center",
  },
});
