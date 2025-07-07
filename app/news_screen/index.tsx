import { Text, StyleSheet, View, SafeAreaView, Button } from "react-native";
import React, { Component } from "react";
import NewsCard from "@/components/NewsCard";
import { router } from "expo-router";
import IconButton from "@/components/IconButton";

export default class index extends Component {
  render() {
    return (
      // <SafeAreaView style={{ flex: 1 }}>
      //   <View className="flex-1 py-2">
      //     <NewsCard count={-1} />
      //     <Button title="Close" onPress={() => router.back()} />
      //   </View>
      // </SafeAreaView>

      <SafeAreaView className="flex-1 bg-gray-100">
        {/* <View className="flex-row items-start p-2 bg-transparent"> */}
        <IconButton
          iconName="arrow-back-outline"
          size={25}
          onPress={() => router.back()}
        />
        {/* </View> */}
        <View className="flex-1">
          <NewsCard count={-1} />
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({});
