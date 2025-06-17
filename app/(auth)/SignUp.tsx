import { View, Text, KeyboardAvoidingView, Platform } from "react-native";
import React, { useState } from "react";
import IconInput from "../components/IconInput";
import { auth } from "../../FirebaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "expo-router";
import Button from "../components/UIButton";
import { LinkText } from "./LinkText";

const SignUpScreen = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [vpassword, setVPassword] = useState("");

  const signUp = async () => {
    try {
      const user = await createUserWithEmailAndPassword(auth, email, password);
      if (user) router.replace("/screens/Welcome");
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
          placeholder="password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          style={{ width: "80%", height: 50 }}
        />
        <IconInput
          iconName="security"
          iconSize={20}
          placeholder="verify password"
          value={vpassword}
          onChangeText={setVPassword}
          secureTextEntry
          style={{ width: "80%", height: 50 }}
        />

        <Button title="Sign Up" onPress={signUp} />
        <LinkText route="/SignIn" text="Already have account? sign in here" />
      </View>
    </KeyboardAvoidingView>
  );
};

export default SignUpScreen;
