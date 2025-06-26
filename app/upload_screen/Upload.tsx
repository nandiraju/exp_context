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

export default function UploadScreen() {
  const [uploading, setUploading] = useState(false);
  const [uploadStatus, setUploadStatus] = useState<string>("");

  const uploadFile = async (
    uri: string,
    fileName: string,
    mimeType: string
  ) => {
    try {
      setUploading(true);
      setUploadStatus("Uploading...");

      const formData = new FormData();
      formData.append("file", {
        uri,
        name: fileName,
        type: mimeType,
      } as any);

      const response = await fetch("https://eop.me", {
        method: "POST",
        body: formData,
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      if (response.ok) {
        const result = await response.text();
        setUploadStatus(`Upload successful: ${result}`);
        Alert.alert("Success", "File uploaded successfully!");
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
