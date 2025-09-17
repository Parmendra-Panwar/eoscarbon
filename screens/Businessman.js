import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

export default function BusinessScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Business Man Store 🏪</Text>
      <Button title="Buy Now" onPress={() => navigation.navigate("Buy")} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center", padding: 20 },
  title: { fontSize: 24, fontWeight: "bold", marginBottom: 20 },
});
