import { View, Text, StyleSheet, TextInput, Alert } from "react-native";
import { useState } from "react";
import CustomButton from "../../components/CustomButton";
import { getThemeColors } from "../../utils/theme";
import { useTheme } from "../../contexts/ThemeContext";
import api from "../../services/api";

export default function AppointmentScreen({ navigation }: any) {
    const [item, setItem] = useState('');
    const [clientName, setClientName] = useState("");
    const [serviceName, setServiceName] = useState("");
    const [date, setDate] = useState("");      // "2025-12-08"
    const [startTime, setStartTime] = useState(""); // "10:00"
    const [endTime, setEndTime] = useState("");     // "11:00"
    const [notes, setNotes] = useState("");

    const { theme } = useTheme();
    const colors = getThemeColors(theme);

    const handleCreateAppointment = async () => {
        if (!clientName || !serviceName || !date || !startTime || !endTime) {
            Alert.alert("Campos requeridos", "Complete los campos obligatorios para agendar una cita");
            return;
        }
        try {
            const response = await api.post("api/appointments",
                {
                    clientName,
                    serviceName,
                    date,
                    startTime,
                    endTime
                });
            console.log(response.data ? response.data : "No hay data por parte del servidor");
        } catch (error: any) {
            console.log(error?.response?.data || error.code);
            Alert.alert("Error", "No se pudo crear la cita");

            if (error.response){
                console.log("status: ", error.response.status);
                console.log("headers: ", error.response.headers);
            }
        }
    }
    return (
        <View style={styles.container}>
            <Text >Agendar cita</Text>

            <TextInput
                style={[styles.input, { color: colors.text }]}
                placeholder="Nombre del cliente"
                value={clientName}
                onChangeText={setClientName}
            />
            <TextInput
                style={[styles.input, { color: colors.text }]}
                placeholder="Servicio (ej. Corte y color)"
                value={serviceName}
                onChangeText={setServiceName}
            />
            <TextInput
                style={[styles.input, { color: colors.text }]}
                placeholder="Fecha (YYYY-MM-DD)"
                value={date}
                onChangeText={setDate}
            />
            <TextInput
                style={[styles.input, { color: colors.text }]}
                placeholder="Hora inicio (HH:MM)"
                value={startTime}
                onChangeText={setStartTime}
            />
            <TextInput
                style={[styles.input, { color: colors.text }]}
                placeholder="Hora fin (HH:MM)"
                value={endTime}
                onChangeText={setEndTime}
            />
            <TextInput
                style={[styles.input, { color: colors.text }]}
                placeholder="Notas"
                value={notes}
                onChangeText={setNotes}
                multiline
            />

            <CustomButton title="Agendar Cita" onPress={handleCreateAppointment} />
        </View>
    );
}
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