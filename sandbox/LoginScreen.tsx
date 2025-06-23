import { View, Text, KeyboardAvoidingView, Platform } from "react-native";
import React from "react";
import IconInput from "../components/IconInput";

const LoginScreen = () => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      className="flex-1"
    >
      <View className="flex-1 justify-center items-center bg-snow gap-2">
        <Text>LoginScreen</Text>

        <IconInput
          placeholder="Email"
          iconName="mail"
          iconSize={20}
          style={{ width: "80%", height: 50 }}
        />
        <IconInput
          placeholder="Email"
          iconName="security"
          iconSize={20}
          r
          style={{ width: "80%", height: 50 }}
        />
      </View>
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;
