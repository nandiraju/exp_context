import { Button, Platform, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import DateTimeInput from "@/components/DateTimeInput";
import DateTimePicker from "@react-native-community/datetimepicker";

export default function TestingScreen() {
  const [date, setDate] = useState(new Date(1598051730000));

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    setDate(currentDate);
  };

  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text>selected: {date.toLocaleString()}</Text>
      <DateTimePicker
        testID="dateTimePicker"
        value={date}
        mode={"datetime"}
        // is24Hour={true}
        display={"default"}
        // display={Platform.OS === "ios" ? "spinner" : "default"}
        onChange={onChange}
        style={{
          width: 200,
          height: 90,
          backgroundColor: "#efefef",
          fontColor: "white",
          borderRadius: 10,
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
