import { StyleSheet, Text, View } from "react-native";
import React from "react";
import ItemComponent from "@/screens/ItemComponent";
import UploadScreen from "@/screens/Upload";
import ChatUI from "@/screens/ChatUI";

const ChatPage = () => {
  return (
    <View className="flex-1 bg-white pb-8">
      <ChatUI />
    </View>
  );
};

export default ChatPage;
