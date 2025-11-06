import { View, Text, StyleSheet } from "react-native";
import CustomInput from "../components/CustomInput";
import { useState } from "react";

export default function RegisterScreen() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [phone, setPhone] = useState('');
    const [birthdate, setBirthdate] = useState('');

  return (
    <View style={styles.container}>
    <View style={styles.card}>
        <Text style={styles.title}>Registro</Text>
        <Text style={styles.subTitle}>Ingrese su nombre completo</Text>
        <CustomInput
            value={name}
            type='text'
            placeholder="Nombre Completo"
            onChange={setName}
        />

        <Text style={styles.subTitle}>Ingrese su correo electrónico</Text>
        <CustomInput
            value={email}
            type='email'
            placeholder="Correo Electrónico"
            onChange={setEmail}
        />

        <Text style={styles.subTitle}>Ingrese su contraseña</Text>
        <CustomInput
            value={password}
            type='password'
            placeholder="Contraseña"
            onChange={setPassword}
        />

        <Text style={styles.subTitle}>Confirme su contraseña</Text>
        <CustomInput
            value={confirmPassword}
            type='password'
            placeholder="Confirmar Contraseña"
            onChange={setConfirmPassword}
        />
        
        <Text style={styles.subTitle}>Ingrese su número de teléfono</Text>
        <CustomInput
            value={phone}
            type='phone'
            placeholder="Número de Teléfono"
            onChange={setPhone}
        />
        <Text style={styles.subTitle}>Ingrese su fecha de nacimiento</Text>
        <CustomInput
            value={birthdate}
            type='date'
            placeholder="Fecha de Nacimiento"
            onChange={setBirthdate}
        />
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    //habilita uso de flexbox para distribucion de espacio
    flex: 1,
    //distribucion en eje horizontal
    alignItems: 'center',
    //alineacion en eje vertical
    justifyContent: 'center',
    padding: 20,
  },
  card: {
   backgroundColor: '#FFFFFF',
    borderRadius: 15,
    padding: 30,
    width: '85%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 6,
    justifyContent: 'space-between'
  },
  title: {
    fontWeight: 'bold',
    fontSize: 28,
    textAlign: 'center',
    marginBottom: 20,
    color: '#393434ff',
  },
  subTitle: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 5,
    fontStyle: 'italic',
  },
});
