import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import AppLayout from "../components/AppLayout";

export default function FarmerScreen({ route, navigation }) {
  const { username } = route.params;
  const [language, setLanguage] = useState("en"); // en = English, hi = Hindi

  const content = {
    en: {
      welcome: `Welcome, ${username}!`,
      role: "You are logged in as NGO",
      introTitle: "NGO Guidelines",
      introText:
        "As part of the Blue Carbon initiative, farmers can contribute to reducing carbon emissions by registering their plantations. Once registered, your crops will be verified by local NGOs and government officials. Verified plantations will be eligible for government incentives and payments.",
      step1: "1. Register your plantation (location, area, crop type, NGO).",
      step2: "2. Wait for verification by NGO and government.",
      step3: "3. Once approved, receive government benefits and support.",
      registerBtn: "Register Plantation",
      verifyBtn: "Check Verification Status",
      logout: "Logout",
      switchLang: "हिंदी देखें",
    },
    hi: {
      welcome: `स्वागत है, ${username}!`,
      role: "आप NGO के रूप में लॉगिन हैं",
      introTitle: "NGO हेतु दिशानिर्देश",
      introText:
        "ब्लू कार्बन योजना के तहत किसान कार्बन उत्सर्जन को कम करने में योगदान कर सकते हैं। इसके लिए आप अपनी पौधारोपण जानकारी दर्ज करें। दर्ज करने के बाद स्थानीय एनजीओ और सरकारी अधिकारी इसकी जाँच करेंगे। सत्यापित पौधारोपण पर आपको सरकारी प्रोत्साहन और भुगतान मिलेगा।",
      step1: "१. अपने पौधारोपण को दर्ज करें (स्थान, क्षेत्र, फसल प्रकार, एनजीओ)।",
      step2: "२. एनजीओ और सरकार द्वारा सत्यापन की प्रतीक्षा करें।",
      step3: "३. स्वीकृति मिलने पर सरकारी लाभ और सहायता प्राप्त करें।",
      registerBtn: "पौधारोपण दर्ज करें",
      verifyBtn: "सत्यापन स्थिति देखें",
      logout: "लॉग आउट",
      switchLang: "View in English",
    },
  };

  const t = content[language];

  return (
    <AppLayout>
    <ScrollView contentContainerStyle={styles.container}>
      {/* Language Switch */}
      <TouchableOpacity
        style={styles.langSwitch}
        onPress={() => setLanguage(language === "en" ? "hi" : "en")}
      >
        <Text style={styles.langSwitchText}>{t.switchLang}</Text>
      </TouchableOpacity>

      <Text style={styles.title}>{t.welcome}</Text>
      <Text style={styles.subtitle}>{t.role}</Text>

      {/* Guidelines Section */}
      <View style={styles.infoBox}>
        <Text style={styles.infoTitle}>{t.introTitle}</Text>
        <Text style={styles.infoText}>{t.introText}</Text>
        <Text style={styles.step}>{t.step1}</Text>
        <Text style={styles.step}>{t.step2}</Text>
        <Text style={styles.step}>{t.step3}</Text>
      </View>

      {/* Action Buttons */}
      <View style={styles.buttonContainer}>
        <Button
          title={t.registerBtn}
          onPress={() => navigation.navigate("RegisterPlantation", { username })}
        />
      </View>

      <View style={styles.buttonContainer}>
        <Button
          title={t.verifyBtn}
          onPress={() => navigation.navigate("VerificationStatus", { username })}
        />
      </View>

      <View style={styles.logout}>
        <Button title={t.logout} onPress={() => navigation.navigate("Login")} />
      </View>
    </ScrollView>
    </AppLayout>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    padding: 20,
    backgroundColor: "#f4f9f4",
  },
  title: { fontSize: 26, fontWeight: "bold", marginBottom: 5, color: "#2e7d32" },
  subtitle: { fontSize: 18, marginBottom: 20, color: "#555" },
  infoBox: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
    width: "100%",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
    elevation: 3,
  },
  infoTitle: { fontSize: 20, fontWeight: "bold", marginBottom: 10, color: "#1565c0" },
  infoText: { fontSize: 16, marginBottom: 10, lineHeight: 22, color: "#444" },
  step: { fontSize: 15, marginBottom: 5, color: "#333" },
  buttonContainer: { marginVertical: 10, width: "90%" },
  logout: { marginTop: 20, width: "60%" },
  langSwitch: { marginTop: 20, alignSelf: "flex-end", marginBottom: 10 },
  langSwitchText: { color: "#1976d2", fontSize: 16, fontWeight: "600" },
});
