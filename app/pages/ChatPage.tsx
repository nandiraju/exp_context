import { Alert, StyleSheet, Text, View } from "react-native";
import React from "react";
import ItemComponent from "@/screens/ItemComponent";
import UploadScreen from "@/app/upload_screen/Upload";
import ChatUI from "@/screens/ChatUI";
import { documentsAtom } from "@/stores/SimpleStorage";
import { useAtom } from "jotai";
import { router } from "expo-router";
import LottieView from "lottie-react-native";
const ChatPage = () => {
  const [documents] = useAtom(documentsAtom);

  return (
    <View className="flex-1 bg-white pb-8">
      {documents.length === 0 ? (
        <View className="flex-1 items-center justify-center">
          <LottieView
            autoPlay
            style={{
              width: 200,
              height: 200,
              // backgroundColor: "#eee",
            }}
            // Find more Lottie files at https://lottiefiles.com/featured
            source={require("@/assets/lottie/chat.json")}
          />
          <Text className="text-gray-500 mt-4 text-lg  text-center font-poppins">
            Please upload your documents {"\n"}to start chatting!
          </Text>
        </View>
      ) : (
        <ChatUI />
      )}
    </View>
  );
};

export default ChatPage;
