// storage.ts
import AsyncStorage from "@react-native-async-storage/async-storage";
import { atomWithStorage, createJSONStorage } from "jotai/utils";

// Persistent accessToken atom
export const accessTokenAtom = atomWithStorage<string | null>(
  "accessToken",
  null,
  createJSONStorage(() => AsyncStorage)
);

export type Item = any;

// Persistent todo list atom with local storage
export const itemsListAtom = atomWithStorage<Item[]>(
  "reminders_list",
  [], // default empty list
  createJSONStorage(() => AsyncStorage)
);

export const medicationsListAtom = atomWithStorage<Item[]>(
  "medications_list",
  [], // default empty list
  createJSONStorage(() => AsyncStorage)
);
