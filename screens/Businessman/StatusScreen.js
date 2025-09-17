// screens/Businessman/StatusScreen.js
import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import AppLayout from "../../components/AppLayout";

// Dummy request data
const requests = [
  { id: "1", credits: 100, date: "2025-09-10", status: "approved" },
  { id: "2", credits: 50, date: "2025-09-12", status: "rejected" },
  { id: "3", credits: 200, date: "2025-09-14", status: "approved" },
  { id: "4", credits: 75, date: "2025-09-15", status: "rejected" },
  { id: "5", credits: 150, date: "2025-09-16", status: "approved" },
];

export default function StatusScreen({ route }) {
  const { success } = route.params || { success: false };

  const renderCard = ({ item }) => (
    <View
      style={[
        styles.card,
        item.status === "approved" ? styles.approvedCard : styles.rejectedCard,
      ]}
    >
      <Text style={styles.cardTitle}>
        {item.credits} Blue Carbon Credits
      </Text>
      <Text style={styles.cardDate}>Date: {item.date}</Text>
      <Text
        style={[
          styles.cardStatus,
          item.status === "approved"
            ? styles.approvedText
            : styles.rejectedText,
        ]}
      >
        {item.status.toUpperCase()}
      </Text>
    </View>
  );

  return (
    <AppLayout>
      <View style={styles.container}>
        <Text style={styles.title}>Request Status</Text>

        {/* Latest result (from Buy flow) */}
        {success && (
          <Text style={styles.recentSuccess}>
            ✅ Your last request was submitted successfully!
          </Text>
        )}

        {/* Past Requests */}
        <FlatList
          data={requests}
          keyExtractor={(item) => item.id}
          renderItem={renderCard}
          contentContainerStyle={{ paddingBottom: 20 }}
        />
      </View>
    </AppLayout>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 24, fontWeight: "bold", marginBottom: 20, textAlign: "center" },
  recentSuccess: { fontSize: 16, color: "green", marginBottom: 15, textAlign: "center" },

  card: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 15,
    marginBottom: 12,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  cardTitle: { fontSize: 18, fontWeight: "600" },
  cardDate: { fontSize: 14, color: "#666", marginVertical: 5 },
  cardStatus: { fontSize: 16, fontWeight: "bold", marginTop: 8 },

  approvedCard: { borderLeftWidth: 6, borderLeftColor: "green" },
  rejectedCard: { borderLeftWidth: 6, borderLeftColor: "red" },

  approvedText: { color: "green" },
  rejectedText: { color: "red" },
});
