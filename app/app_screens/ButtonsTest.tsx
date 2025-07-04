import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import UIButton from "@/components/lib/UIButton";
import UIInput from "@/components/lib/UIInput";

import { Ionicons, Feather } from "@expo/vector-icons";
import { Icon } from "react-native-vector-icons/Icon";
import { ScrollView } from "react-native-gesture-handler";
const ButtonsTest = () => {
  const [email, setEmail] = useState("");

  return (
    <ScrollView className="flex-1  bg-white p-4">
      <UIButton
        text="Submit"
        icon={Feather}
        iconName="send"
        iconPosition="left"
        onPress={() => console.log("Submit")}
        filled
        color="dodgerblue"
        style={{ marginTop: 10, height: 50, width: "70%" }}
      />

      <UIButton
        text="Submit and Elevated button that can span lines"
        icon={Feather}
        iconName="send"
        iconPosition="top"
        onPress={() => console.log("Submit")}
        filled
        color="dodgerblue"
        elevated
        iconSize={40}
        style={{ marginTop: 10, height: 100, width: 250, borderRadius: 10 }}
      />

      <UIButton
        text="Submit and Elevated button that can span lines"
        icon={Ionicons}
        iconName="send-outline"
        iconPosition="top"
        onPress={() => console.log("Submit")}
        filled
        color="orange"
        elevated
        iconSize={40}
        textColor="black"
        iconColor="red"
        style={{
          marginTop: 10,
          height: 100,
          width: 250,
          borderRadius: 10,
        }}
      />

      <UIButton
        text="Loading"
        loading
        filled
        color="#6200EE"
        onPress={() => {}}
        style={{ marginTop: 10 }}
      />

      <UIButton
        icon={Ionicons}
        iconName="heart"
        filled={false}
        elevated
        onPress={() => console.log("Heart")}
        style={{ marginTop: 10, height: 60, width: 60 }}
      />

      <Text className="mt-14">Now comes input</Text>
      <UIInput
        value={email}
        onChangeText={setEmail}
        placeholder="enter you email"
        icon={Feather}
        iconName="settings"
        iconColor="dodgerblue"
        iconPosition="left"
        filled={false}
        textColor="dodgerblue"
        multiline={true}
        containerStyle={{
          marginVertical: 8,
          borderRadius: 10,
          backgroundColor: "#f0f0f0",
        }}
      />

      {/* <UIInput
        value={password}
        onChangeText={setPassword}
        placeholder="Password"
        icon={Ionicons}
        iconName="lock-closed"
        iconPosition="right"
        secureTextEntry
        filled={false}
        color="#3F51B5"
        rounded={false}
      /> */}
    </ScrollView>
  );
};

export default ButtonsTest;

const styles = StyleSheet.create({});
