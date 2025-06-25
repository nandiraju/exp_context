import { Text, StyleSheet, View, SafeAreaView, Button } from "react-native";
import React, { Component } from "react";
import NewsCard from "@/components/NewsCard";
import { router } from "expo-router";

export default class index extends Component {
  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <View className="flex-1">
          <NewsCard count={-1} />
          <Button title="Close" onPress={() => router.back()} />
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({});
