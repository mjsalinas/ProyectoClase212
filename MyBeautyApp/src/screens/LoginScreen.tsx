import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useAuth } from "../contexts/AuthContext";
import { i18n } from "../contexts/LanguageContext";
import CustomButton from "../components/CustomButton";
import { useTheme } from "../contexts/ThemeContext";
import { getThemeColors } from "../utils/theme";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();
  const navigation = useNavigation<any>();
  
  const { theme } = useTheme();
  const colors = getThemeColors(theme);

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
      login(email, password);
      navigation.navigate("Home");
    } else {
      alert("Solo se permite acceso a correos .edu");
    }
  };

  const handleRegister = () =>{
      navigation.navigate("Register");

  }
  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <Text style={[styles.label,  { color: colors.text }]}>{i18n.t("email")}</Text>
      <TextInput
        value={email}
        onChangeText={setEmail}
        style={[styles.input,  { color: colors.text }]}
        keyboardType="email-address"
        autoCapitalize="none"
      />
<<<<<<< HEAD
      <Button title={i18n.t("login")} onPress={handleLogin} color="#FFD3E0" />
>>>>>>> 0501b903c497bb70ba61327aca8617f322f36b07
=======
      <TextInput
        value={password}
        onChangeText={setPassword}
        style={[styles.input,  { color: colors.text }]}
        keyboardType="default"
        autoCapitalize="none"
      />
      <CustomButton title={i18n.t("login")} onPress={handleLogin}  />
      <CustomButton title={i18n.t("register")} onPress={handleRegister} />
>>>>>>> c74d85e8da89f9cbd5387109fabe96006fac2798
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