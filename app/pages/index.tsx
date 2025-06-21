import { StyleSheet, Text, View } from "react-native";
import React from "react";
import ItemComponent from "../screens/ItemComponent";
import UploadScreen from "../screens/Upload";

const Welcome = () => {
  return (
    <View className="flex-1 justify-center items-center bg-blue-50">
      <Text>Welcome</Text>
      {/* <ItemComponent /> */}
      <UploadScreen />
    </View>
  );
};

export default Welcome;
