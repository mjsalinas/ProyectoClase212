// RegisterScreen.tsx
import { View, Text, StyleSheet } from "react-native";
import CustomInput from "../../components/CustomInput";
import CustomButton from "../../components/CustomButton";
import { useState } from "react";

<<<<<<< HEAD:MyBeautyApp/src/screens/services/ServiceRegistryScreen.tsx
export default function ServiceRegistryScreen({ navigation }: any) {
    const [nombreCompleto, setNombreCompleto] = useState('');
    const [correoElectronico, setCorreoElectronico] = useState('');
    const [contrasena, setContrasena] = useState('');
    const [confirmarContrasena, setConfirmarContrasena] = useState('');
    const [telefono, setTelefono] = useState('');
    const [fechaNacimiento, setFechaNacimiento] = useState('');
=======
export default function AppointmentScreen({navigation}: any){
    const [item, setItem] = useState('');
>>>>>>> 0501b903c497bb70ba61327aca8617f322f36b07:MyBeautyApp/src/screens/appointments/AppointmentScreen.tsx

    const handleRegister = () => {
        console.log("Registrando usuario...");
        console.log("Nombre Completo:", nombreCompleto);
        console.log("Correo Electrónico:", correoElectronico);
        console.log("Contraseña:", contrasena);
        console.log("Confirmar Contraseña:", confirmarContrasena);
        console.log("Teléfono:", telefono);
        console.log("Fecha de Nacimiento:", fechaNacimiento);

        navigation.goBack();
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Registro de Usuario</Text>

            <CustomInput
                value={nombreCompleto}
                placeholder="Nombre completo"
                onChange={setNombreCompleto}
            />
            <CustomInput
                value={correoElectronico}
                placeholder="Correo electrónico"
                onChange={setCorreoElectronico}
                type="email"
            />
            <CustomInput
                value={contrasena}
                placeholder="Contraseña"
                onChange={setContrasena}
                type="password"
            />
            <CustomInput
                value={confirmarContrasena}
                placeholder="Confirmar contraseña"
                onChange={setConfirmarContrasena}
                type="password"
            />
            <CustomInput
                value={telefono}
                placeholder="Teléfono"
                onChange={setTelefono}
                type="number"
            />
            <CustomInput
                value={fechaNacimiento}
                placeholder="Fecha de nacimiento (DD/MM/AAAA)"
                onChange={setFechaNacimiento}
            />

            <CustomButton
                title="Registrarme"
                onPress={handleRegister}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        justifyContent: 'center',
        backgroundColor: '#f5f5f5',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 30,
        textAlign: 'center',
        color: '#333',
    },
});