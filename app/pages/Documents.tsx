import { StyleSheet, Text, View } from "react-native";
import React from "react";
import UploadScreen from "@/app/upload_screen/Upload";
import UIButton from "@/components/UIButton";
import { router } from "expo-router";
const Documents = () => {
  return (
    <View className="flex-1">
      <UIButton
        title="Upload Documents"
        onPress={() => {
          router.push("/upload_screen");
        }}
      />
      {/* <UploadScreen /> */}
    </View>
  );
};

export default Documents;
