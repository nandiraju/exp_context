import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ViewStyle,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

interface Workout {
  id: string;
  title: string;
  type: "Bodyweight" | "Weights" | "Cardio";
  duration: string;
  difficulty: string;
  icon: React.ReactNode;
}

interface WorkoutCardProps {
  workout: Workout;
  onPress?: (workout: Workout) => void;
  style?: ViewStyle;
}

const WorkoutCard: React.FC<WorkoutCardProps> = ({
  workout,
  onPress,
  style,
}) => {
  // Define gradient colors based on workout type
  const getGradientColors = (type: string): string[] => {
    switch (type) {
      case "Bodyweight":
        return ["#8B5CF6", "#A855F7", "#C084FC"];
      case "Weights":
        return ["#06B6D4", "#0891B2", "#0E7490"];
      case "Cardio":
        return ["#F97316", "#EA580C", "#DC2626"];
      default:
        return ["#6B7280", "#4B5563", "#374151"];
    }
  };

  const getDescription = (type: string): string => {
    switch (type) {
      case "Bodyweight":
        return "Creative training using your bodyweight";
      case "Weights":
        return "Classic exercises including weights";
      case "Cardio":
        return "Sweat and burn those calories";
      default:
        return "Complete workout routine";
    }
  };

  return (
    <TouchableOpacity
      style={[styles.container, style]}
      onPress={() => onPress?.(workout)}
      activeOpacity={0.8}
    >
      <LinearGradient
        colors={getGradientColors(workout.type)}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.gradient}
      >
        <View style={styles.content}>
          <View style={styles.iconContainer}>{workout.icon}</View>
          <View style={styles.textContainer}>
            <Text style={styles.title}>{workout.title}</Text>
            <Text style={styles.description}>
              {getDescription(workout.type)}
            </Text>
            <View style={styles.metaContainer}>
              <Text style={styles.metaText}>{workout.duration}</Text>
              <Text style={styles.metaDot}>•</Text>
              <Text style={styles.metaText}>{workout.difficulty}</Text>
            </View>
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
    shadowOffset: {
      width: 0,
      height: 2,
    },
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
    width: 40,
    height: 40,
    borderRadius: 20,
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
  },
  description: {
    fontSize: 14,
    color: "rgba(255, 255, 255, 0.8)",
    lineHeight: 18,
    marginBottom: 8,
  },
  metaContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  metaText: {
    fontSize: 12,
    color: "rgba(255, 255, 255, 0.7)",
    fontWeight: "500",
  },
  metaDot: {
    fontSize: 12,
    color: "rgba(255, 255, 255, 0.7)",
    marginHorizontal: 8,
  },
});

export default WorkoutCard;
