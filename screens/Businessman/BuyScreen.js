import React, { useState } from "react";
import { View, Text, StyleSheet, Button, TextInput, Modal, TouchableOpacity } from "react-native";
import AppLayout from "../../components/AppLayout";

export default function BuyScreen({ navigation }) {
  const [name, setName] = useState("");
  const [modalVisible, setModalVisible] = useState(false);

  const handleBuy = () => {
    if (name.trim()) {
      setModalVisible(true);
    } else {
      alert("Please enter your name!");
    }
  };

  return (
    <AppLayout>
    <View style={styles.container}>
      <Text style={styles.title}>Price: $49.99 💳</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your name"
        value={name}
        onChangeText={setName}
      />
      <Button title="Confirm Purchase" onPress={handleBuy} />

      {/* Modal */}
      <Modal visible={modalVisible} transparent animationType="slide">
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalText}>Purchase request submitted ✅</Text>
            <TouchableOpacity
              style={styles.modalButton}
              onPress={() => {
                setModalVisible(false);
                navigation.navigate("BuyStatus", { success: true });
              }}
            >
              <Text style={styles.modalButtonText}>Go to Status</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
    </AppLayout>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center", padding: 20 },
  title: { fontSize: 24, fontWeight: "bold", marginBottom: 20 },
  input: {
    borderWidth: 1,
    borderColor: "#555",
    padding: 10,
    borderRadius: 8,
    width: "80%",
    marginBottom: 20,
  },
  modalContainer: { flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "rgba(0,0,0,0.5)" },
  modalContent: { backgroundColor: "#fff", padding: 20, borderRadius: 10, alignItems: "center" },
  modalText: { fontSize: 18, marginBottom: 15 },
  modalButton: { backgroundColor: "#007BFF", padding: 10, borderRadius: 8 },
  modalButtonText: { color: "#fff", fontWeight: "bold" },
});
