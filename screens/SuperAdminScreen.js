// screens/SuperAdminScreen.js
import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

export default function SuperAdminScreen({ route, navigation }) {
  const { username } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome, {username}!</Text>
      <Text style={styles.subtitle}>You are logged in as Super Admin</Text>
      <Button title="Logout" onPress={() => navigation.navigate("Login")} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  title: { fontSize: 28, fontWeight: "bold" },
  subtitle: { fontSize: 18, marginVertical: 10 },
});
