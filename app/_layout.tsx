import { Stack } from "expo-router";
import { NoteProvider } from "./context/NotesContext";
export default function RootLayout() {
  return (
    <NoteProvider>
      <Stack />
    </NoteProvider>
  );
}
