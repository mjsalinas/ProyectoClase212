import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useAuth } from "../contexts/AuthContext";
import { i18n } from "../contexts/LanguageContext";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const { login } = useAuth();
  const navigation = useNavigation<any>();

  const handleLogin = () => {
<<<<<<< HEAD
    try {
      navigation.navigate('Tabs');
    } catch (error) {
      console.log(error);
    }
  }

  const handleGoToRegister = () => {
    navigation.navigate('ServiceRegistry');
  };



  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}> {i18n.t('signIn')} </Text>
        <CustomInput
          value={email}
          type='email'
          placeholder={'Correo'}
          onChange={setEmail}
        />
        <CustomInput
          value={'123456'}
          type='password'
          placeholder={'Correo'}
          onChange={() => { }}
        />
        <CustomButton title={i18n.t('signIn')}
          onPress={handleLogin}>


        </CustomButton>
        <CustomButton title={i18n.t('signUp')} variant='secondary' onPress={() =>{}}>
        </CustomButton>
      </View>
=======
    if (email.endsWith(".edu")) {
      login(email);
      navigation.navigate("Home");
    } else {
      alert("Solo se permite acceso a correos .edu");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{i18n.t("email")}</Text>
      <TextInput
        value={email}
        onChangeText={setEmail}
        style={styles.input}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <Button title={i18n.t("login")} onPress={handleLogin} color="#FFD3E0" />
>>>>>>> 0501b903c497bb70ba61327aca8617f322f36b07
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", padding: 20 },
  label: { fontSize: 18, marginBottom: 10 },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    marginBottom: 20,
    padding: 10,
    borderRadius: 6,
  },
});

export default LoginScreen;