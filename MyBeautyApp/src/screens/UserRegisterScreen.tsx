import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet, ScrollView } from "react-native";
import CustomButton from "../components/CustomButton";

export default function UserRegisterScreen({ navigation }: any) {
  const [form, setForm] = useState({
    nombre: "",
    correo: "",
    contraseña: "",
    confirmar: "",
    telefono: "",
    fechaNacimiento: "",
  });

  const handleRegister = () => {
    console.log("Datos registrados:", form);
    alert("Usuario registrado correctamente");
    navigation.goBack(); // vuelve al login
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>Registro de Usuario</Text>

        <TextInput
          style={styles.input}
          placeholder="Nombre completo"
          value={form.nombre}
          onChangeText={(t) => setForm({ ...form, nombre: t })}
        />

        <TextInput
          style={styles.input}
          placeholder="Correo electrónico"
          keyboardType="email-address"
          value={form.correo}
          onChangeText={(t) => setForm({ ...form, correo: t })}
        />

        <TextInput
          style={styles.input}
          placeholder="Contraseña"
          secureTextEntry
          value={form.contraseña}
          onChangeText={(t) => setForm({ ...form, contraseña: t })}
        />

        <TextInput
          style={styles.input}
          placeholder="Confirmar contraseña"
          secureTextEntry
          value={form.confirmar}
          onChangeText={(t) => setForm({ ...form, confirmar: t })}
        />

        <TextInput
          style={styles.input}
          placeholder="Teléfono"
          keyboardType="phone-pad"
          value={form.telefono}
          onChangeText={(t) => setForm({ ...form, telefono: t })}
        />

        <TextInput
          style={styles.input}
          placeholder="Fecha de nacimiento (YYYY-MM-DD)"
          value={form.fechaNacimiento}
          onChangeText={(t) => setForm({ ...form, fechaNacimiento: t })}
        />

        <CustomButton title="Registrar" onPress={handleRegister} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F8F9FA",
    padding: 20,
  },
  card: {
    width: "90%",
    backgroundColor: "#fff",
    borderRadius: 15,
    padding: 20,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 4,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },
  input: {
    width: "100%",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 12,
    marginBottom: 10,
    backgroundColor: "#fff",
  },
});
