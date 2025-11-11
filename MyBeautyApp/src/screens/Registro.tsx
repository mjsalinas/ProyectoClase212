import { View, Text, StyleSheet } from "react-native";
import { useState } from "react";
import CustomInput from "../components/CustomInput";
import CustomButton from "../components/CustomButton";


export default function Registro({navigation}:any){


        const [name, setName] = useState('');
        const [email, setEmail] = useState('');
        const [password, setPassword] = useState('');
        const [confirmPassword, setConfirmPassword] = useState('');
        const [phone, setPhone] = useState('');
        const [dob, setDob] = useState('');

        const handleSendForm = () => {
            if (name.trim() === '' || email.trim() === '') return;

            const form = {
                name,
                email,
                password,
                confirmPassword,
                phone,
                dob,
            };

            navigation.navigate('Tabs', {
                screen: 'Home',
                params: { form }
            });
        };

        return (
            <View style={styles.container}>
                <CustomInput
                    value={name}
                    placeholder="Nombre Completo"
                    onChange={setName}
                />
                <CustomInput
                    value={email}
                    placeholder="Correo electrónico"
                    type="email"
                    onChange={setEmail}
                />
                <CustomInput
                    value={password}
                    placeholder="Contraseña"
                    type="password"
                    onChange={setPassword}
                />
                <CustomInput
                    value={confirmPassword}
                    placeholder="Confirmar contraseña"
                    type="password"
                    onChange={setConfirmPassword}
                />
                <CustomInput
                    value={phone}
                    placeholder="Teléfono"
                    type="number"
                    onChange={setPhone}
                />
                <CustomInput
                    value={dob}
                    placeholder="Fecha de nacimiento"
                    type="number"
                    onChange={setDob}
                />

                <CustomButton
                    title="Enviar"
                    onPress={handleSendForm}
                />
            </View>
        );
    }

    const styles = StyleSheet.create({
        container:{
            flex: 1,
            padding: 20,
            justifyContent: 'center'
        },
        title:{
            fontSize: 20, marginBottom: 10
        }
    });
    

    
