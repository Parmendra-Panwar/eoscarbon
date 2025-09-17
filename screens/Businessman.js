import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import AppLayout from "../components/AppLayout";

export default function BusinessScreen({ navigation }) {
  return (
    <AppLayout>
      
    <View style={styles.container}>
      <View style={{ marginTop: 20, alignSelf: "flex-end" }}>
              <Button title="Logout" onPress={() => navigation.navigate("Login")} />
            </View>
      <Text style={styles.title}>Business Man Store 🏪</Text>
      <Button title="Buy Now" onPress={() => navigation.navigate("Buy")} />
    </View>
    </AppLayout>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center", padding: 20 },
  title: { fontSize: 24, fontWeight: "bold", marginBottom: 20 },
});
