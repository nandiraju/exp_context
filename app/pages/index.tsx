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
import { Button } from "@react-navigation/elements";
import { router } from "expo-router";

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
      <HeadingDivider
        iconName="albums-outline"
        title="Trending in cancer"
        onRightButton={() => {
          console.log("Right button pressed");
          router.push("/modal?type=forgot");
        }}
      />
      {/* <NewsCard count={5} /> */}
      <Button
        onPress={() => {
          console.log("Button Pressed");
          router.push("/modal?type=forgot");
        }}
      >
        Click Me
      </Button>
      <View className="h-[100px] w-full"></View>
    </ScrollView>
  );
}
