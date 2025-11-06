import { View, StyleSheet, ScrollView } from "react-native";
import CustomInput from "../components/CustomInput";
import CustomButton from "../components/CustomButton";
import { useState } from "react";

export default function Registro({ navigation }: any) {
  const [usuario, setUsuario] = useState({
    nombreCompleto: "",
    correo: "",
    contrasena: "",
    confirmarContrasena: "",
    telefono: "",
    fechaNacimiento: "",
  });

  const handleRegister = () => {
    console.log("Datos del usuario:", usuario);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <CustomInput
        value={usuario.nombreCompleto}
        placeholder="Nombre completo"
        onChange={(text) => setUsuario({ ...usuario, nombreCompleto: text })}
        required
      />

      <CustomInput
        value={usuario.correo}
        placeholder="Correo electrónico"
        onChange={(text) => setUsuario({ ...usuario, correo: text })}
        type="email"
        required
      />

      <CustomInput
        value={usuario.contrasena}
        placeholder="Contraseña"
        onChange={(text) => setUsuario({ ...usuario, contrasena: text })}
        type="password"
        required
      />

      <CustomInput
        value={usuario.confirmarContrasena}
        placeholder="Confirmar contraseña"
        onChange={(text) => setUsuario({ ...usuario, confirmarContrasena: text })}
        type="password"
        required
      />

      <CustomInput
        value={usuario.telefono}
        placeholder="Teléfono"
        onChange={(text) => setUsuario({ ...usuario, telefono: text })}
        type="number"
      />

      <CustomInput
        value={usuario.fechaNacimiento}
        placeholder="Fecha de nacimiento (YYYY-MM-DD)"
        onChange={(text) => setUsuario({ ...usuario, fechaNacimiento: text })}
      />

      <CustomButton title="Registrarme" onPress={handleRegister} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "#fff",
  },
});
