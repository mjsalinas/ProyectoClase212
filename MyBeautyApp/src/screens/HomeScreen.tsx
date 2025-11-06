import { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import CustomButton from "../components/CustomButton";

export default function HomeScreen({ navigation, route }: any) {
  const [items, setItems] = useState<string[]>([]);
  const routeItem = route.params?.newItem;
  const userEmail = route.params?.email;

  useEffect(() => {
    console.log("item por parámetros:", routeItem);
  }, [routeItem]);

  const handleRegisterService = () => {
    navigation.navigate("ServiceRegistry");
  };

  return (
    <View style={styles.container}>

      {userEmail && (
        <Text style={styles.welcomeText}>Bienvenido: {userEmail}</Text>
      )}

      <CustomButton
        title="Agregar un servicio"
        onPress={handleRegisterService}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
  },
  welcomeText: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 20,
    textAlign: "center",
  },
});
