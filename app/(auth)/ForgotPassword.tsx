import {
  View,
  Text,
  KeyboardAvoidingView,
  Platform,
  Alert,
} from "react-native";
import React, { useState } from "react";
// import IconInput from "../components/IconInput";
import IconInput from "../../components/IconInput";
import { auth } from "../../FirebaseConfig";
import {
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { router, useRouter } from "expo-router";
import Button from "../../components/UIButton";
import LinkText from "./LinkText";
import { SvgUri } from "react-native-svg";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");

  const sendLink = async () => {
    if (!email) {
      Alert.alert("Error", "Please enter your email address.");
      return;
    }
    // Simple email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      Alert.alert("Error", "Please enter a valid email address.");
      return;
    }

    Alert.alert(
      "Password Reset",
      "A reset request has been sent. Our support team will reachout to you shortly.",
      [{ text: "OK", onPress: () => router.back() }]
    );

    // try {
    //   await sendPasswordResetEmail(auth, email);

    // } catch (error: any) {
    //   console.log(error);
    //   alert("Sign in failed: " + error.message);
    // }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      className="flex-1"
    >
      <View className="flex-1 justify-center items-center bg-snow gap-2 ">
        <SvgUri
          width="100"
          height="100"
          uri="https://www.svgrepo.com/show/246833/key-password.svg"
        />
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
