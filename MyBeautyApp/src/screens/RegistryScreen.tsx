import { View, StyleSheet, ScrollView, Text } from "react-native";
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
    navigation.navigate("Login"); 
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>Registro</Text>

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
          onChange={(text) =>
            setUsuario({ ...usuario, confirmarContrasena: text })
          }
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
          onChange={(text) =>
            setUsuario({ ...usuario, fechaNacimiento: text })
          }
        />

        <CustomButton title="Registrarme" onPress={handleRegister} />
        <CustomButton
          title="Ya tengo una cuenta"
          variant="secondary"
          onPress={() => navigation.navigate("Login")}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#f2f2f2",
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
  },
  title: {
    fontWeight: "bold",
    fontSize: 26,
    textAlign: "center",
    marginBottom: 20,
    color: "#393434ff",
  },
});
