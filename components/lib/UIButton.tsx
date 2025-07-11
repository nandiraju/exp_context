import React from "react";
import {
  TouchableOpacity,
  Text,
  View,
  StyleSheet,
  ViewStyle,
  TextStyle,
  ActivityIndicator,
  GestureResponderEvent,
} from "react-native";
import type { IconProps } from "@expo/vector-icons/build/createIconSet";

type UIButtonProps = {
  text?: string;
  icon?: React.ComponentType<IconProps<any>>;
  iconName?: string;
  iconPosition?: "left" | "right" | "top" | "bottom";
  iconSize?: number;
  onPress: (event: GestureResponderEvent) => void;
  filled?: boolean;
  color?: string;
  textColor?: string;
  iconColor?: string;
  style?: ViewStyle;
  textStyle?: TextStyle;
  disabled?: boolean;
  loading?: boolean;
  elevated?: boolean;
  fullWidth?: boolean;
  rounded?: boolean;
};

export default function UIButton({
  text,
  icon: Icon,
  iconName,
  iconPosition = "left",
  iconSize = 20,
  onPress,
  filled = true,
  color = "#007AFF",
  textColor,
  iconColor,
  style,
  textStyle,
  disabled = false,
  loading = false,
  elevated = false,
  fullWidth = false,
  rounded = true,
}: UIButtonProps) {
  const backgroundColor = filled ? color : "transparent";
  const borderColor = color;
  const resolvedTextColor = textColor || (filled ? "#fff" : color);
  const resolvedIconColor = iconColor || resolvedTextColor;
  const borderRadius = rounded ? 999 : 8;
  const isVertical = iconPosition === "top" || iconPosition === "bottom";

  const renderContent = () => {
    const iconOrLoader = loading ? (
      <ActivityIndicator
        key="spinner"
        color={resolvedIconColor}
        style={styles.icon}
      />
    ) : Icon && iconName ? (
      <Icon
        key="icon"
        name={iconName}
        size={iconSize}
        color={resolvedIconColor}
        style={styles.icon}
      />
    ) : null;

    const textElement = text ? (
      <Text
        key="text"
        style={[styles.text, { color: resolvedTextColor }, textStyle]}
      >
        {text}
      </Text>
    ) : null;

    const children =
      iconPosition === "right" || iconPosition === "bottom"
        ? [textElement, iconOrLoader]
        : [iconOrLoader, textElement];

    return children.filter(Boolean);
  };

  return (
    <TouchableOpacity
      style={[
        styles.button,
        {
          backgroundColor,
          borderColor,
          borderRadius,
          opacity: disabled || loading ? 0.5 : 1,
          width: fullWidth ? "100%" : "auto",
          elevation: elevated ? 4 : 0,
          shadowColor: elevated ? "#000" : undefined,
          shadowOffset: elevated ? { width: 0, height: 2 } : undefined,
          shadowOpacity: elevated ? 0.2 : undefined,
          shadowRadius: elevated ? 4 : undefined,
        },
        style,
      ]}
      onPress={onPress}
      disabled={disabled || loading}
    >
      <View
        style={[
          styles.content,
          {
            flexDirection: isVertical ? "column" : "row",
          },
        ]}
      >
        {renderContent()}
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    borderWidth: 1,
    paddingHorizontal: 16,
    paddingVertical: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  content: {
    alignItems: "center",
    justifyContent: "center",
  },
  icon: {
    margin: 4,
  },
  text: {
    fontSize: 14,
    textAlign: "center",
    fontFamily: "PoppinsRegular", // Ensure this matches your Tailwind config
  },
});
