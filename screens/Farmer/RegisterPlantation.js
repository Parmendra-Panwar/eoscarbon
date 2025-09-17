import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  Modal,
  TouchableOpacity,
} from "react-native";
import { Picker } from "@react-native-picker/picker";

export default function RegisterPlantation({ navigation }) {
  const [location, setLocation] = useState("");
  const [area, setArea] = useState("");
  const [crop, setCrop] = useState("Mangroves");
  const [ngo, setNgo] = useState("");
  const [modalVisible, setModalVisible] = useState(false);

  const handleSubmit = () => {
    setModalVisible(true);
    setTimeout(() => {
      setModalVisible(false);
      navigation.navigate("Farmer");
    }, 2000);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Register Plantation</Text>

      <TextInput
        style={styles.input}
        placeholder="Location"
        value={location}
        onChangeText={setLocation}
      />
      <TextInput
        style={styles.input}
        placeholder="Area (in acres)"
        value={area}
        onChangeText={setArea}
        keyboardType="numeric"
      />

      <Text style={styles.label}>Select Crop Type:</Text>
      <Picker
        selectedValue={crop}
        onValueChange={(itemValue) => setCrop(itemValue)}
        style={styles.picker}
      >
        <Picker.Item label="Mangroves" value="Mangroves" />
        <Picker.Item label="Seagrass" value="Seagrass" />
        <Picker.Item label="Salt Marsh" value="Salt Marsh" />
      </Picker>

      <TextInput
        style={styles.input}
        placeholder="Nearest NGO"
        value={ngo}
        onChangeText={setNgo}
      />

      <Button title="Submit" onPress={handleSubmit} />

      <Modal
        transparent
        visible={modalVisible}
        animationType="fade"
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalBackground}>
          <View style={styles.modalBox}>
            <Text style={styles.modalText}>Plantation Registered Successfully!</Text>
            <TouchableOpacity
              style={styles.modalButton}
              onPress={() => {
                setModalVisible(false);
                navigation.navigate("Farmer");
              }}
            >
              <Text style={styles.modalButtonText}>OK</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "#fff" },
  heading: { fontSize: 24, fontWeight: "bold", marginBottom: 20, textAlign: "center" },
  input: {
    borderWidth: 1, borderColor: "#ccc", borderRadius: 8,
    padding: 10, marginBottom: 15,
  },
  label: { fontSize: 16, marginBottom: 5 },
  picker: { marginBottom: 15 },
  modalBackground: {
    flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "rgba(0,0,0,0.5)",
  },
  modalBox: {
    backgroundColor: "#fff", padding: 20, borderRadius: 10, alignItems: "center", width: "80%",
  },
  modalText: { fontSize: 18, marginBottom: 20, textAlign: "center" },
  modalButton: {
    backgroundColor: "#4CAF50", paddingVertical: 10, paddingHorizontal: 20, borderRadius: 8,
  },
  modalButtonText: { color: "#fff", fontWeight: "bold" },
});
