// screens/SignupScreen.js
import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import { Picker } from "@react-native-picker/picker";

export default function SignupScreen({ navigation }) {
  const [username, setUsername] = useState("");
  const [role, setRole] = useState("admin");

  const handleSignup = () => {
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
      <Text style={styles.heading}>Sign Up</Text>

      <TextInput
        style={styles.input}
        placeholder="Choose a Username"
        value={username}
        onChangeText={setUsername}
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

      <Button title="Sign Up" onPress={handleSignup} />
      <View style={{ marginTop: 10 }}>
        <Button title="Back to Login" onPress={() => navigation.navigate("Login")} />
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
