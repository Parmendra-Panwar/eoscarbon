import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import AppLayout from "../../components/AppLayout";

const dummyData = [
  {
    id: 1,
    crop: "Mangroves",
    location: "Coastal Area A",
    ngoStatus: "Verified",
    govStatus: "Verified",
  },
  {
    id: 2,
    crop: "Seagrass",
    location: "River Delta B",
    ngoStatus: "Verified",
    govStatus: "Pending",
  },
  {
    id: 3,
    crop: "Salt Marsh",
    location: "Village C",
    ngoStatus: "Rejected",
    govStatus: "N/A",
  },
];

function getOverallStatus(ngo, gov) {
  if (ngo.includes("Rejected")) return "Rejected";
  if (ngo.includes("Pending") || gov.includes("Pending")) return "Pending";
  if (ngo.includes("Verified") && gov.includes("Verified")) return "Approved";
  return "In Progress";
}

export default function VerificationStatus() {
  return (
    <AppLayout>
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.heading}>Verification Status</Text>
      {dummyData.map((item) => (
        <View key={item.id} style={styles.card}>
          <Text style={styles.crop}>{item.crop}</Text>
          <Text style={styles.location}>📍 {item.location}</Text>

          <View style={styles.statusRow}>
            <Text style={styles.statusLabel}>NGO Admin:</Text>
            <Text style={styles.statusValue}>{item.ngoStatus}</Text>
          </View>

          <View style={styles.statusRow}>
            <Text style={styles.statusLabel}>Gov Superadmin:</Text>
            <Text style={styles.statusValue}>{item.govStatus}</Text>
          </View>

          <View style={styles.overallBox}>
            <Text style={styles.overallText}>
              Overall: {getOverallStatus(item.ngoStatus, item.govStatus)}
            </Text>
          </View>
        </View>
      ))}
    </ScrollView>
    </AppLayout>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "#f9f9f9",
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  card: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
    elevation: 3,
  },
  crop: { fontSize: 18, fontWeight: "bold" },
  location: { fontSize: 14, color: "#555", marginTop: 5, marginBottom: 10 },
  statusRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 5,
  },
  statusLabel: { fontWeight: "600", color: "#333" },
  statusValue: { fontWeight: "500" },
  overallBox: {
    marginTop: 10,
    padding: 8,
    borderRadius: 6,
    backgroundColor: "#f0f4ff",
  },
  overallText: {
    textAlign: "center",
    fontWeight: "bold",
    color: "#333",
  },
});
