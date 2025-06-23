import { StyleSheet, Text, View } from "react-native";
import React from "react";
import RemindersList from "@/components/reminders/RemindersList";

const Reminders = () => {
  return (
    <View className="flex-1 ">
      <RemindersList />
    </View>
  );
};

export default Reminders;
