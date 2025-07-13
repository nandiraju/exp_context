import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Drawer } from "expo-router/drawer";
import { Ionicons } from "@expo/vector-icons";

const ICON_SIZE = 30; // Default icon size
const ICON_COLOR = "dodgerblue"; // Default icon color
export default function Layout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer
        screenOptions={{
          drawerLabelStyle: {
            fontSize: 15,
            fontFamily: "PoppinsRegular", // Ensure this matches your Tailwind config
          },
        }}
      >
        <Drawer.Screen
          name="index" // This is the name of the page and must match the url from root
          options={{
            drawerLabel: "Home",
            title: "Welcome",
            drawerIcon: ({ size, color }) => {
              return (
                <Ionicons
                  name={"home-outline"}
                  size={ICON_SIZE}
                  color={ICON_COLOR}
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
                  size={ICON_SIZE}
                  color={ICON_COLOR}
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
                  size={ICON_SIZE}
                  color={ICON_COLOR}
                />
              );
            },
          }}
        />
        {/* <Drawer.Screen
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
        /> */}

        <Drawer.Screen
          name="ChatPage" // This is the name of the page and must match the url from root
          options={{
            drawerLabel: "Chat",
            title: "Chat",
            drawerIcon: ({ size, color }) => {
              return (
                <Ionicons
                  name={"chatbubble-outline"}
                  size={ICON_SIZE}
                  color={ICON_COLOR}
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
                  size={ICON_SIZE}
                  color={ICON_COLOR}
                />
              );
            },
          }}
        />
      </Drawer>
    </GestureHandlerRootView>
  );
}
