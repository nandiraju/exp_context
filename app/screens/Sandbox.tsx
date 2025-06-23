import {
  StyleSheet,
  View,
  ScrollView,
  TouchableOpacity,
  Text,
} from "react-native";
import React, { use, useEffect } from "react";
import { NewsCard } from "./NewsCard";
import OSakhiCard from "../components/OsakhiCard";
import MenuScreen from "./MenuScreen";
import { Ionicons } from "@expo/vector-icons";

export default function Sandbox() {
  const handleCardPress = (data: any) => {
    console.log("Pressed card:", data.title);
  };

  return (
    <ScrollView className="bg-snow-50">
      <HeadingDivider iconName="albums-outline" title="Interact with OSakhi" />
      <OSakhiCard />
      <HeadingDivider
        iconName="medical-outline"
        title="Start your health journey"
      />
      <MenuScreen />
      <HeadingDivider iconName="albums-outline" title="Trending in cancer" />
      <NewsCard />
    </ScrollView>
  );
}

export const HeadingDivider = ({ iconName, title, hideRightIcon }: any) => {
  return (
    <>
      <View className="flex-row items-center my-4 justify-between px-4">
        <View className="flex-row items-start gap-3 ">
          <Ionicons name={iconName} size={24} color="dodgerblue" />
          <Text className="text-lg font-bold">{title}</Text>
        </View>
        {!hideRightIcon && (
          <Ionicons name="arrow-forward-outline" size={24} color="dodgerblue" />
        )}
      </View>
    </>
  );
};
