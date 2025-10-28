import { StyleSheet, Text, View } from 'react-native';
import CustomInput from './src/components/CustomInput';
import { useState } from 'react';

export default function App() {
const [email, setEmail] = useState('');

  return (
    <View style={styles.container}>
       <CustomInput 
       value={email} 
       placeholder={'Correo'} 
       onChange={setEmail}          
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    //habilita uso de flexbox para distribucion de espacio
    flex:1,
    //distribucion en eje horizontal
    alignItems: 'center',
    //alineacion en eje vertical
    justifyContent: 'center',
    padding: 20,
    backgroundColor:'red',
  },
  content:{
    color: '#fff',
  }
});
