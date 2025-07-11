import { WebView } from "react-native-webview";
import Constants from "expo-constants";
import { StyleSheet, View, Text } from "react-native";
import UIButton from "@/components/UIButton";
import { SafeAreaView } from "react-native-safe-area-context";
import React from "react";
import { router } from "expo-router";
import { documentsAtom, userAtom } from "@/stores/SimpleStorage";
import { useAtom } from "jotai";
import { Ionicons } from "@expo/vector-icons";
import IconButton from "@/components/IconButton";
import { LinearGradient } from "expo-linear-gradient";

export default function AgentScreen() {
  const user = useAtom(userAtom);
  const [documents] = useAtom(documentsAtom);
  //const documents = [1, 2, 3]; // Temporary mock data for testing

  return (
    <LinearGradient
      colors={["#333333", "#000000"]} // blue-500 to blue-900
      start={{ x: 0.5, y: 0 }}
      end={{ x: 0.5, y: 1 }}
      style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
    >
      <SafeAreaView style={{ flex: 1, width: "100%" }}>
        <View className="flex-row items-start">
          <IconButton
            iconName="arrow-back-outline"
            size={35}
            onPress={() => router.back()}
          />
        </View>
        {documents.length === 0 ? (
          <View className="flex-1 items-center justify-center">
            <Ionicons name="warning-outline" size={50} color="red" />
            <Text className="text-white text-xl font-semibold p-5 text-center px-5">
              Upload Documents to Interact with OSakhi
            </Text>
          </View>
        ) : (
          <>
            <WebView
              style={styles.container}
              bounces={false}
              //source={{ uri: "https://ai.nandiraju.com/" }}
              source={{
                uri: `https://osakhi-production-avatar.vercel.app/avatar?token=${user?.email}`,
              }}
              allowsInlineMediaPlayback
              mediaPlaybackRequiresUserAction={false}
            />
          </>
        )}
      </SafeAreaView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // marginTop: Constants.statusBarHeight,
  },
});
