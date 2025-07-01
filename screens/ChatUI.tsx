import { userAtom } from "@/stores/SimpleStorage";
import { Ionicons } from "@expo/vector-icons";
import { useAtom } from "jotai";
import React, { useState, useRef, useCallback } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  Alert,
} from "react-native";

const ChatUI = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const flatListRef = useRef(null);

  const [user] = useAtom(userAtom); // Assuming you have a userAtom to get user info

  const scrollToBottom = () => {
    flatListRef.current?.scrollToEnd({ animated: true });
  };

  const sendMessage = async () => {
    if (!input.trim()) return;

    const timestamp = Date.now().toString();

    const userMessage = {
      id: timestamp,
      text: input,
      sender: "user",
    };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");

    // Add typing indicator
    const typingMessage = {
      id: `${timestamp}-typing`,
      text: "Typing...",
      sender: "bot",
      isTyping: true,
    };
    setMessages((prev) => [...prev, typingMessage]);

    try {
      const response = await fetch(
        `https://n8n.expertopinion.me/webhook/83e0e2d4-bfa1-4f9e-b0e7-1eef7a1f7cf3?patient_id=${encodeURIComponent(
          user.email
        )}&question=${encodeURIComponent(input)}`,
        {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        }
      );

      const data = await response.json();

      const botMessage = {
        id: `${timestamp}-bot`,
        text: data[0]?.output || "No response from server",
        sender: "bot",
      };

      setMessages(
        (prev) =>
          prev
            .filter((msg) => msg.id !== typingMessage.id) // remove typing
            .concat(botMessage) // add actual bot response
      );
    } catch (err) {
      console.error("Error sending message:", err);

      setMessages((prev) =>
        prev
          .filter((msg) => msg.id !== typingMessage.id)
          .concat({
            id: `${timestamp}-error`,
            text: "Error contacting server.",
            sender: "bot",
          })
      );
    }
  };

  const renderItem = useCallback(
    ({ item }) => (
      <View
        style={[
          styles.message,
          item.sender === "user" ? styles.user : styles.bot,
        ]}
      >
        <Text style={{ fontStyle: item.isTyping ? "italic" : "normal" }}>
          {item.text}
        </Text>
        {item.sender === "bot" && !item.isTyping && (
          <Pressable
            onPress={() => {
              Alert.alert("Thanks for the feedback.");
            }}
          >
            <View className="flex-row items-center justify-end mt-2 w-full rounded-full bg-white px-4 py-2">
              <Ionicons name="flag-outline" size={20} color="red" />
              <Text className="ml-2 text-red-500">Flag this response</Text>
            </View>
          </Pressable>
        )}
      </View>
    ),
    []
  );

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.select({ ios: "padding", android: undefined })}
      keyboardVerticalOffset={80}
    >
      <FlatList
        ref={flatListRef}
        data={messages}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={styles.list}
        onContentSizeChange={scrollToBottom}
        keyboardShouldPersistTaps="handled"
        initialNumToRender={10}
        maxToRenderPerBatch={20}
        removeClippedSubviews={true}
        showsVerticalScrollIndicator={false}
      />

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Type a message"
          value={input}
          onChangeText={setInput}
          onSubmitEditing={sendMessage}
          returnKeyType="send"
        />
        <TouchableOpacity onPress={sendMessage} style={styles.sendButton}>
          <Text style={{ fontSize: 24, color: "#007AFF" }}>➤</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

export default ChatUI;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  list: {
    padding: 10,
    paddingBottom: 20,
  },
  message: {
    marginVertical: 4,
    padding: 10,
    borderRadius: 12,
    maxWidth: "80%",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
  },
  user: {
    backgroundColor: "#DCF8C6",
    alignSelf: "flex-end",
  },
  bot: {
    backgroundColor: "#ECECEC",
    alignSelf: "flex-start",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderTopWidth: 1,
    borderColor: "#ddd",
    backgroundColor: "#fafafa",
  },
  input: {
    flex: 1,
    backgroundColor: "#eee",
    paddingVertical: 10,
    paddingHorizontal: 14,
    borderRadius: 20,
    fontSize: 16,
    marginRight: 8,
  },
  sendButton: {
    padding: 8,
  },
});
