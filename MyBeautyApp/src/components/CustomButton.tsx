import React from "react";
import { StyleSheet, Text, TouchableOpacity, ViewStyle, TextStyle } from "react-native";

type Variant = "primary" | "secondary" | "tertiary";

type Props = {
  title: string;
  onPress: () => void;
  variant?: Variant;
};

export default function CustomButton({ title, onPress, variant = "primary" }: Props) {
  const styles = getStyles(variant);
  return (
    <TouchableOpacity style={styles.button} onPress={onPress} activeOpacity={0.85}>
      <Text style={styles.buttonTitle}>{title}</Text>
    </TouchableOpacity>
  );
}

const getStyles = (variant: Variant) =>
  StyleSheet.create<{ button: ViewStyle; buttonTitle: TextStyle }>({
    button: {
      borderColor: "#000",
      borderRadius: 8,
      paddingVertical: 12,
      paddingHorizontal: 16,
      marginBottom: 12,
      alignSelf: "stretch",
      alignItems: "center",
      backgroundColor:
        variant === "primary" ? "#2d0f2fff" : variant === "secondary" ? "#E3DBDB" : "#ffffff",
    },
    buttonTitle: {
      fontWeight: "bold",
      color: variant === "primary" ? "#ffffff" : variant === "secondary" ? "#000000" : "#656c78",
    },
  });
