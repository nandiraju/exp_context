import React from "react";
import { Pressable, Text, PressableProps } from "react-native";

type ButtonProps = PressableProps & {
  title: string;
  className?: string;
  textClassName?: string;
};

const Button = ({
  onPress,
  title,
  className = "bg-blue-500 p-4 rounded-md w-[200px] mx-auto justify-center items-center shadow-md",
  textClassName = "text-cyan-100 text-md font-poppins text-center",
  ...props
}: ButtonProps) => {
  return (
    <Pressable onPress={onPress} className={className} {...props}>
      <Text className={textClassName}>{title}</Text>
    </Pressable>
  );
};

export default Button;
