import { WebView } from "react-native-webview";
import Constants from "expo-constants";
import { StyleSheet, View } from "react-native";
import UIButton from "@/components/UIButton";
import { SafeAreaView } from "react-native-safe-area-context";
import React from "react";
import { router } from "expo-router";

export default function AgentScreen() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "black" }}>
      <WebView
        style={styles.container}
        //source={{ uri: "https://ai.nandiraju.com/" }}
        source={{ uri: "https://osakhi-agent.vercel.app/" }}
        allowsInlineMediaPlayback
        mediaPlaybackRequiresUserAction={false}
      />
      <UIButton
        className="bg-blue-500 p-4 rounded-md w-[100px] mx-auto justify-center items-center shadow-md my-4"
        title={"Close"}
        onPress={() => {
          router.back();
        }}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // marginTop: Constants.statusBarHeight,
  },
});
