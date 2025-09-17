import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Modal,
  Button,
} from "react-native";

const buyerRequests = [
  { id: 1, buyer: "ABC Corp", coins: 100 },
  { id: 2, buyer: "XYZ Ltd", coins: 200 },
];

export default function BuyerRequestsScreen() {
  const [selectedBuyer, setSelectedBuyer] = useState(null);
  const totalCoins = 1000; // example: gov has 1000 Blue Carbon Coins

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Buyer Requests</Text>
      <Text style={styles.subHeading}>
        Available Blue Carbon Coins: {totalCoins}
      </Text>

      <ScrollView>
        {buyerRequests.map((req) => (
          <TouchableOpacity
            key={req.id}
            style={styles.card}
            onPress={() => setSelectedBuyer(req)}
          >
            <Text style={styles.crop}>Buyer: {req.buyer}</Text>
            <Text style={styles.location}>Requested Coins: {req.coins}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Modal */}
      <Modal visible={!!selectedBuyer} transparent animationType="slide">
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            {selectedBuyer && (
              <>
                <Text style={styles.modalTitle}>
                  {selectedBuyer.buyer} Purchase Request
                </Text>
                <Text>🪙 Requested: {selectedBuyer.coins} coins</Text>

                <View style={styles.modalButtons}>
                  <Button
                    title="Approve ✅"
                    onPress={() => {
                      console.log("Buyer Approved:", selectedBuyer.id);
                      setSelectedBuyer(null);
                    }}
                  />
                  <Button
                    title="Reject ❌"
                    color="red"
                    onPress={() => {
                      console.log("Buyer Rejected:", selectedBuyer.id);
                      setSelectedBuyer(null);
                    }}
                  />
                </View>

                <Button title="Close" onPress={() => setSelectedBuyer(null)} />
              </>
            )}
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "#f9f9f9" },
  heading: { fontSize: 22, fontWeight: "bold", marginBottom: 10, textAlign: "center" },
  subHeading: { fontSize: 16, marginBottom: 20, textAlign: "center", color: "#555" },
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
  location: { fontSize: 14, color: "#555", marginTop: 5 },
  modalOverlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  modalContent: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 12,
    width: "85%",
    elevation: 5,
  },
  modalTitle: { fontSize: 20, fontWeight: "bold", marginBottom: 10 },
  modalButtons: { flexDirection: "row", justifyContent: "space-around", marginVertical: 15 },
});
