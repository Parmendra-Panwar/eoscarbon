import React from "react";
import { View, StyleSheet, StatusBar, Platform } from "react-native";
import CustomHeader from "./CustomHeader";

export default function AppLayout({ children }) {
  return (
    <View
      style={[
        styles.container,
        { paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0 },
      ]}
    >
      <CustomHeader />
      <View style={styles.content}>{children}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },
  content: { flex: 1 },
});
