import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { useAtom } from "jotai";
import { itemsListAtom } from "@/stores/SimpleStorage";
import { randomUUID } from "expo-crypto";
import ReminderForm from "./ReminderForm";
import UIButton from "../UIButton";

export default function RemindersList() {
  const [todos, setTodos] = useAtom(itemsListAtom);
  const [input, setInput] = useState("");
  const [editingId, setEditingId] = useState<string | null>(null);
  const [showForm, setShowForm] = useState(false);

  const [selectedItem, setSelecteditem] = useState({
    title: "",
    description: "",
    date: "",
  });

  const handleFormSubmit = (data: any) => {
    console.log("Submitted:", data);
    if (editingId) {
      // setTodos(
      //   todos.map((todo) => (todo.id === editingId ? { ...todo, data } : data))
      // );
      const updatedTodos = todos.map((todo) => {
        if (todo.id === editingId) {
          return { ...todo, data };
        } else {
          return todo;
        }
      });
      setTodos(updatedTodos);
      setEditingId(null);
    } else {
      const newTodo = {
        id: randomUUID?.() || Date.now().toString(),
        title: data.title.trim(),
        description: data.description.trim(),
        date: data.date.trim(),
      };
      setTodos([...todos, newTodo]);
    }
  };

  const handleSubmit = () => {
    if (!input.trim()) return;

    if (editingId) {
      setTodos(
        todos.map((todo) =>
          todo.id === editingId ? { ...todo, text: input.trim() } : todo
        )
      );
      setEditingId(null);
    } else {
      const newTodo = {
        id: randomUUID?.() || Date.now().toString(),
        text: input.trim(),
      };
      setTodos([...todos, newTodo]);
    }

    setInput("");
  };

  const handleDelete = (id: string) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const startEdit = (id: string) => {
    setEditingId(id);
    const itemToEdit = todos.find((todo) => todo.id === id);
    setSelecteditem(itemToEdit);
    console.log("itemToEdit", itemToEdit);
    setShowForm(true);
  };

  const openForm = () => {};

  return (
    <View style={styles.container}>
      <FlatList
        data={todos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.todoItem}>
            <Text style={styles.todoText}>{item.title}</Text>
            <Text style={styles.todoText}>{item.description}</Text>
            <Text style={styles.todoText}>{item.date}</Text>
            <TouchableOpacity onPress={() => startEdit(item.id)}>
              <Text style={styles.edit}>Edit</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleDelete(item.id)}>
              <Text style={styles.delete}>Delete</Text>
            </TouchableOpacity>
          </View>
        )}
      />

      {/* New Code from here */}

      <UIButton title="Create" onPress={openForm} />

      <ReminderForm
        visible={showForm}
        onClose={() => setShowForm(false)}
        onSubmit={handleFormSubmit}
        initialData={selectedItem}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 24 },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    marginBottom: 10,
    borderRadius: 4,
  },
  todoItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderColor: "#eee",
  },
  todoText: { flex: 1 },
  edit: { color: "blue", marginRight: 10 },
  delete: { color: "red" },
});
