import { Alert, StyleSheet, Text, View } from "react-native";
import React from "react";
import TodoApp from "@/screens/SimpleToDo";
import UIButton from "@/components/UIButton";
import { useAtom } from "jotai";
import { accessTokenAtom, userAtom } from "@/stores/SimpleStorage";
import { router } from "expo-router";
import { SvgUri } from "react-native-svg";
import VSpace from "@/components/VSpace";
import { BG_COLOR } from "@/helpers/Constants";

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
    <View
      className="flex-1 justify-center items-center bg-gray-50 px-5"
      style={{ backgroundColor: BG_COLOR }}
    >
      <View className="flex-col justify-center items-center bg-white p-5 rounded-xl w-full">
        <SvgUri
          width="60"
          height="60"
          uri="https://www.svgrepo.com/show/526588/logout-3.svg"
        />
        <Text className="my-5 font-poppins text-gray-400 text-center">
          Logout from the app
        </Text>
        <UIButton
          className="justify-center items-center bg-blue-500 shadow-md mx-auto p-4 rounded-md w-full"
          title="Sign Out"
          onPress={() => handleSignOut()}
        />
      </View>
      <VSpace gap={56} />
      <View className="flex-col justify-center items-center bg-white mx-5 p-5 rounded-xl w-full">
        <SvgUri
          width="60"
          height="60"
          uri="https://www.svgrepo.com/show/526508/clipboard-remove.svg"
        />
        <Text className="my-5 font-poppins text-gray-400 text-center">
          Deleting your account will remove all your data. You will need to
          re-register again
        </Text>
        <UIButton
          className="justify-center items-center bg-red-500 shadow-md mx-auto p-4 rounded-md w-full"
          title="Delete Account"
          onPress={() => handleDeleteAccount()}
        />
        <VSpace gap={10} />
      </View>
    </View>
  );
};

export default Settings;
