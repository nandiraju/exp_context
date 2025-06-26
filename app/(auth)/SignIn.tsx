import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  KeyboardAvoidingView,
  Platform,
  Image,
  ActivityIndicator,
  Alert,
} from "react-native";
import IconInput from "@/components/IconInput";
import Button from "@/components/UIButton";
import LinkText from "./LinkText";
import { useRouter } from "expo-router";
import { useAtom } from "jotai";
import { accessTokenAtom } from "@/stores/SimpleStorage";

const SignInScreen = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [accessToken, setAccessToken] = useAtom(accessTokenAtom);

  // ✅ Redirect if already signed in
  useEffect(() => {
    if (accessToken) {
      router.replace("/pages");
    }
  }, [accessToken]);

  const signIn = async () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email || !password) {
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

    setLoading(true);

    try {
      const response = await fetch(
        "https://mobile-backend-jpqx.vercel.app/api/auth/login",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email, password }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Sign in failed");
      }

      // Store access token in global state
      if (data?.token) {
        setAccessToken(data.token);
        router.replace("/pages"); // or your authenticated screen
      } else {
        throw new Error("No access token returned");
      }
    } catch (error: any) {
      Alert.alert("Sign In Failed", error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      className="flex-1"
    >
      <View className="flex-1 justify-center items-center bg-snow gap-2 px-4">
        <Image
          source={{
            uri: "https://images.pexels.com/photos/5870534/pexels-photo-5870534.jpeg",
          }}
          className="rounded-full mb-5 shadow-2xl"
          resizeMode="cover"
          style={{ width: 100, height: 100 }}
        />

        <Text className="mb-5 font-bold text-xl">Sign In</Text>

        <IconInput
          placeholder="Email"
          iconName="mail"
          iconSize={20}
          value={email}
          onChangeText={setEmail}
          style={{ width: "80%", height: 50 }}
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

        {loading ? (
          <ActivityIndicator size="large" color="#007AFF" />
        ) : (
          <Button title="Sign In" onPress={signIn} />
        )}

        <LinkText route="/SignUp" text="Don't have an account? Sign up here" />

        <LinkText
          route="/ForgotPassword"
          text="Forgot password? Click here to reset it"
          className="text-red-500 text-md mt-4 text-center font-bold"
        />
      </View>
    </KeyboardAvoidingView>
  );
};

export default SignInScreen;
