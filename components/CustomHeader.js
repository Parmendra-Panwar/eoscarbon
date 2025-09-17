import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function CustomHeader() {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>🌍 EosCarbon</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    width: "100%",
    paddingVertical: 15,
    backgroundColor: "#1e293b", // dark blue/grey
    // alignItems: "center",
    justifyContent: "center",
    elevation: 4, // Android shadow
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  title: {
    color: "#fff",
    marginLeft: 20,
    fontSize: 20,
    fontWeight: "bold",
  },
});
