import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

type Props = {
    title: string;
    onPress: () => void;
    variant?: "primary" | "secondary" | "tertiary";
};
export default function CustomButton({title, onPress, variant = "primary"}: Props){
    const styles = getStyles(variant);

    return(
            <TouchableOpacity style={styles.button} onPress={onPress}>
                <Text style={styles.buttonTitle}> {title} </Text>
            </TouchableOpacity>
    );
} 

const getStyles = (variant: 'primary' | 'secondary' | 'tertiary') => 
    StyleSheet.create(
        {
            button:{
                borderColor: "#000",
                borderRadius: 6,
                padding: 12, 
                backgroundColor: variant === "primary" ? 'pink' : 'red'
            }, 
            buttonTitle:{
                color: 'white',
                fontWeight: 'bold'
            }
        }
    )