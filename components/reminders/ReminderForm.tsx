import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Modal,
  TextInput,
  Button,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import UIButton from "../UIButton";
import IconInput from "../IconInput";
import { Ionicons } from "@expo/vector-icons";

interface SimpleDialogFormProps {
  visible: boolean;
  onClose: () => void;
  onSubmit: (data: any) => void;
  initialData?: any;
}

export default function ReminderForm({
  visible,
  onClose,
  onSubmit,
  initialData,
}: SimpleDialogFormProps) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");

  useEffect(() => {
    if (visible) {
      setTitle(initialData?.title || "");
      setDescription(initialData.description || "");
      setDate(initialData.date || "");
    }
  }, [visible, initialData]);

  const handleSubmit = () => {
    //onSubmit({ title, description, date });
    const dateRegex = /^(0[1-9]|1[0-2])\/(0[1-9]|[12][0-9]|3[01])\/\d{4}$/;
    if (!dateRegex.test(date.trim())) {
      alert("Please enter a valid date in MM/DD/YYYY format.");
      return;
    }
    onSubmit({ ...initialData, title, description, date });
    setTitle("");
    setDescription("");
    setDate("");
    onClose();
  };

  return (
    <Modal
      transparent
      visible={visible}
      animationType="fade"
      onRequestClose={onClose}
    >
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        className="flex-1"
      >
        <View style={styles.modalOverlay}>
          <View style={styles.dialog}>
            <View className="flex-row justify-start  items-center mb-4">
              <Ionicons
                name="notifications-outline"
                size={24}
                color="gray"
                onPress={onClose}
              />

              <Text className="font-semibold  text-gray-400 ml-2">
                Enter the reminder details
              </Text>
            </View>

            <IconInput
              iconName="text-snippet"
              iconSize={20}
              style={{ width: "80%", height: 45 }}
              placeholder="Title"
              value={title}
              onChangeText={setTitle}
            />
            <IconInput
              iconName="edit-note"
              iconSize={20}
              style={{ width: "80%", height: 45 }}
              placeholder="Description"
              value={description}
              onChangeText={setDescription}
            />
            <IconInput
              iconName="edit-calendar"
              iconSize={20}
              style={{ width: "80%", height: 45 }}
              placeholder="MM/DD/YYYY"
              value={date}
              onChangeText={setDate}
            />

            <View style={styles.buttonRow}>
              <UIButton
                title="Cancel"
                className="bg-gray-500 p-3 rounded-full w-[120px] mx-auto justify-center items-center"
                onPress={onClose}
              />
              <UIButton
                title="Save"
                className="bg-blue-500 p-3 rounded-full w-[120px] mx-auto  justify-center items-center"
                onPress={handleSubmit}
              />
            </View>
          </View>
        </View>
      </KeyboardAvoidingView>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.4)",
    justifyContent: "center",
    alignItems: "center",
  },
  dialog: {
    backgroundColor: "#f5f5f5",
    padding: 20,
    width: "80%",

    borderRadius: 18,
    elevation: 5,
  },
  title: {
    fontSize: 18,
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 6,
    padding: 10,
    marginBottom: 15,
  },
  buttonRow: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
    padding: 2,
    // backgroundColor: "red",
    // justifyContent: "space-between",
  },
});
