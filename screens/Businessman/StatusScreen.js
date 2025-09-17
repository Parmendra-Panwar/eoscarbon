import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function StatusScreen({ route }) {
  const { success } = route.params || { success: false };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Request Status 📦</Text>
      {success ? (
        <Text style={styles.success}>Your request was successful 🎉</Text>
      ) : (
        <Text style={styles.error}>Something went wrong ❌</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center", padding: 20 },
  title: { fontSize: 24, fontWeight: "bold", marginBottom: 20 },
  success: { fontSize: 18, color: "green", marginTop: 20 },
  error: { fontSize: 18, color: "red", marginTop: 20 },
});
