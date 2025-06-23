import { StyleSheet, Text, View } from "react-native";
import React from "react";
import MenuScreen from "@/screens/MenuScreen";
import OSakhiCard from "@/components/OsakhiCard";

const Welcome = () => {
  return (
    <View className="flex-1">
      <OSakhiCard />
      <MenuScreen />
    </View>
  );
};

export default Welcome;
