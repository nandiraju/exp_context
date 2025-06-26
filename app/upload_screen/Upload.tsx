"use client";

import { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Alert,
  ScrollView,
} from "react-native";
import * as DocumentPicker from "expo-document-picker";
import IconInput from "@/components/IconInput";
import { documentsAtom, userAtom } from "@/stores/SimpleStorage";
import { useAtom } from "jotai";
import { randomUUID } from "expo-crypto";

export default function UploadScreen() {
  const [uploading, setUploading] = useState(false);
  const [uploadStatus, setUploadStatus] = useState<string>("");
  const [documentName, setDocumentName] = useState("");
  const [documents, setDocuments] = useAtom(documentsAtom);

  const [user] = useAtom(userAtom);

  const uploadFile = async (
    uri: string,
    fileName: string,
    mimeType: string
  ) => {
    try {
      setUploading(true);
      setUploadStatus("Uploading...");

      const id = randomUUID(); // unique identifier for the document

      const formData = new FormData();

      formData.append("file", {
        uri,
        name: fileName,
        type: mimeType,
      } as any);

      formData.append("patient_id", user?.email);
      formData.append("document_id", id);

      const response = await fetch(
        "https://n8n.expertopinion.me/webhook/d25c2dab-66b3-4823-aaf4-3aa61ffac930",
        {
          method: "POST",
          body: formData,
          headers: {
            Accept: "application/json",
          },
        }
      );

      if (response.ok) {
        const result = await response.text();
        setUploadStatus(`Upload successful: ${result}`);
        Alert.alert("Success", "File uploaded successfully!");
        // Once doc uploads, create a new document object
        setDocuments([
          ...documents,
          { name: documentName, uri, id, createdAt: new Date().toISOString() },
        ]);
        setDocumentName(""); // Clear the input field after upload
      } else {
        throw new Error(`Upload failed: ${response.status}`);
      }
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : "Upload failed";
      setUploadStatus(`Error: ${errorMessage}`);
      Alert.alert("Error", errorMessage);
    } finally {
      setUploading(false);
    }
  };

  const pickDocument = async () => {
    try {
      if (documentName.trim() === "") {
        Alert.alert("Error", "Please enter a title for the document.");
        return;
      }

      const result = await DocumentPicker.getDocumentAsync({
        type: "*/*",
        copyToCacheDirectory: true,
      });

      if (!result.canceled && result.assets[0]) {
        const asset = result.assets[0];
        await uploadFile(
          asset.uri,
          asset.name,
          asset.mimeType || "application/octet-stream"
        );
      }
    } catch (error) {
      Alert.alert("Error", "Failed to pick document");
    }
  };

  return (
    <View style={styles.container}>
      <IconInput
        placeholder="Enter a title for the document"
        iconName="upload-file"
        iconSize={20}
        style={{ width: "80%", height: 50 }}
        value={documentName}
        onChangeText={setDocumentName}
      />
      <TouchableOpacity
        style={[styles.button, uploading && styles.buttonDisabled]}
        onPress={pickDocument}
        disabled={uploading}
      >
        <Text style={styles.buttonText}>Pick Document</Text>
      </TouchableOpacity>
      {uploadStatus ? (
        <View style={styles.statusContainer}>
          <Text style={styles.statusText}>{uploadStatus}</Text>
        </View>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 40,
    color: "#333",
  },
  buttonContainer: {
    gap: 15,
  },
  button: {
    backgroundColor: "#007AFF",
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
  },
  buttonDisabled: {
    backgroundColor: "#ccc",
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "600",
  },
  statusContainer: {
    marginTop: 30,
    padding: 15,
    backgroundColor: "#f5f5f5",
    borderRadius: 8,
  },
  statusText: {
    fontSize: 14,
    color: "#333",
    textAlign: "center",
  },
});
