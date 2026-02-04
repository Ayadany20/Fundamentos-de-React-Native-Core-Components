import React, { useState } from "react";
import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity
} from "react-native";

export default function HomeScreen() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Fundamentos de React Native & Core Components👽</Text>

      <Image
        style={styles.image}
        source={{ uri: "https://images.pexels.com/photos/338515/pexels-photo-338515.jpeg" }}
      />

      <TextInput
        style={styles.input}
        placeholder="Escribe tu nombre"
        value={name}
        onChangeText={setName}
      />

      <TouchableOpacity
        style={styles.button}
        onPress={() => setMessage(`Hola ${name}, ¡bienvenido a React Native😎!,
          ¿Listo para comenzar algo increíble?`)}
      >
        <Text style={styles.buttonText}>Saludar</Text>
      </TouchableOpacity>

      <Text style={styles.output}>{message}</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#f5f5f5",
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    fontWeight: "bold",
  },
  image: {
    width: 180,
    height: 180,
    borderRadius: 15,
    marginBottom: 20,
  },
  input: {
    width: "80%",
    padding: 12,
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: "#fff",
    borderColor: "#ccc",
    marginBottom: 15,
  },
  button: {
    backgroundColor: "#007BFF",
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 12,
    marginBottom: 20,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
  },
  output: {
    fontSize: 18,
    marginTop: 10,
    textAlign: "center",
  },
});
