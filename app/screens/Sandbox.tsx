import { StyleSheet, View, ScrollView, TouchableOpacity } from "react-native";
import React, { use, useEffect } from "react";
import { NewsCard } from "./NewsCard";
import OSakhiCard from "../components/OsakhiCard";
import MenuScreen from "./MenuScreen";

export default function Sandbox() {
  const handleCardPress = (data: any) => {
    console.log("Pressed card:", data.title);
  };

  return (
    <ScrollView className="bg-snow-50">
      <OSakhiCard />
      <MenuScreen />
      <NewsCard />
    </ScrollView>
  );
}

const styles = StyleSheet.create({});
