import { Ionicons } from "@expo/vector-icons";

export const BG_COLOR = "#f5f5f5";

export const ICON_SIZE = 25; // Default icon size
export const ICON_COLOR = "#555"; // Default icon color
type IoniconName = keyof typeof Ionicons.glyphMap;

export const drawerScreenMenuItems: {
  name: string;
  label: string;
  title: string;
  icon: IoniconName; // ✅ Enforce valid icon names
}[] = [
  {
    name: "index", // Must match file name in /app
    label: "Home",
    title: "Welcome",
    icon: "home-outline",
  },
  {
    name: "Documents",
    label: "Documents",
    title: "Documents",
    icon: "document-outline",
  },
  {
    name: "Symptoms",
    label: "Symptoms",
    title: "Symptoms",
    icon: "albums-outline",
  },
  {
    name: "Reminders",
    label: "Reminders",
    title: "Reminders",
    icon: "notifications-outline",
  },
  {
    name: "ChatPage",
    label: "Chat",
    title: "Chat",
    icon: "chatbubble-outline",
  },
  {
    name: "Settings",
    label: "Settings",
    title: "Settings",
    icon: "settings-outline",
  },
];
