import React from "react";
import { Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import LoginScreen from "./sandbox/LoginScreen";
export default function Index() {
  return (
    <>
      <LoginScreen />
      <StatusBar style="auto" />
    </>
  );
}
