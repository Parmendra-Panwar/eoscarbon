import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

export default function SuperAdminScreen({ route, navigation }) {
  const { username } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome, {username}!</Text>
      <Text style={styles.subtitle}>You are logged in as Super Admin</Text>
      <Text style={styles.info}>
        As a Super Admin, you are responsible for giving final approval to
        plantation requests verified by NGOs/Admins. You also manage Blue
        Carbon Coins and approve or reject buyer purchase requests.
      </Text>

      <View style={styles.buttonContainer}>
        <Button
          title="Requests Approved by NGO"
          onPress={() => navigation.navigate("RequestsApproved")}
        />
      </View>

      <View style={styles.buttonContainer}>
        <Button
          title="Buyer Requests"
          onPress={() => navigation.navigate("BuyerRequests")}
        />
      </View>

      <View style={{ marginTop: 30 }}>
        <Button title="Logout" onPress={() => navigation.navigate("Login")} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center", padding: 20 },
  title: { fontSize: 28, fontWeight: "bold", marginBottom: 10 },
  subtitle: { fontSize: 18, marginBottom: 10 },
  info: { fontSize: 14, textAlign: "center", marginBottom: 20, color: "#555" },
  buttonContainer: { marginVertical: 10, width: "80%" },
});
