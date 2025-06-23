import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

export default function Sandbox() {
  const handleCardPress = (data: any) => {
    console.log("Pressed card:", data.title);
  };

  return (
    <ScrollView className="bg-snow-50">
      {/* <NewsCard /> */}
      <OSakhi />
    </ScrollView>
  );
}

const OSakhi = () => {
  return (
    <View className="bg-white shadow-sm m-5 p-4 border border-gray-50 rounded-xl h-[200px] width-full">
      <View className="top-0 right-0 absolute m-4">
        <Text className="font-semibold text-lg">OSakhi</Text>
      </View>
      <View className="flex-row justify-between items-center mt-[40px]">
        <Text className="text-gray-500 text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          voluptatibus, cumque, voluptatum, quia, quas quisquam voluptatibus
          cumque voluptatum quia.
        </Text>
      </View>
      <View className="flex-row justify-between items-center mt-4">
        <Ionicons name="settings-outline" size={40} color="dodgerblue" />
        <Ionicons name="chatbubble-outline" size={40} color="dodgerblue" />
        <Ionicons name="albums-outline" size={40} color="dodgerblue" />
      </View>
    </View>
  );
};

const NewsCard = () => {
  return (
    <View className="bg-white shadow-sm m-5 p-4 border border-gray-50 rounded-xl">
      <Text className="text-semibold text-2xl">News Card</Text>
      <Image
        source={{ uri: "https://placehold.co/600x400/png" }}
        // style={{ marginTop: 8, borderRadius: 4, width: "100%", height: 160 }}
        className="mt-2 border-2 border-blue-300 rounded-xl w-full h-60"
        resizeMode="cover"
      />
      <Text className="mt-2 text-gray-500 text-sm">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde dolores
        corrupti ullam iste, soluta voluptatum omnis incidunt! Velit,
        perferendis minima nam culpa iusto obcaecati aliquid laborum numquam
        molestias, ipsam nostrum!
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({});
