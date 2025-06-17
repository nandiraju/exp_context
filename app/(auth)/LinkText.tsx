import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";

type LinkTextProps = {
  route: string;
  text: string;
  className?: string;
};

export const LinkText = ({
  route,
  text,
  className = "text-gray-800 text-md mt-4 text-center",
}: LinkTextProps) => {
  const router = useRouter();

  return (
    <TouchableOpacity onPress={() => router.push(route as any)}>
      <Text className={className}>{text}</Text>
    </TouchableOpacity>
  );
};
