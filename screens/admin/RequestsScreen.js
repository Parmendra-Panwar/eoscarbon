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

const dummyRequests = [
  { id: 1, crop: "Mangroves", location: "Coastal Area A", submittedBy: "NGO A" },
  { id: 2, crop: "Seagrass", location: "River Delta B", submittedBy: "NGO B" },
];

export default function RequestsScreen() {
  const [selectedRequest, setSelectedRequest] = useState(null);

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Pending Requests</Text>

      <ScrollView>
        {dummyRequests.map((req) => (
          <TouchableOpacity
            key={req.id}
            style={styles.card}
            onPress={() => setSelectedRequest(req)}
          >
            <Text style={styles.crop}>{req.crop}</Text>
            <Text style={styles.location}>📍 {req.location}</Text>
            <Text style={styles.submitted}>Submitted by: {req.submittedBy}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Modal */}
      <Modal visible={!!selectedRequest} transparent animationType="slide">
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            {selectedRequest && (
              <>
                <Text style={styles.modalTitle}>
                  {selectedRequest.crop} Request
                </Text>
                <Text>📍 Location: {selectedRequest.location}</Text>
                <Text>👤 Submitted by: {selectedRequest.submittedBy}</Text>

                <View style={styles.modalButtons}>
                  <Button
                    title="Approve ✅"
                    onPress={() => {
                      console.log("Approved:", selectedRequest.id);
                      setSelectedRequest(null);
                    }}
                  />
                  <Button
                    title="Reject ❌"
                    color="red"
                    onPress={() => {
                      console.log("Rejected:", selectedRequest.id);
                      setSelectedRequest(null);
                    }}
                  />
                </View>

                <Button
                  title="Close"
                  onPress={() => setSelectedRequest(null)}
                />
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
  heading: { fontSize: 22, fontWeight: "bold", marginBottom: 15, textAlign: "center" },
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
  submitted: { fontSize: 12, color: "#888", marginTop: 5 },
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
