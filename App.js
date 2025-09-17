// App.js
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import LoginScreen from "./screens/LoginScreen";
import SignupScreen from "./screens/SignupScreen";
import AdminScreen from "./screens/AdminScreen";
import SuperAdminScreen from "./screens/SuperAdminScreen";
import FarmerScreen from "./screens/FarmerScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Sign Up" component={SignupScreen} />
        <Stack.Screen name="Admin" component={AdminScreen} />
        <Stack.Screen name="SuperAdmin" component={SuperAdminScreen} />
        <Stack.Screen name="Farmer" component={FarmerScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
