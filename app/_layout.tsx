import { Stack } from "expo-router";
import { NoteProvider } from "./context/NotesContext";
import "../global.css";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="(auth)/SignIn" options={{ headerShown: false }} />
      <Stack.Screen name="(auth)/SignUp" options={{ headerShown: false }} />
      <Stack.Screen name="screens/Welcome" options={{ title: "Welcone" }} />
    </Stack>
  );
}
