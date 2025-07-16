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
import { useAtom } from "jotai";
import { userAtom } from "@/stores/SimpleStorage";

function DrawerHeader(props: DrawerContentComponentProps) {
  const [user] = useAtom(userAtom);

  const getUserInitials = (user: any): any => {
    if (!user || !user.firstName || !user.lastName) return "";
    const firstInitial = user.firstName.charAt(0).toUpperCase();
    const lastInitial = user.lastName.charAt(0).toUpperCase();
    const userName = user.firstName + " " + user.lastName;

    return {
      initials: `${firstInitial}${lastInitial}`,
      fullName: userName,
    };
  };

  return (
    <DrawerContentScrollView {...props}>
      <View className="flex-col justify-center items-center mb-4 p-4 border-gray-200 border-b">
        <View className="flex justify-center items-center bg-gray-200 mb-2 rounded-full size-24">
          <Text className="font-bold text-gray-700 text-2xl text-center">
            {getUserInitials(user).initials}
          </Text>
        </View>
        <Text className="font-poppins-semibold text-gray-700 text-lg">
          {getUserInitials(user).fullName}
        </Text>
        <Text className="font-poppins-semibold text-md text-orange-400">
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
