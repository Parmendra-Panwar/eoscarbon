import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import AppLayout from "../components/AppLayout";

export default function AdminScreen({ route, navigation }) {
  const { username } = route.params;

  return (
    <AppLayout>
    <View style={styles.container}>
      <View style={{ marginTop: 20, alignSelf: "flex-end" }}>
        <Button title="Logout" onPress={() => navigation.navigate("Login")} />
      </View>
      <Text style={styles.title}>Welcome, {username}!</Text>
      <Text style={styles.subtitle}>You are logged in as Verifier</Text>
      <Text style={styles.info}>
        As an Verifier, you are responsible for reviewing blue carbon crop
        requests submitted by NGOs. You can approve or reject them before they
        go to Government Superadmin.
      </Text>
      <Button
        title="View Requests"
        onPress={() => navigation.navigate("Requests")}
      />
    </View>
    </AppLayout>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center", padding: 20 },
  title: { fontSize: 28, fontWeight: "bold", marginBottom: 10 },
  subtitle: { fontSize: 18, marginBottom: 10 },
  info: { fontSize: 14, textAlign: "center", marginBottom: 20, color: "#555" },
});
