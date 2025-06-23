import Ionicons from "@expo/vector-icons/build/Ionicons";
import { View } from "react-native";

type IconButtonProps = {
  iconName: string;
  onPress: () => void;
  size?: number;
};

export default function IconButton({
  iconName,
  onPress,
  size = 30,
}: IconButtonProps) {
  return (
    <View className="p-2 ">
      <Ionicons
        name={iconName}
        size={size}
        color="dodgerblue"
        onPress={onPress}
      />
    </View>
  );
}
