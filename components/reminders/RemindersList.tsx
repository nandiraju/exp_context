import React, { useState } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { useAtom } from "jotai";
import { itemsListAtom } from "@/stores/SimpleStorage";
import { randomUUID } from "expo-crypto";
import ReminderForm from "./ReminderForm";
import UIButton from "../UIButton";
import { Ionicons } from "@expo/vector-icons";

export default function RemindersList() {
  const [todos, setTodos] = useAtom(itemsListAtom);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [showForm, setShowForm] = useState(false);

  const [selectedItem, setSelecteditem] = useState({
    title: "",
    description: "",
    date: "",
  });

  const handleFormSubmit = (data: any) => {
    if (editingId) {
      const updatedTodos = todos.map((todo) =>
        todo.id === editingId ? { ...todo, ...data } : todo
      );
      setTodos(updatedTodos);
      setEditingId(null);
    } else {
      const newTodo = {
        id: randomUUID(),
        title: data.title.trim(),
        description: data.description.trim(),
        date: data.date.trim(),
      };
      setTodos([...todos, newTodo]);
    }

    setSelecteditem({ title: "", description: "", date: "" });
    setShowForm(false);
  };

  const handleDelete = (id: string) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const startEdit = (id: string) => {
    const itemToEdit = todos.find((todo) => todo.id === id);
    if (itemToEdit) {
      setEditingId(id);
      setSelecteditem(itemToEdit);
      setShowForm(true);
    }
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={todos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View className="flex-column bg-white rounded-lg p-4 mb-3 shadow-sm overflow-hidden">
            <View className="absolute top-[-100] right-[-125] w-64 h-64 bg-blue-500/5 rounded-full" />
            <View className="flex-1 flex-column rounded-md p-4">
              <Text className="font-semibold">{item.title}</Text>
              <Text className="text-gray-600 mt-2">{item.description}</Text>
            </View>
            <View className="flex-row items-center pt-2 mt-4 justify-between border-t-[0.3px] border-gray-300">
              <TouchableOpacity onPress={() => startEdit(item.id)}>
                <Ionicons name="create-outline" size={20} color="blue" />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => handleDelete(item.id)}>
                <Ionicons name="trash-outline" size={20} color="red" />
              </TouchableOpacity>
            </View>
          </View>
        )}
        ListEmptyComponent={() => (
          <View className="h-[75vh] items-center justify-center px-4">
            <Ionicons
              name="notifications-outline"
              size={100}
              color="dodgerblue"
            />
            <Text className="text-gray-500 mt-4 text-lg font-semibold">
              No reminders found. {"\n"}Start creating some!
            </Text>
          </View>
        )}
      />

      <UIButton
        title="Create"
        onPress={() => {
          setEditingId(null);
          setSelecteditem({ title: "", description: "", date: "" });
          setShowForm(true);
        }}
      />

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
  container: { flex: 1, padding: 24, backgroundColor: "#f5f5f5" },
});
