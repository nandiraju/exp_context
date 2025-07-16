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
// import UIButton from "../UIButton";
import UIButton from "@/components/lib/UIButton";
import { Ionicons } from "@expo/vector-icons";
import LottieView from "lottie-react-native";
import { BG_COLOR } from "@/helpers/Constants";
import EmptyState from "../EmptyState";

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
          <View className="flex-column bg-white shadow-sm mb-3 p-4 rounded-lg overflow-hidden">
            <View className="top-[-100] right-[-125] absolute bg-blue-500/5 rounded-full w-64 h-64" />
            <View className="flex-column flex-1 p-4 rounded-md">
              <Text className="font-poppins-semibold font-semibold">
                {item.title}
              </Text>
              <Text className="mt-2 text-gray-600">{item.description}</Text>
            </View>
            <View className="flex-row justify-between items-center mt-4 pt-2 border-gray-300 border-t-[0.3px]">
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
          <EmptyState
            lottieSource={require("@/assets/lottie/reminders.json")}
            message={"No reminders yet. \nStart creating your reminders!"}
          />
        )}
      />

      {/* <UIButton
        title="Create"
        onPress={() => {
          setEditingId(null);
          setSelecteditem({ title: "", description: "", date: "" });
          setShowForm(true);
        }}
      /> */}

      <UIButton
        text="Create Reminder"
        icon={Ionicons}
        iconName="create-outline"
        iconSize={20}
        iconPosition="left"
        onPress={() => {
          setEditingId(null);
          setSelecteditem({ title: "", description: "", date: "" });
          setShowForm(true);
        }}
        filled
        color="dodgerblue"
        style={{ marginTop: 10, height: 50, width: "auto", margin: "auto" }}
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
  container: { flex: 1, padding: 24, backgroundColor: BG_COLOR },
});
