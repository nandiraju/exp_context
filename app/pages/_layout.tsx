import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Drawer } from "expo-router/drawer";
import { Ionicons } from "@expo/vector-icons";
import { View, Text } from "react-native";
import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import {
  drawerScreenMenuItems,
  ICON_COLOR,
  ICON_SIZE,
} from "@/helpers/Constants";

function DrawerHeader(props: DrawerContentComponentProps) {
  return (
    <DrawerContentScrollView {...props}>
      <View className="flex-col items-center justify-center p-4  mb-4 border-b border-gray-200">
        <Text className="text-2xl font-bold">OSakhi</Text>
        <Text className="text-md text-orange-400 font-poppins-semibold">
          {require("dayjs")().format("dddd, D MMMM, YYYY")}
        </Text>
      </View>
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
}
export default function Layout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer
        drawerContent={(props) => <DrawerHeader {...props} />}
        screenOptions={{
          drawerLabelStyle: {
            fontSize: 15,
            fontFamily: "PoppinsRegular", // Ensure this matches your Tailwind config
          },
        }}
      >
        {drawerScreenMenuItems.map((screen) => (
          <Drawer.Screen
            key={screen.name}
            name={screen.name}
            options={{
              drawerLabel: screen.label,
              title: screen.title,
              drawerIcon: ({ size, color }) => (
                <Ionicons
                  name={screen.icon}
                  size={ICON_SIZE}
                  color={ICON_COLOR}
                />
              ),
            }}
          />
        ))}
      </Drawer>
    </GestureHandlerRootView>
  );
}
