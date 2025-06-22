import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import React from "react";

export default function Sandbox() {
  return (
    <ScrollView className="bg-snow-50">
      {Array.from({ length: 4 }).map((_, idx) => (
        <NewsCard key={idx} />
      ))}
    </ScrollView>
  );
}

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
