import {View, Text, StyleSheet, Alert} from "react-native";
import CustomInput from "../components/CustomInput";
import CustomButton from "../components/CustomButton";
import { useState } from "react";

export default function RegisterScreen({navigation} : any) {

// Tipos de datos para usar en registro
        const [fullName, setFullName] = useState('');
        const [email, setEmail] = useState('');
        const [password, setPassword] = useState('');
        const [confirmPassword, setConfirmPassword] = useState('');
        const [phone, setPhone] = useState('');
        const [birthDate, setBirthDate] = useState('');
// crear función flecha para poder redireccionarnos a tabs al finalizar
        const handleRegisterToTabs = () => {
            try {
         navigation.navigate('Tabs', { email });
         } catch (error) {
          console.log(error);
       }
 }

        return(
            //crear la estructura de la pantalla de registro usando CustomInput y sus configuraciones
            //estilizando cada componente para que se vea acorde
     <View style={styles.container}>
         <View style={styles.card}>
        <Text style={styles.titletxt}> Crea tu usuario</Text>
        <CustomInput
         //Como value es tipo string tendrá ese valor la constante que se agregue
         value={fullName}
         type='text'
         placeholder={'Nombre completo'}
         onChange={setFullName} />
          <CustomInput
              value={email}
              type='email'
              placeholder={'Correo electronico'}
              onChange={setEmail}/>
            
            <CustomInput
                value={password}
                type='password'
                 placeholder={'Contraseña'}
                 onChange={setPassword} />
                <CustomInput
                value={confirmPassword}
                 type='password'
                 placeholder={'Confirmar contraseña'}
                onChange={setConfirmPassword} />

                 <CustomInput
                value={phone}
                type='number'
                placeholder={'Telefono'}
                onChange={setPhone} />

                <CustomInput
                 value={birthDate}
                 type='text'
                 placeholder={'Fecha de nacimiento (YYYY-MM-DD)'}
                 onChange={setBirthDate} />

    <CustomButton title={'Registrarme'} onPress={handleRegisterToTabs} />
                        
</View>
     </View>
        );
}

const styles = StyleSheet.create({
    container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    },
    card: {
    backgroundColor: '#d4ceceff',
    borderRadius: 15,
    padding: 30,
    width: '85%',
    shadowColor: '#000000ff',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    justifyContent: 'space-between'
    },
    titletxt: {
    fontWeight: 'bold',
    fontSize: 21,
    textAlign: 'center',
    marginBottom: 20,
    color: '#780f8dff',
    }
});
