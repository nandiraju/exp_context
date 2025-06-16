import { atom } from "jotai";
import { atomWithStorage } from "jotai/utils";

export const counterAtom = atom(0);
export const medicationsAtom = atomWithStorage("medications", []);
export const remindersAtom = atomWithStorage("reminders", []);

export const todosAtom = atom(async () => {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/todos?_limit=5"
  );
  if (!res.ok) throw new Error("Failed to fetch todos");
  return await res.json(); // will be an array of todos
});
