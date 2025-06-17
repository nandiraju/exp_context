import { View, Text } from "react-native";
import React from "react";
import IconInput from "../components/IconInput";

const LoginScreen = () => {
  return (
    <View className="flex-1 justify-center items-center bg-blue-50 gap-2">
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
  );
};

export default LoginScreen;
