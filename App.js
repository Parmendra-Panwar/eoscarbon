// App.js
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import LoginScreen from "./screens/LoginScreen";
import SignupScreen from "./screens/SignupScreen";
import AdminScreen from "./screens/AdminScreen";
import SuperAdminScreen from "./screens/SuperAdminScreen";
import FarmerScreen from "./screens/FarmerScreen";
import RegisterPlantation from "./screens/Farmer/RegisterPlantation";
import VerificationStatus from "./screens/Farmer/VerificationStatus";
import RequestsScreen from "./screens/admin/RequestsScreen";
import RequestsApprovedScreen from "./screens/SuperAdmin/RequestsApprovedScreen";
import BuyerRequestsScreen from "./screens/SuperAdmin/BuyerRequestsScreen";
import BusinessScreen from "./screens/Businessman";
import BuyScreen from "./screens/Businessman/BuyScreen";
import StatusScreen from "./screens/Businessman/StatusScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Sign Up" component={SignupScreen} />
        <Stack.Screen name="Admin" component={AdminScreen} />
          <Stack.Screen name="Requests" component={RequestsScreen} />
        <Stack.Screen name="SuperAdmin" component={SuperAdminScreen} />
          <Stack.Screen name="RequestsApproved" component={RequestsApprovedScreen} />
          <Stack.Screen name="BuyerRequests" component={BuyerRequestsScreen} />
        <Stack.Screen name="Farmer" component={FarmerScreen} />
          <Stack.Screen name="RegisterPlantation" component={RegisterPlantation} />
          <Stack.Screen name="VerificationStatus" component={VerificationStatus} />
        <Stack.Screen name="Businessman" component={BusinessScreen} />
          <Stack.Screen name="Buy" component={BuyScreen} />
          <Stack.Screen name="BuyStatus" component={StatusScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
