// App.tsx
import React, { useState } from "react";
import {
  Text,
  TextInput,
  View,
  Button,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { useAtom } from "jotai";
import {
  todoListAtom,
  addTodoAtom,
  updateTodoAtom,
  deleteTodoAtom,
  TodoItem,
} from "../../stores/Items";

export default function ItemComponent() {
  const [todos] = useAtom(todoListAtom);
  const [, addTodo] = useAtom(addTodoAtom);
  const [, updateTodo] = useAtom(updateTodoAtom);
  const [, deleteTodo] = useAtom(deleteTodoAtom);

  const [input, setInput] = useState("");
  const [editingId, setEditingId] = useState<string | null>(null);

  const handleSubmit = () => {
    if (!input.trim()) return;

    if (editingId) {
      updateTodo({ id: editingId, text: input.trim() });
      setEditingId(null);
    } else {
      addTodo(input.trim());
    }

    setInput("");
  };

  const startEdit = (item: TodoItem) => {
    setInput(item.text);
    setEditingId(item.id);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Todo List</Text>
      <TextInput
        style={styles.input}
        placeholder="Add or edit todo"
        value={input}
        onChangeText={setInput}
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
            <View style={styles.actions}>
              <TouchableOpacity onPress={() => startEdit(item)}>
                <Text style={styles.edit}>Edit</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => deleteTodo(item.id)}>
                <Text style={styles.delete}>Delete</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 24, backgroundColor: "#fff" },
  title: { fontSize: 24, fontWeight: "bold", marginBottom: 16 },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 4,
    padding: 10,
    marginBottom: 10,
  },
  todoItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderColor: "#eee",
  },
  todoText: { fontSize: 16, flex: 1 },
  actions: { flexDirection: "row", gap: 10 },
  edit: { color: "blue", marginRight: 12 },
  delete: { color: "red" },
});
