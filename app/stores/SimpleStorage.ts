// storage.ts
import AsyncStorage from "@react-native-async-storage/async-storage";
import { atomWithStorage, createJSONStorage } from "jotai/utils";

export type Item = {
  id: string;
  text: string;
};

// Persistent todo list atom with local storage
export const itemsListAtom = atomWithStorage<Item[]>(
  "items_list",
  [], // default empty list
  createJSONStorage(() => AsyncStorage)
);
