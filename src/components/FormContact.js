import React, { useState } from "react";
import {
  View,
  TextInput,
  Button,
  Alert,
  ImageBackground,
  Pressable,
} from "react-native";
import { styles } from "../styles/theme";

export const FormContact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = () => {
    if (name && email) {
      // Realizar alguna acción con los datos del formulario
      Alert.alert("Éxito", "Formulario enviado correctamente");
    } else {
      Alert.alert("Error", "Por favor, complete todos los campos");
    }
  };

  return (
    <View style={{ justifyContent: "center", alignItems: "center" }}>
      <TextInput
        placeholder="Nombre"
        value={name}
        onChangeText={(text) => setName(text)}
      />
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      <Pressable style={styles.buttonHome} onPress={handleSubmit}>
      
      </Pressable>
    </View>
  );
};
