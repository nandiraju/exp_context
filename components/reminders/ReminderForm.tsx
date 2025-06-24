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
    onSubmit({ title, description, date });
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
            <Text style={styles.title}>Enter Name</Text>
            <IconInput
              iconName="mail"
              iconSize={20}
              style={{ width: "80%", height: 45 }}
              placeholder="Title"
              value={title}
              onChangeText={setTitle}
            />
            <IconInput
              iconName="mail"
              iconSize={20}
              style={{ width: "80%", height: 45 }}
              placeholder="Description"
              value={description}
              onChangeText={setDescription}
            />
            <IconInput
              iconName="mail"
              iconSize={20}
              style={{ width: "80%", height: 45 }}
              placeholder="Date"
              value={date}
              onChangeText={setDate}
            />
            <IconInput
              iconName="security"
              iconSize={20}
              placeholder="password"
              style={{ width: "80%", height: 45 }}
            />

            <View style={styles.buttonRow}>
              <UIButton
                title="Cancel"
                className="bg-gray-500 p-4 rounded-full w-[120px] mx-auto mt-10 justify-center items-center"
                onPress={onClose}
              />
              <UIButton
                title="Save"
                className="bg-blue-500 p-4 rounded-full w-[120px] mx-auto mt-10 justify-center items-center"
                onPress={handleSubmit}
              />

              {/* <Button title="Cancel" onPress={onClose} />
            <Button title="Submit" onPress={handleSubmit} /> */}
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
    backgroundColor: "#fff",
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
    // justifyContent: "space-between",
  },
});
