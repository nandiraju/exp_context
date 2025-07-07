import { WebView } from "react-native-webview";
import Constants from "expo-constants";
import { StyleSheet, View } from "react-native";
import UIButton from "@/components/UIButton";
import { SafeAreaView } from "react-native-safe-area-context";
import React from "react";
import { router } from "expo-router";
import { userAtom } from "@/stores/SimpleStorage";
import { useAtom } from "jotai";
import { Ionicons } from "@expo/vector-icons";
import IconButton from "@/components/IconButton";

export default function AgentScreen() {
  const user = useAtom(userAtom);
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "black" }}>
      <View className="flex-row items-start">
        <IconButton
          iconName="arrow-back-outline"
          size={35}
          onPress={() => router.back()}
        />
      </View>

      <WebView
        style={styles.container}
        //source={{ uri: "https://ai.nandiraju.com/" }}
        source={{
          uri: `https://osakhi-production-avatar.vercel.app/avatar?token=${user?.email}`,
        }}
        allowsInlineMediaPlayback
        mediaPlaybackRequiresUserAction={false}
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
