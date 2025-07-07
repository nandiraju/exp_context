import { Text, StyleSheet, View, SafeAreaView, Button } from "react-native";
import React, { Component } from "react";
import { router } from "expo-router";
import UploadScreen from "./Upload";
import IconButton from "@/components/IconButton";

export default class index extends Component {
  render() {
    return (
      <SafeAreaView className="flex-1 bg-white">
        <View className="flex-row items-start p-2">
          <IconButton
            iconName="arrow-back-outline"
            size={30}
            onPress={() => router.back()}
          />
        </View>
        <View className="flex-1">
          <UploadScreen />
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({});
