import {
  StyleSheet,
  View,
  ScrollView,
  TouchableOpacity,
  Text,
  FlatList,
  Alert,
} from "react-native";
import React, { use, useEffect } from "react";
import NewsCard from "@/components/NewsCard";
import OSakhiCard from "@/components/OsakhiCard";
import MenuScreen from "@/screens/MenuScreen";
import { Ionicons } from "@expo/vector-icons";
import { HeadingDivider } from "@/components/HeadingDivider";
import { Button } from "@react-navigation/elements";
import { router } from "expo-router";
import VSpace from "@/components/VSpace";
import { documentsAtom } from "@/stores/SimpleStorage";
import { useAtom } from "jotai";

export default function Welcome() {
  const [documents] = useAtom(documentsAtom);

  const handleCardPress = (data: any) => {
    console.log("Pressed card:", data.title);
  };

  const handleOnPress = (data: any) => {
    console.log(data);
    // if (documents.length === 0) {
    //   Alert.alert("First upload your documents to interact with OSakhi");
    //   return;
    // }
    router.push(data.screen);
  };

  return (
    // <ScrollView className="flex-1 bg-snow-50">
    //   <View className="h-[20px] w-full"></View>
    //   <HeadingDivider iconName="albums-outline" title="Interact with OSakhi" />
    //   <OSakhiCard handleOnPress={handleOnPress} />
    //   <HeadingDivider
    //     iconName="medical-outline"
    //     title="Start your health journey"
    //   />
    //   <MenuScreen />
    //   <VSpace gap={20} />
    //   <HeadingDivider
    //     iconName="albums-outline"
    //     title="Trending in cancer"
    //     onRightButton={() => {
    //       console.log("Right button pressed");
    //       // router.push("/modal?type=forgot");
    //       router.push("/news_screen");
    //     }}
    //   />
    //   <NewsCard count={5} />
    //   <VSpace gap={20} />
    // </ScrollView>
    <FlatList
      data={[]} // No main data — we're just rendering headers + NewsCard
      renderItem={null}
      ListHeaderComponent={
        <View className="flex-1 bg-snow-50">
          <View className="h-[20px] w-full" />
          <HeadingDivider
            iconName="albums-outline"
            title="Interact with OSakhi"
          />
          <OSakhiCard handleOnPress={handleOnPress} />
          <HeadingDivider
            iconName="document-outline"
            title="Start your interaction"
          />
          <MenuScreen />
          <VSpace gap={20} />
          <HeadingDivider
            iconName="albums-outline"
            title="Trending"
            onRightButton={() => {
              router.push("/news_screen");
            }}
          />
          <NewsCard count={5} />
          <VSpace gap={20} />
        </View>
      }
    />
  );
}
