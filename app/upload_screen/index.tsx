import { Text, StyleSheet, View, SafeAreaView, Button } from "react-native";
import React, { Component } from "react";
import NewsCard from "@/components/NewsCard";
import { router } from "expo-router";
import UploadScreen from "./Upload";

export default class index extends Component {
  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <View className="flex-1">
          <UploadScreen />
          <Button title="Close" onPress={() => router.back()} />
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({});
