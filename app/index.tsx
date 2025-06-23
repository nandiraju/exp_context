import React from "react";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import SignInScreen from "./(auth)/SignIn";
import NetworkChecker from "./(auth)/NetworkChecker";
import Sandbox from "@/screens/Sandbox";

export default function Index() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar style="auto" />
      {/* <SignInScreen /> */}
      <Sandbox />
      <NetworkChecker />
    </SafeAreaView>
  );
}
