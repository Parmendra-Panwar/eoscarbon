// screens/SignupScreen.js
import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet, ScrollView } from "react-native";
import { Picker } from "@react-native-picker/picker";
import AppLayout from "../components/AppLayout";

export default function SignupScreen({ navigation }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("farmer");

  const handleSignup = () => {
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
      {/* Branding */}
      {/* <Text style={styles.logo}>🌍 EosCarbon</Text> */}
      <Text style={styles.tagline}>Join the movement for a greener tomorrow</Text>
      <Text style={styles.description}>
        Create your account with{" "}
        <Text style={{ fontWeight: "600" }}>EosCarbon</Text> and become part of
        the ecosystem:{"\n\n"}
        <Text style={{ fontWeight: "600" }}>Farmers</Text>: Register your
        carbon-absorbing plantations{"\n"}
        <Text style={{ fontWeight: "600" }}>Businesses</Text>: Buy verified
        Blue Carbon credits{"\n"}
        Select your role below and sign up to get started.
      </Text>

      {/* Signup Form */}
      <Text style={styles.heading}>Sign Up</Text>
        <Picker
          selectedValue={role}
          style={styles.picker}
          onValueChange={(itemValue) => setRole(itemValue)}
        >
          <Picker.Item label="NGO" value="farmer" />
          <Picker.Item label="Businessman" value="businessman" />
          {/* <Picker.Item label="Admin (NGO)" value="admin" /> */}
          {/* <Picker.Item label="Super Admin (Gov)" value="superadmin" /> */}
        </Picker>


      <TextInput
        style={styles.input}
        placeholder="Choose a Username"
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
        <Button title="Sign Up" onPress={handleSignup} />
      </View>

      <View style={{ marginTop: 10 }}>
        <Button
          title="Back to Login"
          onPress={() => navigation.navigate("Login")}
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
    // justifyContent: "center",
    padding: 20,
    backgroundColor: "#f4f8fb",
  },
  logo: {
    fontSize: 32,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 5,
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
    marginBottom: 15,
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
