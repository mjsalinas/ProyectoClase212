import { View } from "react-native";
import CustomInput from "../components/CustomInput";
import { useState } from "react";


export default function Registro(){

    const [usuario,SetUsuario] = useState({
        Nombre: '',
        correo: '', 
        password: '',
        telefono: '',
        fechaDeNacimiento: ''})
    return(
        <View>
            <CustomInput 
            value={usuario.Nombre} 
            placeholder={"Ingresa tu nombre completo"} 
            onChange={(text)=>SetUsuario({...usuario, Nombre: text})}            
            />

        </View>
    )
}