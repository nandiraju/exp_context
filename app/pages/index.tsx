import {
  StyleSheet,
  View,
  ScrollView,
  TouchableOpacity,
  Text,
} from "react-native";
import React, { use, useEffect } from "react";
import NewsCard from "@/components/NewsCard";
import OSakhiCard from "@/components/OsakhiCard";
import MenuScreen from "@/screens/MenuScreen";
import { Ionicons } from "@expo/vector-icons";
import { HeadingDivider } from "@/components/HeadingDivider";

export default function Welcome() {
  const handleCardPress = (data: any) => {
    console.log("Pressed card:", data.title);
  };

  return (
    <ScrollView className="flex-1 bg-snow-50">
      <View className="h-[20px] w-full"></View>
      <HeadingDivider iconName="albums-outline" title="Interact with OSakhi" />
      <OSakhiCard />
      <HeadingDivider
        iconName="medical-outline"
        title="Start your health journey"
      />
      <MenuScreen />
      <HeadingDivider iconName="albums-outline" title="Trending in cancer" />
      {/* <NewsCard /> */}
    </ScrollView>
  );
}
