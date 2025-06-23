import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Drawer } from "expo-router/drawer";
import { Ionicons } from "@expo/vector-icons";

export default function Layout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer>
        <Drawer.Screen
          name="index" // This is the name of the page and must match the url from root
          options={{
            drawerLabel: "Home",
            title: "Welcome",
            drawerIcon: ({ size, color }) => {
              return (
                <Ionicons
                  name={"home-outline"}
                  size={20}
                  color={"dodgerblue"}
                />
              );
            },
          }}
        />
        <Drawer.Screen
          name="Documents" // This is the name of the page and must match the url from root
          options={{
            drawerLabel: "Documents",
            title: "Documents",
            drawerIcon: ({ size, color }) => {
              return (
                <Ionicons
                  name={"document-outline"}
                  size={20}
                  color={"dodgerblue"}
                />
              );
            },
          }}
        />
        <Drawer.Screen
          name="Reminders" // This is the name of the page and must match the url from root
          options={{
            drawerLabel: "Reminders",
            title: "Reminders",
            drawerIcon: ({ size, color }) => {
              return (
                <Ionicons
                  name={"notifications-outline"}
                  size={20}
                  color={"dodgerblue"}
                />
              );
            },
          }}
        />
        <Drawer.Screen
          name="Medications" // This is the name of the page and must match the url from root
          options={{
            drawerLabel: "Medications",
            title: "Medications",
            drawerIcon: ({ size, color }) => {
              return (
                <Ionicons
                  name={"medkit-outline"}
                  size={20}
                  color={"dodgerblue"}
                />
              );
            },
          }}
        />

        <Drawer.Screen
          name="ChatPage" // This is the name of the page and must match the url from root
          options={{
            drawerLabel: "Chat",
            title: "Chat",
            drawerIcon: ({ size, color }) => {
              return (
                <Ionicons
                  name={"chatbubble-outline"}
                  size={20}
                  color={"dodgerblue"}
                />
              );
            },
          }}
        />
        <Drawer.Screen
          name="Settings" // This is the name of the page and must match the url from root
          options={{
            drawerLabel: "Settings",
            title: "Settings",
            drawerIcon: ({ size, color }) => {
              return (
                <Ionicons
                  name={"settings-outline"}
                  size={20}
                  color={"dodgerblue"}
                />
              );
            },
          }}
        />
      </Drawer>
    </GestureHandlerRootView>
  );
}
