// components/UIInput.tsx
import React from "react";
import {
  TextInput,
  View,
  StyleSheet,
  TextStyle,
  ViewStyle,
} from "react-native";
import type { IconProps } from "@expo/vector-icons/build/createIconSet";

type UIInputProps = {
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
  icon?: React.ComponentType<IconProps<any>>;
  iconName?: string;
  iconSize?: number;
  iconColor?: string;
  iconPosition?: "left" | "right";
  inputStyle?: TextStyle;
  containerStyle?: ViewStyle;
  filled?: boolean;
  color?: string;
  textColor?: string;
  rounded?: boolean;
  secureTextEntry?: boolean;
  multiline?: boolean;
};

export default function UIInput({
  value,
  onChangeText,
  placeholder,
  icon: Icon,
  iconName,
  iconSize = 20,
  iconColor = "#999",
  iconPosition = "left",
  inputStyle,
  containerStyle,
  filled = false,
  color = "#ccc",
  textColor = "#000",
  rounded = true,
  secureTextEntry = false,
  multiline = false,
}: UIInputProps) {
  const borderRadius = rounded ? 999 : 8;
  const backgroundColor = filled ? color : "transparent";
  const borderColor = filled ? color : "#ccc";

  const iconElement =
    Icon && iconName ? (
      <Icon
        name={iconName}
        size={iconSize}
        color={iconColor}
        style={styles.icon}
      />
    ) : null;

  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor,
          borderColor,
          borderRadius,
        },
        containerStyle,
      ]}
    >
      {iconPosition === "left" && iconElement}
      <TextInput
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor="#999"
        secureTextEntry={secureTextEntry}
        multiline={multiline}
        style={[
          styles.input,
          {
            color: textColor,
          },
          inputStyle,
        ]}
      />
      {iconPosition === "right" && iconElement}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  input: {
    flex: 1,
    fontSize: 16,
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  icon: {
    marginHorizontal: 4,
  },
});
