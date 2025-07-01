import { Alert, StyleSheet, Text, View } from "react-native";
import React from "react";
import ItemComponent from "@/screens/ItemComponent";
import UploadScreen from "@/app/upload_screen/Upload";
import ChatUI from "@/screens/ChatUI";
import { documentsAtom } from "@/stores/SimpleStorage";
import { useAtom } from "jotai";
import { router } from "expo-router";

const ChatPage = () => {
  const [documents] = useAtom(documentsAtom);

  return (
    <View className="flex-1 bg-white pb-8">
      {documents.length === 0 ? (
        <Text className="text-2xl font-semibold text-center mt-10 p-5">
          Please upload your documents to start chatting with OSakhi.
        </Text>
      ) : (
        <ChatUI />
      )}
    </View>
  );
};

export default ChatPage;
