// src/screens/ServicesScreen.tsx
import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Alert,
} from "react-native";
import { supabase } from "../../services/supabaseClient";
import { errorMessageValidation } from "../../utils/validations/apiResponseErrorValidation";

type Service = {
  id: string;
  name: string;
  description: string | null;
  duration: number;
  price: number;
  category: string | null;
  is_active: boolean;
};

export default function ServicesScreen() {
  // Estado para el formulario
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [duration, setDuration] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");

  // Estado para la lista
  const [services, setServices] = useState<Service[]>([]);
  const [loading, setLoading] = useState(false);

  // Cargar servicios al montar la pantalla
  useEffect(() => {
    loadServices();
  }, []);

  const loadServices = async () => {
    setLoading(true);
    try {
  // Obtener servicios desde Supabase
      const {data, error} = await supabase
        .from("services")
        .select("*")
        .order("created_at", {ascending: false});
// validar errores
      if (error){ 
        errorMessageValidation(error, "Error al cargar servicios: ") 
        return 
      }
//asignar respuesta de base de datos al estado de la pantalla
        setServices(data as Service[])
    } finally {
      setLoading(false);
    }
  };

  const handleSaveService = async () => {
     if (!name || !duration || !price) {
      Alert.alert(
        "Campos requeridos",
        "Nombre, duración y precio son obligatorios."
      );
      return;
    }

    const durationNumber = parseInt(duration, 10);
    const priceNumber = parseFloat(price);

    if (isNaN(durationNumber) || isNaN(priceNumber)) {
      Alert.alert(
        "Formato inválido",
        "Duración y precio deben ser valores numéricos."
      );
      return;
    }

    // Agregar el nuevo servicio al arreglo local

    // const newService: Service = {
    //   id: Date.now().toString(), // ID local sencillo
    //   name,
    //   description: description || null,
    //   duration: durationNumber,
    //   price: priceNumber,
    //   category: category || null,
    //   is_active: true,
    // };
    // setServices((prev) => [newService, ...prev]);

    //Guardar en base de datos
    setLoading(true);
    try{
      const {error} = await supabase.from("services").insert({
        name, 
        description: description,
        duration: duration, 
        price,
        category,
      });
      // validar errores
      if (error){ 
        errorMessageValidation(error, "Error al crear servicio: ") 
        return 
      }
    // Limpiar formulario
    setName("");
    setDescription("");
    setDuration("");
    setPrice("");
    setCategory("");

    //recargar lista de servicios
    loadServices();

    }finally{
      setLoading(false);
    }


  };

  // Render de cada card de servicio
  const renderService = ({ item }: { item: Service }) => {
    return (
      <View style={styles.card}>
        <View style={styles.cardHeader}>
          <Text style={styles.serviceName}>{item.name}</Text>
          <Text style={styles.servicePrice}>L {item.price.toFixed(2)}</Text>
        </View>

        {item.category ? (
          <Text style={styles.categoryChip}>{item.category}</Text>
        ) : null}

        <Text style={styles.serviceDuration}>
          Duración: {item.duration} min
        </Text>

        {item.description ? (
          <Text style={styles.serviceDescription}>{item.description}</Text>
        ) : null}
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.screenTitle}>Servicios del salón</Text>

      {/* Formulario */}
      <View style={styles.formCard}>
        <Text style={styles.formTitle}>Agregar nuevo servicio</Text>

        <TextInput
          style={styles.input}
          placeholder="Nombre del servicio (ej. Corte de cabello)"
          placeholderTextColor="#94a3b8"
          value={name}
          onChangeText={setName}
        />

        <TextInput
          style={styles.input}
          placeholder="Descripción"
          placeholderTextColor="#94a3b8"
          value={description}
          onChangeText={setDescription}
        />

        <TextInput
          style={styles.input}
          placeholder="Duración (minutos)"
          placeholderTextColor="#94a3b8"
          value={duration}
          onChangeText={setDuration}
          keyboardType="numeric"
        />

        <TextInput
          style={styles.input}
          placeholder="Precio (ej. 350)"
          placeholderTextColor="#94a3b8"
          value={price}
          onChangeText={setPrice}
          keyboardType="numeric"
        />

        <TextInput
          style={styles.input}
          placeholder="Categoría (ej. Cabello, Uñas, Spa)"
          placeholderTextColor="#94a3b8"
          value={category}
          onChangeText={setCategory}
        />

        <TouchableOpacity
          style={[styles.mainButton, loading && { opacity: 0.7 }]}
          onPress={handleSaveService}
          disabled={loading}
        >
          <Text style={styles.mainButtonText}>
            {loading ? "Guardando..." : "Guardar servicio"}
          </Text>
        </TouchableOpacity>
      </View>

      {/* Lista de servicios */}
      <FlatList
        data={services}
        keyExtractor={(item) => item.id}
        renderItem={renderService}
        contentContainerStyle={{ paddingBottom: 32 }}
        ListEmptyComponent={
          !loading ? (
            <Text style={styles.emptyText}>
              Aún no hay servicios registrados.
            </Text>
          ) : null
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#020617",
    paddingHorizontal: 16,
    paddingTop: 40,
  },
  screenTitle: {
    fontSize: 22,
    fontWeight: "700",
    color: "#e5e7eb",
    marginBottom: 12,
  },
  formCard: {
    backgroundColor: "#0f172a",
    borderRadius: 16,
    padding: 14,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: "#1e293b",
  },
  formTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#e5e7eb",
    marginBottom: 10,
  },
  input: {
    backgroundColor: "#020617",
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 1,
    borderColor: "#1e293b",
    color: "#e5e7eb",
    marginBottom: 8,
    fontSize: 13,
  },
  mainButton: {
    backgroundColor: "#ec4899",
    borderRadius: 12,
    paddingVertical: 10,
    marginTop: 6,
    alignItems: "center",
    shadowColor: "#ec4899",
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.4,
    shadowRadius: 8,
    elevation: 4,
  },
  mainButtonText: {
    color: "#f9fafb",
    fontWeight: "600",
  },
  card: {
    backgroundColor: "#0b1120",
    borderRadius: 16,
    padding: 14,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "#1f2937",
  },
  cardHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 4,
  },
  serviceName: {
    color: "#e5e7eb",
    fontWeight: "600",
    fontSize: 15,
  },
  servicePrice: {
    color: "#f97316",
    fontWeight: "700",
    fontSize: 14,
  },
  serviceDuration: {
    color: "#9ca3af",
    fontSize: 12,
    marginTop: 2,
  },
  serviceDescription: {
    color: "#cbd5f5",
    fontSize: 13,
    marginTop: 6,
  },
  categoryChip: {
    alignSelf: "flex-start",
    backgroundColor: "#1d4ed8",
    color: "#e5e7eb",
    fontSize: 11,
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 999,
    marginBottom: 4,
  },
  emptyText: {
    textAlign: "center",
    color: "#6b7280",
    marginTop: 16,
  },
});