import React, { useState } from "react";
import { View, Text, Modal, TextInput, Button, StyleSheet } from "react-native";

interface SimpleDialogFormProps {
  visible: boolean;
  onClose: () => void;
  onSubmit: (data: any) => void;
}

export default function ReminderForm({
  visible,
  onClose,
  onSubmit,
}: SimpleDialogFormProps) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");

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
      <View style={styles.modalOverlay}>
        <View style={styles.dialog}>
          <Text style={styles.title}>Enter Name</Text>
          <TextInput
            style={styles.input}
            placeholder="Title"
            value={title}
            onChangeText={setTitle}
          />
          <TextInput
            style={styles.input}
            placeholder="Description"
            value={description}
            onChangeText={setDescription}
          />
          <TextInput
            style={styles.input}
            placeholder="Date"
            value={date}
            onChangeText={setDate}
          />
          <View style={styles.buttonRow}>
            <Button title="Cancel" onPress={onClose} />
            <Button title="Submit" onPress={handleSubmit} />
          </View>
        </View>
      </View>
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
    borderRadius: 8,
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
    justifyContent: "space-between",
  },
});
