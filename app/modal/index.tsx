import { useRouter, useLocalSearchParams } from "expo-router";
import { View, Text, Button } from "react-native";
import { ModalItems } from "./ModalItems";
import { SafeAreaView } from "react-native-safe-area-context";

export default function GenericModal() {
  const router = useRouter();
  const { type } = useLocalSearchParams();

  const ComponentToRender = ModalItems[type as string];

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Button title="Close" onPress={() => router.back()} />
      <View className="flex-1">
        {ComponentToRender ? (
          <ComponentToRender />
        ) : (
          <Text>Unknown component</Text>
        )}
      </View>
    </SafeAreaView>
  );
}
