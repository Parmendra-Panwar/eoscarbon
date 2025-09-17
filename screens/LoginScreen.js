// screens/LoginScreen.js
import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet, ScrollView } from "react-native";
import { Picker } from "@react-native-picker/picker";
import AppLayout from "../components/AppLayout";

export default function LoginScreen({ navigation }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("farmer");

  const handleLogin = () => {
    if (!username.trim()) {
      alert("Please enter a username");
      return;
    }
    if (!password.trim()) {
      alert("Please enter a password");
      return;
    }

    if (role === "admin") navigation.navigate("Admin", { username });
    else if (role === "superadmin") navigation.navigate("SuperAdmin", { username });
    else if (role === "businessman") navigation.navigate("Businessman", { username });
    else navigation.navigate("Farmer", { username });
  };

  return (
    <AppLayout>
    <ScrollView contentContainerStyle={styles.container}>
      {/* Branding + Intro */}
      {/* <Text style={styles.logo}>🌍 EosCarbon</Text> */}
      <Text style={styles.tagline}>
        A step towards a greener future
      </Text>
      <Text style={styles.description}>
        EosCarbon connects{" "}
        <Text style={{ fontWeight: "600" }}>Farmers</Text> who grow carbon
        absorbing crops with{" "}
        <Text style={{ fontWeight: "600" }}>Businesses</Text> needing to offset
        their emissions. NGOs and Government authorities ensure verification and
        transparency.{"\n\n"}
        Choose your role and login to continue.
      </Text>

      {/* Login form */}
      <Text style={styles.heading}>Login</Text>

      <Picker
        selectedValue={role}
        style={styles.picker}
        onValueChange={(itemValue) => setRole(itemValue)}
      >
        <Picker.Item label="Farmer" value="farmer" />
        <Picker.Item label="Businessman" value="businessman" />
        <Picker.Item label="Admin (NGO)" value="admin" />
        <Picker.Item label="Super Admin (Gov)" value="superadmin" />
      </Picker>

      <TextInput
        style={styles.input}
        placeholder="Enter Username"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      <View style={styles.buttonContainer}>
        <Button title="Login" onPress={handleLogin} />
      </View>

      <View style={{ marginTop: 10 }}>
        <Button
          title="Go to Sign Up"
          onPress={() => navigation.navigate("Sign Up")}
          color="#007BFF"
        />
      </View>
    </ScrollView>
    </AppLayout>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: "#f4f8fb",
  },
  logo: {
    fontSize: 32,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
    color: "#2E7D32",
  },
  tagline: {
    fontSize: 16,
    textAlign: "center",
    marginBottom: 15,
    color: "#555",
  },
  description: {
    fontSize: 14,
    textAlign: "center",
    marginBottom: 25,
    color: "#444",
    lineHeight: 20,
  },
  heading: {
    fontSize: 22,
    fontWeight: "600",
    marginBottom: 15,
    textAlign: "center",
    color: "#333",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 12,
    marginBottom: 20,
    borderRadius: 8,
    backgroundColor: "#fff",
  },
  picker: {
    marginBottom: 20,
    backgroundColor: "#fff",
    borderRadius: 8,
  },
  buttonContainer: {
    marginBottom: 10,
  },
});
