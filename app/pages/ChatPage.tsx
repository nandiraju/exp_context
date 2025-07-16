import { Alert, StyleSheet, Text, View } from "react-native";
import React from "react";
import ItemComponent from "@/screens/ItemComponent";
import UploadScreen from "@/app/upload_screen/Upload";
import ChatUI from "@/screens/ChatUI";
import { documentsAtom } from "@/stores/SimpleStorage";
import { useAtom } from "jotai";
import { router } from "expo-router";
import LottieView from "lottie-react-native";
import EmptyState from "@/components/EmptyState";
const ChatPage = () => {
  const [documents] = useAtom(documentsAtom);

  return (
    <View className="flex-1 bg-white pb-8">
      {documents.length === 0 ? (
        <EmptyState
          lottieSource={require("@/assets/lottie/chat.json")}
          width={300}
          height={300}
          message={
            "No chat documents found. \nStart uploading some to start chatting!"
          }
        />
      ) : (
        <ChatUI />
      )}
    </View>
  );
};

export default ChatPage;
