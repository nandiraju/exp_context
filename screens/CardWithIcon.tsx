import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ViewStyle,
  StyleProp,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export interface CardData {
  id: string;
  title: string;
  type: string;
  icon: React.ReactNode;
  description?: string;
  gradientColors?: string[];
}

interface GenericCardProps {
  data: CardData;
  onPress?: (data: CardData) => void;
  style?: StyleProp<ViewStyle>;
}

const GenericCard: React.FC<GenericCardProps> = ({ data, onPress, style }) => {
  const {
    title,
    icon,
    type,
    gradientColors = ["#6B7280", "#374151"], // fallback gradient
    description = "No description available", // fallback description
  } = data;

  return (
    <TouchableOpacity
      style={[styles.container, style]}
      onPress={() => onPress?.(data)}
      activeOpacity={0.8}
    >
      <LinearGradient
        colors={gradientColors}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.gradient}
      >
        <View style={styles.content}>
          <View style={styles.iconContainer}>{icon}</View>
          <View style={styles.textContainer}>
            <Text style={styles.title}> {title}</Text>
            <Text style={styles.description}>{description}</Text>
          </View>
        </View>
      </LinearGradient>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 16,
    overflow: "hidden",
    elevation: 4,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  gradient: {
    flex: 1,
  },
  content: {
    flexDirection: "row",
    alignItems: "center",
    padding: 20,
    minHeight: 100,
  },
  iconContainer: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 16,
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: "600",
    color: "#FFFFFF",
    marginBottom: 4,
    fontFamily: "PoppinsSemiBold", // Ensure this matches your Tailwind config
  },
  description: {
    fontSize: 16,
    color: "rgba(255, 255, 255, 0.8)",
    lineHeight: 17,
    fontFamily: "PoppinsRegular", // Ensure this matches your Tailwind config
  },
});

export default GenericCard;
