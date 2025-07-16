// components/EmptyState.tsx
import React from "react";
import { View, Text } from "react-native";
import LottieView from "lottie-react-native";

interface EmptyStateProps {
  lottieSource: any; // should be require(...)
  message: string;
  speed?: number;
  height?: number;
  width?: number;
}

const EmptyState: React.FC<EmptyStateProps> = ({
  lottieSource,
  message,
  speed = 0.5,
  height = 200,
  width = 200,
}) => {
  return (
    <View className="justify-center items-center px-4 h-[70vh]">
      <LottieView
        autoPlay
        speed={speed}
        style={{ width, height }}
        source={lottieSource}
      />
      <Text className="font-poppins text-gray-500 text-lg text-center mt-2">
        {message}
      </Text>
    </View>
  );
};

export default EmptyState;
