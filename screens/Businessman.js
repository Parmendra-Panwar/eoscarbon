import React from "react";
import { View, Text, StyleSheet, Button, ScrollView } from "react-native";
import AppLayout from "../components/AppLayout";

export default function BusinessScreen({ navigation }) {
  return (
    <AppLayout>
      <ScrollView contentContainerStyle={styles.container}>
        {/* Logout */}
        <View style={styles.logoutContainer}>
          <Button title="Logout" onPress={() => navigation.navigate("Login")} />
        </View>

        {/* Title */}
        <Text style={styles.title}>🌍 EosCarbon Business Portal</Text>

        {/* Welcome message */}
        <Text style={styles.welcome}>
          Welcome! Here you can purchase Blue Carbon Credits to offset your company's carbon footprint.
          Track your purchase status and see which requests have been approved.
        </Text>

        {/* Buy Button */}
        <View style={styles.buttonWrapper}>
          <Button title="Buy Credits 💳" onPress={() => navigation.navigate("Buy")} />
        </View>

        {/* Status Button */}
        <View style={styles.buttonWrapper}>
          <Button title="Check Purchase Status 📊" onPress={() => navigation.navigate("BuyStatus")} />
        </View>

        {/* Guidelines Section */}
        <View style={styles.guidelinesCard}>
          <Text style={styles.guidelinesTitle}>Guidelines for Businesses:</Text>
          <Text style={styles.guideline}>1. Enter accurate company details when buying credits.</Text>
          <Text style={styles.guideline}>2. Each credit represents a verified unit of carbon offset.</Text>
          <Text style={styles.guideline}>3. Keep track of your purchases in the status section.</Text>
          <Text style={styles.guideline}>4. Only approved requests can be used for compliance.</Text>
        </View>
      </ScrollView>
    </AppLayout>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: "center",
    paddingBottom: 40,
  },
  logoutContainer: {
    alignSelf: "flex-end",
    marginBottom: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 15,
  },
  welcome: {
    fontSize: 16,
    textAlign: "center",
    marginBottom: 25,
    color: "#555",
  },
  buttonWrapper: {
    width: "80%",
    marginVertical: 10,
  },
  guidelinesCard: {
    marginTop: 30,
    width: "90%",
    backgroundColor: "#f0f8ff",
    padding: 15,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  guidelinesTitle: {
    fontWeight: "bold",
    fontSize: 18,
    marginBottom: 10,
  },
  guideline: {
    fontSize: 14,
    marginBottom: 5,
  },
});
