import React from "react";
import { StatusBar } from "expo-status-bar";
import SignInScreen from "./(auth)/SignIn";

export default function Index() {
  return (
    <>
      <SignInScreen />
      <StatusBar style="auto" />
    </>
  );
}
