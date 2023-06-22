import React, { useEffect, useState } from "react";
import { View, TextInput, Button, StyleSheet, Alert } from "react-native";
import { useStorage } from "../hooks/use-storage";

const RegisterScreen = () => {
  const { getRegisterData, storeRegisterData } = useStorage();
  const [formData, setFormData] = useState({
    nome: "",
    endereco: "",
    estado: "",
    cidade: "",
    telefone: "",
    email: "",
  });

  const handleInputChange = (key, value) => {
    setFormData({ ...formData, [key]: value });
  };

  const handleRegister = async () => {
    console.log("Dados de cadastro:", formData);
    await storeRegisterData(formData);
    Alert.alert("Sucesso!", "Dados salvos com sucesso!");
  };

  useEffect(() => {
    getRegisterData().then((data) => {
      if (data) {
        setFormData(data);
      }
    });
  }, []);

  return (
    <View style={styles.container}>
      <TextInput style={styles.input} placeholder="Nome" value={formData.nome} onChangeText={(value) => handleInputChange("nome", value)} />
      <TextInput
        style={styles.input}
        placeholder="Endereço"
        value={formData.endereco}
        onChangeText={(value) => handleInputChange("endereco", value)}
      />
      <TextInput
        style={styles.input}
        placeholder="Estado"
        value={formData.estado}
        onChangeText={(value) => handleInputChange("estado", value)}
      />
      <TextInput
        style={styles.input}
        placeholder="Cidade"
        value={formData.cidade}
        onChangeText={(value) => handleInputChange("cidade", value)}
      />
      <TextInput
        style={styles.input}
        placeholder="Telefone"
        value={formData.telefone}
        onChangeText={(value) => handleInputChange("telefone", value)}
      />
      <TextInput
        style={styles.input}
        placeholder="E-mail"
        value={formData.email}
        onChangeText={(value) => handleInputChange("email", value)}
      />

      <Button title="Registrar" onPress={handleRegister} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  input: {
    width: "100%",
    height: 40,
    marginBottom: 10,
    paddingHorizontal: 10,
    borderColor: "cornflowerblue",
    borderWidth: 1,
    borderRadius: 5,
  },
});

export default RegisterScreen;
