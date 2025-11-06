import { View, Text, StyleSheet } from "react-native";
import CustomInput from "../../components/CustomInput";
import { useState } from "react";
import CustomButton from "../../components/CustomButton";

export default function ServiceRegisterScreen({navigation}: any){
    const [item, setItem] = useState({
        name: '',
        email: '',
        password: '',
        checkPassword: '',
        phone: '',
        date: '',
    }
    );

    const handleOnSave = () => {
        if (item.name.trim() === '') return;
        if (item.email.trim() === '') return;
        if (item.password.trim() === '') return;
        if (item.checkPassword.trim() === '') return;
        if (item.phone.trim() === '') return;
        if (item.date.trim() === '') return;

        navigation.navigate('Tabs', {
            screen: 'Home',
            params: {newItem: item}
        });
    };
    return(
        <View style={styles.container}>
            <Text style={styles.title}>Nombre Completo</Text>
            <CustomInput 
                value={item.name} 
                placeholder="Ingrese nombre" 
                onChange={(name)=>setItem((prev)=>({...prev, name: name}))}
            />
            <Text style={styles.title}>Correo Electrónico</Text>
            <CustomInput 
                type="email"
                value={item.email} 
                placeholder="Ingrese correo" 
                onChange={(email)=>setItem((prev)=>({...prev, email:email}))}
            />
            <Text style={styles.title}>Contraseña</Text>
            <CustomInput 
                value={item.password} 
                placeholder="Ingrese contraseña" 
                onChange={(password)=>setItem((prev)=>({...prev, password:password}))}
            />
            <Text style={styles.title}>Confirmar Contraseña</Text>
            <CustomInput 
                value={item.checkPassword} 
                placeholder="Vuelva a ingresar su contraseña" 
                onChange={(checkPassword)=>setItem((prev)=>({...prev, checkPassword:checkPassword}))}
            />
            <Text style={styles.title}>Teléfono</Text>
            <CustomInput 
                type="number"
                value={item.phone} 
                placeholder="Ingrese su número" 
                onChange={(phone)=>setItem((prev)=>({...prev, phone:phone}))}
            />
            <Text style={styles.title}>Fecha de nacimiento</Text>
            <CustomInput 
                type="date"
                value={item.date} 
                placeholder="Formato dd/mm/aa" 
                onChange={(date)=>setItem((prev)=>({...prev, date:date}))}
            />

            <CustomButton 
                title="Guardar"
                onPress={handleOnSave}
            />
        </View>
    );
}
const styles = StyleSheet.create({
    container:{
        flex: 1, 
        padding: 10, 
        justifyContent: 'center' 
    },
    title:{
        fontSize: 15, marginBottom: 10 
    }
})