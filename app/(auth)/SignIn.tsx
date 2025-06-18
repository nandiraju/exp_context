import {
  View,
  Text,
  KeyboardAvoidingView,
  Platform,
  Image,
} from "react-native";
import React, { useState } from "react";
import IconInput from "../components/IconInput";
import { auth } from "../../FirebaseConfig";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useRouter } from "expo-router";
import Button from "../components/UIButton";
import { LinkText } from "./LinkText";

const SignInScreen = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  router.replace("/screens"); // for development purposes, redirect to screens

  const signIn = async () => {
    try {
      const user = await signInWithEmailAndPassword(auth, email, password);
      if (user) router.replace("/screens");
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
        <Image
          source={{
            uri: "https://images.pexels.com/photos/5870534/pexels-photo-5870534.jpeg", // Example remote image
          }}
          className="rounded-full mb-5 shadow-2xl"
          resizeMode="cover"
          style={{
            width: 100,
            height: 100,
          }}
        />
        <Text className="mb-5  font-bold text-xl">Sign In</Text>

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
          placeholder="password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          style={{ width: "80%", height: 50 }}
        />

        <Button title="Sign In" onPress={signIn} />
        <LinkText route="/SignUp" text="Dont have an account? sign up here" />
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
