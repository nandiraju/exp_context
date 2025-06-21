import { StyleSheet, Text, View } from "react-native";
import React from "react";
import ItemComponent from "../screens/ItemComponent";

const Welcome = () => {
  return (
    <View className="flex-1 justify-center items-center bg-blue-50">
      <Text>Welcome</Text>
      <ItemComponent />
    </View>
  );
};

export default Welcome;
