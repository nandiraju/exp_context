import { FlatList, StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import UploadScreen from "@/app/upload_screen/Upload";
import UIButton from "@/components/UIButton";
import { router } from "expo-router";
import { useAtom } from "jotai";
import { documentsAtom } from "@/stores/SimpleStorage";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";

const Documents = () => {
  const [documents, setDocuments] = useAtom(documentsAtom);

  useEffect(() => {
    // Fetch documents from local storage or API if needed
    // For now, we assume documentsAtom is already populated
    console.log("Documents: ", documents);
  }, [documents]);

  return (
    <SafeAreaView className="flex-1">
      <FlatList
        data={Array.isArray(documents) ? documents : []}
        renderItem={({ item }) => (
          <Text>{item?.name || JSON.stringify(item)}</Text>
        )}
        keyExtractor={(item, index) => item?.id?.toString() || index.toString()}
        ListEmptyComponent={() => (
          <View className="h-[70vh] items-center justify-center px-4">
            <Ionicons name="albums-outline" size={100} color="dodgerblue" />
            <Text className="text-gray-500 mt-4 text-lg font-semibold">
              No documents found. {"\n"}Start uploading some!
            </Text>
          </View>
        )}
      />
      <UIButton
        title="Upload Documents"
        onPress={() => {
          router.push("/upload_screen");
        }}
      />
      {/* <UploadScreen /> */}
    </SafeAreaView>
  );
};

export default Documents;
