import { View, StyleSheet, Alert } from "react-native";
import { useState } from "react";
import CustomInput from "../components/CustomInput";
import CustomButton from "../components/CustomButton";

export default function RegistroUsuario({ navigation }: any) {
  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");
  const [clave, setClave] = useState("");
  const [repetirClave, setRepetirClave] = useState("");
  const [telefono, setTelefono] = useState("");
  const [nacimiento, setNacimiento] = useState("");

  const enviarFormulario = () => {
    if (!nombre || !correo) {
      Alert.alert("Atención", "Por favor completa todos los campos requeridos.");
      return;
    }

    if (clave !== repetirClave) {
      Alert.alert("Error", "Las contraseñas no coinciden.");
      return;
    }

    const datos = {
      nombre,
      correo,
      clave,
      repetirClave,
      telefono,
      nacimiento,
    };

    navigation.navigate("Tabs", {
      screen: "Home",
      params: { datos },
    });
  };

  return (
    <View style={styles.container}>
      <CustomInput
        value={nombre}
        placeholder="Nombre completo"
        onChange={setNombre}
      />
      <CustomInput
        value={correo}
        placeholder="Correo electrónico"
        type="email"
        onChange={setCorreo}
      />
      <CustomInput
        value={clave}
        placeholder="Contraseña"
        type="password"
        onChange={setClave}
      />
      <CustomInput
        value={repetirClave}
        placeholder="Repetir contraseña"
        type="password"
        onChange={setRepetirClave}
      />
      <CustomInput
        value={telefono}
        placeholder="Número de teléfono"
        type="number"
        onChange={setTelefono}
      />
      <CustomInput
        value={nacimiento}
        placeholder="Fecha de nacimiento"
        type="text"
        onChange={setNacimiento}
      />

      <CustomButton title="Registrar" onPress={enviarFormulario} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 25,
    justifyContent: "center",
    backgroundColor: "#fff",
  },
});