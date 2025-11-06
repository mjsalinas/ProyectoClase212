import { useEffect, useState } from "react";
import { View, Text } from "react-native";
import CustomButton from "../components/CustomButton";

export default function HomeScreen({navigation, route}: any) {
const [ items, setItems] = useState<any[]> ([]);
const routeItem = route.params?.newItem;

useEffect(()=>{
    if(routeItem){
        setItems((prev)=>[...prev, routeItem])
        console.log('item por parametros: ' + routeItem);
    }
    
}, [])

const handleRegisterService = () =>{
    navigation.navigate('ServiceRegistry');
}
    return(
        <View>
            <CustomButton title="Agrega un Servicio"
                onPress={handleRegisterService}/>

            {items.map((item, index)=>(
                <View key={index}>
                    <Text>Nombre: {item.name}</Text>
                    <Text>Correo: {item.email}</Text>
                    <Text>Telefono: {item.phone}</Text>
                    <Text>Fecha de nacimiento: {item.date}</Text>
                </View>
            ))}
            
        </View>
    )
}