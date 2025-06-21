import {
  View,
  Text,
  KeyboardAvoidingView,
  Platform,
  Alert,
} from "react-native";
import React, { useState } from "react";
import IconInput from "../components/IconInput";
import { auth } from "../../FirebaseConfig";
import {
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useRouter } from "expo-router";
import Button from "../components/UIButton";
import LinkText from "./LinkText";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");

  const sendLink = async () => {
    try {
      await sendPasswordResetEmail(auth, email);
      Alert.alert(
        "Password Reset",
        "A reset link has been sent to your email.",
        [{ text: "OK", onPress: () => console.log("OK Pressed") }]
      );
    } catch (error: any) {
      console.log(error);
      alert("Sign in failed: " + error.message);
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      className="flex-1"
    >
      <View className="flex-1 justify-center items-center bg-snow gap-2 ">
        <Text className="mb-5 font-bold text-xl">Forgot Password</Text>

        <IconInput
          placeholder="Enter your email to reset password"
          iconName="mail"
          iconSize={20}
          style={{ width: "80%", height: 50 }}
          value={email}
          onChangeText={setEmail}
        />

        <Button title="Reset" onPress={sendLink} />
        {/* <LinkText route="/SignIn" text="Sign In here" /> */}
      </View>
    </KeyboardAvoidingView>
  );
};

export default ForgotPassword;
