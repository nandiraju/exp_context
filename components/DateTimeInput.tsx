import React, { useState } from "react";
import { View, Text, Pressable, Platform } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import { Ionicons } from "@expo/vector-icons";

const formatDateTime = (date, mode) => {
  if (mode === "time") {
    return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  } else if (mode === "date") {
    return date.toLocaleDateString();
  } else {
    return (
      date.toLocaleDateString() +
      " " +
      date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
    );
  }
};

const getIconName = (mode) => {
  switch (mode) {
    case "time":
      return "time-outline";
    case "datetime":
      return "calendar";
    case "date":
    default:
      return "calendar-outline";
  }
};

export default function DateTimeInput({
  mode = "date", // 'date' | 'time' | 'datetime'
  label = "Select",
  onChange,
  initialValue = new Date(),
}) {
  const [value, setValue] = useState(initialValue);
  const [showPicker, setShowPicker] = useState(false);
  const [step, setStep] = useState("date");

  const handleChange = (event, selectedDate) => {
    if (event.type === "dismissed") {
      setShowPicker(false);
      return;
    }

    if (selectedDate) {
      if (mode === "datetime" && step === "date") {
        const updatedDate = new Date(selectedDate);
        updatedDate.setHours(value.getHours());
        updatedDate.setMinutes(value.getMinutes());
        setValue(updatedDate);
        setStep("time");
      } else {
        const updated = new Date(value);
        if (mode === "datetime" && step === "time") {
          updated.setHours(selectedDate.getHours());
          updated.setMinutes(selectedDate.getMinutes());
          setValue(updated);
          setShowPicker(false);
          setStep("date");
          onChange?.(updated);
        } else {
          setValue(selectedDate);
          setShowPicker(false);
          onChange?.(selectedDate);
        }
      }
    }
  };

  const getCurrentMode = () => {
    if (mode === "datetime") return step;
    return mode;
  };

  return (
    <View style={{ marginVertical: 10 }}>
      <Text style={{ marginBottom: 6 }}>{label}</Text>

      <Pressable
        onPress={() => {
          setStep("date");
          setShowPicker(true);
        }}
        style={{
          flexDirection: "row",
          alignItems: "center",
          borderWidth: 1,
          borderColor: "#ccc",
          paddingVertical: 10,
          paddingHorizontal: 12,
          borderRadius: 6,
          backgroundColor: "#fff",
        }}
      >
        <Ionicons
          name={getIconName(mode)}
          size={20}
          color="#555"
          style={{ marginRight: 8 }}
        />
        <Text>{formatDateTime(value, mode)}</Text>
      </Pressable>

      {showPicker && (
        <DateTimePicker
          value={value}
          mode={getCurrentMode()}
          display={Platform.OS === "ios" ? "spinner" : "default"}
          onChange={handleChange}
        />
      )}
    </View>
  );
}
