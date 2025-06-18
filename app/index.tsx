import React from "react";
import { StatusBar } from "expo-status-bar";
import SignInScreen from "./(auth)/SignIn";
import NetworkChecker from "./(auth)/NetworkChecker";

export default function Index() {
  return (
    <>
      <StatusBar style="auto" />
      <SignInScreen />
      <NetworkChecker />
    </>
  );
}
