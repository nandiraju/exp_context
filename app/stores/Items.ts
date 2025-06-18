// storage.ts
import AsyncStorage from "@react-native-async-storage/async-storage";
import { atom } from "jotai";
import { createJSONStorage, atomWithStorage } from "jotai/utils";
import { randomUUID } from "expo-crypto";

// Type definition for a todo item
export type TodoItem = {
  id: string;
  text: string;
};

// Persistent atom for the todo list
export const todoListAtom = atomWithStorage<TodoItem[]>(
  "todoList",
  [],
  createJSONStorage(() => AsyncStorage)
);

// CREATE: Add a new todo
export const addTodoAtom = atom(null, (get, set, text: string) => {
  const currentRaw = get(todoListAtom);
  const current = Array.isArray(currentRaw) ? currentRaw : [];
  const newItem: TodoItem = { id: randomUUID(), text };
  set(todoListAtom, [...current, newItem]);
});

export const updateTodoAtom = atom(null, (get, set, { id, text }) => {
  const currentRaw = get(todoListAtom);
  const current = Array.isArray(currentRaw) ? currentRaw : [];
  const updated = current.map((item) =>
    item.id === id ? { ...item, text } : item
  );
  set(todoListAtom, updated);
});

export const deleteTodoAtom = atom(null, (get, set, id) => {
  const currentRaw = get(todoListAtom);
  const current = Array.isArray(currentRaw) ? currentRaw : [];
  const filtered = current.filter((item) => item.id !== id);
  set(todoListAtom, filtered);
});
