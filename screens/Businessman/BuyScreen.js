// screens/Businessman/BuyScreen.js
import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  TextInput,
  Modal,
  TouchableOpacity,
  ScrollView,
  Dimensions,
} from "react-native";
import AppLayout from "../../components/AppLayout";

const { width } = Dimensions.get("window");

export default function BuyScreen({ navigation }) {
  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    credits: "",
    purpose: "",
  });

  const [modalVisible, setModalVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const creditPrices = [
    { id: 1, cost: "₹500 per credit", note: "Subsidized NGO verified" },
    { id: 2, cost: "₹750 per credit", note: "Gov verified premium" },
    { id: 3, cost: "₹1000 per credit", note: "High demand region" },
  ];

  const handleBuy = () => {
    if (!form.name || !form.email || !form.phone || !form.credits) {
      alert("Please fill all required fields!");
      return;
    }
    setModalVisible(true);
  };

  return (
    <AppLayout>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>Buy Blue Carbon Credits</Text>

        {/* Guidelines */}
        <View style={styles.guidelines}>
          <Text style={styles.guidelinesHeading}>Guidelines:</Text>
          <Text style={styles.guideline}>• Each credit equals 1 ton of CO₂ absorbed.</Text>
          <Text style={styles.guideline}>• Minimum purchase: 10 credits.</Text>
          <Text style={styles.guideline}>• Verification required by Govt. & NGO.</Text>
          <Text style={styles.guideline}>• Purchase contributes to climate action.</Text>
        </View>

        {/* Carousel for prices */}
        <ScrollView
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          onScroll={(e) => {
            const index = Math.round(e.nativeEvent.contentOffset.x / width);
            setActiveIndex(index);
          }}
          style={styles.carousel}
        >
          {creditPrices.map((item) => (
            <View key={item.id} style={styles.carouselItem}>
              <Text style={styles.price}>{item.cost}</Text>
              <Text style={styles.note}>{item.note}</Text>
            </View>
          ))}
        </ScrollView>
        <Text style={styles.indicator}>
          {activeIndex + 1}/{creditPrices.length}
        </Text>

        {/* Form */}
        <TextInput
          style={styles.input}
          placeholder="Full Name"
          value={form.name}
          onChangeText={(v) => setForm({ ...form, name: v })}
        />
        <TextInput
          style={styles.input}
          placeholder="Company / Organization"
          value={form.company}
          onChangeText={(v) => setForm({ ...form, company: v })}
        />
        <TextInput
          style={styles.input}
          placeholder="Email Address"
          keyboardType="email-address"
          value={form.email}
          onChangeText={(v) => setForm({ ...form, email: v })}
        />
        <TextInput
          style={styles.input}
          placeholder="Phone Number"
          keyboardType="phone-pad"
          value={form.phone}
          onChangeText={(v) => setForm({ ...form, phone: v })}
        />
        <TextInput
          style={styles.input}
          placeholder="Number of Credits"
          keyboardType="numeric"
          value={form.credits}
          onChangeText={(v) => setForm({ ...form, credits: v })}
        />
        <TextInput
          style={[styles.input, { height: 80 }]}
          placeholder="Purpose (e.g., CSR, Carbon Neutrality)"
          multiline
          value={form.purpose}
          onChangeText={(v) => setForm({ ...form, purpose: v })}
        />

        <Button title="Confirm Purchase" onPress={handleBuy} />

        {/* Modal */}
        <Modal visible={modalVisible} transparent animationType="slide">
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <Text style={styles.modalText}>
                Your purchase request has been submitted successfully 🎉
              </Text>
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
      </ScrollView>
    </AppLayout>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20, backgroundColor: "#f9f9f9" },
  title: { fontSize: 26, fontWeight: "bold", marginBottom: 15, textAlign: "center" },
  guidelines: {
    backgroundColor: "#eaf6ff",
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
  },
  guidelinesHeading: { fontSize: 16, fontWeight: "bold", marginBottom: 5 },
  guideline: { fontSize: 14, marginBottom: 3, color: "#333" },
  carousel: { marginBottom: 10 },
  carouselItem: {
    width: width - 40,
    marginHorizontal: 20,
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 20,
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
    elevation: 3,
  },
  price: { fontSize: 22, fontWeight: "bold", marginBottom: 5 },
  note: { fontSize: 14, color: "#666" },
  indicator: { textAlign: "center", marginBottom: 15, color: "#888" },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 12,
    marginBottom: 15,
    borderRadius: 8,
    backgroundColor: "#fff",
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  modalContent: {
    backgroundColor: "#fff",
    padding: 25,
    borderRadius: 12,
    alignItems: "center",
    width: "80%",
  },
  modalText: { fontSize: 18, marginBottom: 15, textAlign: "center" },
  modalButton: { backgroundColor: "#007BFF", padding: 12, borderRadius: 8, width: "70%" },
  modalButtonText: { color: "#fff", fontWeight: "bold", textAlign: "center" },
});
