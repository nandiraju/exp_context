import React from "react";
import { View, StyleSheet, ScrollView, SafeAreaView } from "react-native";
import { MaterialIcons, FontAwesome5, Ionicons } from "@expo/vector-icons";
import WorkoutCard from "./MenuCard";

// Icon components using Expo vector icons
const BodyweightIcon = () => (
  <MaterialIcons name="accessibility" size={24} color="#FFFFFF" />
);

const WeightsIcon = () => (
  <FontAwesome5 name="dumbbell" size={20} color="#FFFFFF" />
);

const CardioIcon = () => <Ionicons name="heart" size={22} color="#FFFFFF" />;

const WorkoutScreen = () => {
  const workouts = [
    {
      id: "1",
      title: "Full Body Blast",
      type: "Bodyweight",
      duration: "30 min",
      difficulty: "Intermediate",
      icon: <BodyweightIcon />,
    },
    {
      id: "2",
      title: "Strength Training",
      type: "Weights",
      duration: "45 min",
      difficulty: "Advanced",
      icon: <WeightsIcon />,
    },
    {
      id: "3",
      title: "Cardio Challenge",
      type: "Cardio",
      duration: "25 min",
      difficulty: "Beginner",
      icon: <CardioIcon />,
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        {workouts.map((workout) => (
          <WorkoutCard key={workout.id} workout={workout} />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F3F4F6",
  },
  scrollView: {
    flex: 1,
    paddingTop: 20,
  },
});

export default WorkoutScreen;
