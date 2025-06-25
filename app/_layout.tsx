import { Stack } from "expo-router";
import { NoteProvider } from "../context/NotesContext";
import "../global.css";
import { Text } from "react-native";

import { useFonts } from "expo-font";
import {
  Poppins_400Regular,
  Poppins_600SemiBold,
} from "@expo-google-fonts/poppins";

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    PoppinsRegular: Poppins_400Regular,
    PoppinsSemiBold: Poppins_600SemiBold,
  });

  if (!fontsLoaded) {
    return <Text>Loading...</Text>;
  }

  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="(auth)/SignIn" />
      <Stack.Screen name="(auth)/SignUp" />
      <Stack.Screen
        name="(auth)/ForgotPassword"
        options={{ headerShown: false, presentation: "modal" }}
      />
      <Stack.Screen name="pages" options={{ headerShown: false }} />
    </Stack>
  );
}
