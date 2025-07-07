import { FlatList, Pressable, StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import UploadScreen from "@/app/upload_screen/Upload";
// import UIButton from "@/components/UIButton";
import { router } from "expo-router";
import { useAtom } from "jotai";
import { documentsAtom } from "@/stores/SimpleStorage";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { SvgUri } from "react-native-svg";
import LottieView from "lottie-react-native";
import UIButton from "@/components/lib/UIButton";
import dayjs from "@/helpers/Helper";

const Documents = () => {
  const [documents, setDocuments] = useAtom(documentsAtom);

  useEffect(() => {
    // Fetch documents from local storage or API if needed
    // For now, we assume documentsAtom is already populated
    //console.log("Documents: ", documents);
  }, [documents]);

  return (
    <View className="flex-1 pb-10">
      <FlatList
        className="pt-4 px-4"
        data={documents || []}
        renderItem={({ item }) => <DocumentCard item={item} />}
        keyExtractor={(item, index) => item?.id?.toString() || index.toString()}
        ListEmptyComponent={() => (
          <View className="h-[70vh] items-center justify-center px-4">
            <LottieView
              autoPlay
              style={{
                width: 300,
                height: 300,
                // backgroundColor: "#eee",
              }}
              // Find more Lottie files at https://lottiefiles.com/featured
              source={require("@/assets/lottie/docs.json")}
            />
            {/* <Ionicons name="albums-outline" size={100} color="dodgerblue" /> */}
            <Text className="text-gray-500 mt-4 text-lg font-semibold text-center">
              No documents found. {"\n"}Start uploading some to start chatting!
            </Text>
          </View>
        )}
      />
      {/* <UIButton
        title="Upload Documents"
        onPress={() => {
          router.push("/upload_screen");
        }}
      /> */}
      <UIButton
        text=" Upload Documents"
        icon={Ionicons}
        iconName="cloud-upload-outline"
        iconSize={20}
        iconPosition="left"
        onPress={() => router.push("/upload_screen")}
        filled
        color="dodgerblue"
        style={{ marginTop: 10, height: 50, width: "auto", margin: "auto" }}
      />
      {/* <UploadScreen /> */}
    </View>
  );
};

export const DocumentCard = ({ item }: { item: any }) => {
  const [documents, setDocuments] = useAtom(documentsAtom);

  const deleteDocument = (id: string) => {
    setDocuments(documents.filter((doc) => doc.id !== id));
  };
  const chatWithDocument = (id: string) => {
    console.log("Chat with document ID:", id);
  };

  return (
    <View className="flex-row items-center bg-white mb-4 px-4 py-3 rounded-lg">
      <SvgUri
        width="50"
        height="50"
        uri="https://www.svgrepo.com/show/373961/pdf2.svg"
      />

      <View className="pl-4 flex-1">
        <Pressable onPress={() => chatWithDocument(item.id)}>
          <Text className="font-semibold">
            {item?.name || JSON.stringify(item)}
          </Text>
          <Text className="text-gray-300">
            {dayjs(item.createdAt).fromNow()}
          </Text>
        </Pressable>
      </View>

      <Pressable onPress={() => deleteDocument(item.id)}>
        <Ionicons
          name="trash-outline"
          size={15}
          color="red"
          style={{ marginLeft: "auto", opacity: 0.5 }}
        />
      </Pressable>
    </View>
  );
};

export default Documents;
