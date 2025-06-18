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
import { itemsListAtom } from "../stores/SimpleStorage";
import { randomUUID } from "expo-crypto";
export default function TodoApp() {
  const [todos, setTodos] = useAtom(itemsListAtom);
  const [input, setInput] = useState("");
  const [editingId, setEditingId] = useState<string | null>(null);

  // CREATE or UPDATE
  const handleSubmit = () => {
    if (!input.trim()) return;

    if (editingId) {
      // UPDATE
      setTodos(
        todos.map((todo) =>
          todo.id === editingId ? { ...todo, text: input.trim() } : todo
        )
      );
      setEditingId(null);
    } else {
      // CREATE
      const newTodo = {
        id: randomUUID?.() || Date.now().toString(),
        text: input.trim(),
      };
      setTodos([...todos, newTodo]);
    }

    setInput("");
  };

  // DELETE
  const handleDelete = (id: string) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  // Start editing
  const startEdit = (id: string, text: string) => {
    setInput(text);
    setEditingId(id);
  };

  return (
    <View style={styles.container}>
      <TextInput
        value={input}
        onChangeText={setInput}
        placeholder="Add or edit todo"
        style={styles.input}
      />
      <Button
        title={editingId ? "Update Todo" : "Add Todo"}
        onPress={handleSubmit}
      />

      <FlatList
        data={todos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.todoItem}>
            <Text style={styles.todoText}>{item.text}</Text>
            <TouchableOpacity onPress={() => startEdit(item.id, item.text)}>
              <Text style={styles.edit}>Edit</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleDelete(item.id)}>
              <Text style={styles.delete}>Delete</Text>
            </TouchableOpacity>
          </View>
        )}
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
