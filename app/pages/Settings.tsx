import { Alert, StyleSheet, Text, View } from "react-native";
import React from "react";
import TodoApp from "@/screens/SimpleToDo";
import UIButton from "@/components/UIButton";
import { useAtom } from "jotai";
import { accessTokenAtom, userAtom } from "@/stores/SimpleStorage";
import { router } from "expo-router";
import { SvgUri } from "react-native-svg";
import VSpace from "@/components/VSpace";

const Settings = () => {
  const [user, setUser] = useAtom(userAtom);
  const [accessToken, setAccessToken] = useAtom(accessTokenAtom);

  const handleSignOut = () => {
    // Clear user data and access token
    //setUser(null);
    setAccessToken(null);
    router.replace("/(auth)/SignIn");
  };

  async function handleDeleteAccount(): Promise<void> {
    Alert.alert(
      "Delete Account",
      "Are you sure you want to delete your account? This action cannot be undone.",
      ["Yes", "No"].map((action) => ({
        text: action,
        onPress: () => {
          if (action === "Yes") {
            setUser(null);
            setAccessToken(null);

            // Redirect to sign-in page
            router.replace("/(auth)/SignIn");
          }
        },
        style: action === "Yes" ? "destructive" : "cancel",
      }))
    );

    // Clear user data and access token
  }
  return (
    <View className="flex-1 justify-center items-center bg-gray-50 px-5">
      <View className="flex-col items-center justify-center bg-blue-100 rounded-xl p-5 w-full">
        <SvgUri
          width="60"
          height="60"
          uri="https://www.svgrepo.com/show/526588/logout-3.svg"
        />
        <Text className="text-center text-gray-400 my-5 font-poppins">
          Logout from the app
        </Text>
        <UIButton
          className="bg-blue-500 p-4 rounded-md w-full mx-auto justify-center items-center shadow-md"
          title="Sign Out"
          onPress={() => handleSignOut()}
        />
      </View>
      <VSpace gap={56} />
      <View className="flex-col items-center justify-center bg-red-100 rounded-xl p-5 w-full mx-5">
        <SvgUri
          width="60"
          height="60"
          uri="https://www.svgrepo.com/show/526508/clipboard-remove.svg"
        />
        <Text className="text-center text-gray-400 my-5 font-poppins">
          Deleting your account will remove all your data. You will need to
          re-register again
        </Text>
        <UIButton
          className="bg-red-500 p-4 rounded-md w-full mx-auto justify-center items-center shadow-md"
          title="Delete Account"
          onPress={() => handleDeleteAccount()}
        />
        <VSpace gap={10} />
      </View>
    </View>
  );
};

export default Settings;
