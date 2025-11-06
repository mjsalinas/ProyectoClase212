import { useEffect, useState } from "react";
import { View, Text } from "react-native";
import CustomButton from "../components/CustomButton";

export default function HomeScreen({navigation, route}: any) {
const [ items, setItems] = useState<string[]> ([]);

const routeItem = route.params?.newItem;

useEffect(()=>{
    console.log('item por parametros: ' + routeItem);
}, [])

const handleRegisterService = () =>{
navigation.navigate('ServiceRegistry');

}

const handleForm = () =>{
    navigation.navigate('RegistroUsuario');
}
    return(
        <View>
            <CustomButton title="Agrega un Servicio"
                onPress={handleRegisterService}/>
            <CustomButton title="Ir al Formulario de Registro"
                onPress={handleForm}/>
        </View>
    )
}