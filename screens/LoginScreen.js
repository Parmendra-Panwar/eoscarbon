// screens/LoginScreen.js
import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import { Picker } from "@react-native-picker/picker";

export default function LoginScreen({ navigation }) {
  const [username, setUsername] = useState("");
  const [password, setpassword] = useState("");
  const [role, setRole] = useState("admin");

  const handleLogin = () => {
    if (!username.trim()) {
      alert("Please enter a username");
      return;
    }
    if (role === "admin") navigation.navigate("Admin", { username });
    else if (role === "superadmin") navigation.navigate("SuperAdmin", { username });
    else navigation.navigate("Farmer", { username });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Login</Text>

      <TextInput
        style={styles.input}
        placeholder="Enter Username"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter Password"
        value={password}
        onChangeText={setpassword}
      />

      <Picker
        selectedValue={role}
        style={styles.picker}
        onValueChange={(itemValue) => setRole(itemValue)}
      >
        <Picker.Item label="Admin" value="admin" />
        <Picker.Item label="Super Admin" value="superadmin" />
        <Picker.Item label="Farmer" value="farmer" />
      </Picker>

      <Button title="Login" onPress={handleLogin} />
      <View style={{ marginTop: 10 }}>
        <Button
          title="Go to Sign Up"
          onPress={() => navigation.navigate("Sign Up")}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
    backgroundColor: "#fff",
  },
  heading: {
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 12,
    marginBottom: 20,
    borderRadius: 8,
  },
  picker: {
    marginBottom: 20,
  },
});
