import { Ionicons } from "@expo/vector-icons";
import { View, Text } from "react-native";

export const HeadingDivider = ({ iconName, title, hideRightIcon }: any) => {
  return (
    <View className="flex-row items-center justify-between mx-[15px] border-b border-gray-300 pb-2 mb-3.5">
      <View className="flex-row items-center gap-2 flex-1">
        <Ionicons name={iconName} size={24} color="dodgerblue" />
        <Text className="text-lg font-bold">{title}</Text>
      </View>
      {!hideRightIcon && (
        <Ionicons name="arrow-forward-outline" size={24} color="dodgerblue" />
      )}
    </View>
  );
};
