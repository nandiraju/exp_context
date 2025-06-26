import React, { useState } from "react";
import {
  View,
  Text,
  KeyboardAvoidingView,
  Platform,
  ActivityIndicator,
  Alert,
} from "react-native";
import IconInput from "@/components/IconInput";
import Button from "@/components/UIButton";
import LinkText from "./LinkText";
import { useRouter } from "expo-router";
import { SvgUri } from "react-native-svg";

const SignUpScreen = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [vpassword, setVPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const createUser = async (email: string, password: string) => {
    const response = await fetch(
      "https://mobile-backend-jpqx.vercel.app/api/auth/signup",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          password,
          firstName: "fName",
          lastName: "lName",
        }),
      }
    );

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || "Signup failed");
    }

    return data;
  };

  const signUp = async () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email || !password || !vpassword) {
      Alert.alert("Error", "Please fill in all fields.");
      return;
    }

    if (!emailRegex.test(email)) {
      Alert.alert("Error", "Please enter a valid email address.");
      return;
    }

    if (password.length < 6) {
      Alert.alert("Error", "Password should be at least 6 characters.");
      return;
    }

    if (password !== vpassword) {
      Alert.alert("Error", "Passwords do not match.");
      return;
    }

    setLoading(true);
    try {
      const user = await createUser(email, password);
      console.log("User created:", user);
      router.replace("/pages");
    } catch (error: any) {
      console.error(error);
      Alert.alert("Sign up failed", error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      className="flex-1"
    >
      <View className="flex-1 justify-center items-center bg-snow gap-2">
        <SvgUri
          width="100"
          height="100"
          uri="https://www.svgrepo.com/show/223045/account.svg"
        />
        <Text className="mb-5 font-bold text-xl">Sign up</Text>

        <IconInput
          placeholder="Email"
          iconName="mail"
          iconSize={20}
          style={{ width: "80%", height: 50 }}
          value={email}
          onChangeText={setEmail}
        />

        <IconInput
          iconName="security"
          iconSize={20}
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          style={{ width: "80%", height: 50 }}
        />

        <IconInput
          iconName="security"
          iconSize={20}
          placeholder="Verify Password"
          value={vpassword}
          onChangeText={setVPassword}
          secureTextEntry
          style={{ width: "80%", height: 50 }}
        />

        {loading ? (
          <ActivityIndicator size="large" color="#007AFF" />
        ) : (
          <Button title="Sign Up" onPress={signUp} />
        )}

        <LinkText
          route="/SignIn"
          text="Already have an account? Sign in here"
        />
      </View>
    </KeyboardAvoidingView>
  );
};

export default SignUpScreen;
