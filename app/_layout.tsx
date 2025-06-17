import { Stack } from "expo-router";
import { NoteProvider } from "./context/NotesContext";
import "../global.css";

export default function RootLayout() {
  return (
    <NoteProvider>
      <Stack />
    </NoteProvider>
  );
}
