import React from "react";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import SignInScreen from "./(auth)/SignIn";
import NetworkChecker from "./(auth)/NetworkChecker";

export default function Index() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar style="auto" />
      <SignInScreen />
      <NetworkChecker />
    </SafeAreaView>
  );
}
