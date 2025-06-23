import React, { use } from "react";
import { View, StyleSheet, ScrollView, SafeAreaView } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import GenericCard, { CardData } from "./CardWithIcon";
import { router } from "expo-router";

const WorkoutScreen = () => {
  const workoutCards: CardData[] = [
    {
      id: "1",
      title: "Documents",
      type: "Bodyweight",
      icon: <Ionicons name="document-outline" size={40} color="#fff" />,
      description: "Upload your documents ",
      gradientColors: ["#8B5CF6", "#A855F7", "#C084FC"],
    },
    {
      id: "2",
      title: "Reminders",
      type: "Weights",
      icon: <Ionicons name="notifications-outline" size={40} color="#fff" />,
      description: "Create or enquire about reminders",
      gradientColors: ["#06B6D4", "#0891B2", "#0E7490"],
    },
    {
      id: "3",
      title: "Medications",
      type: "Cardio",
      icon: <Ionicons name="medkit-outline" size={40} color="#fff" />,
      description: "Add and track your medications",
      gradientColors: ["#F97316", "#EA580C", "#DC2626"],
    },
  ];

  const handleCardPress = (data: CardData) => {
    console.log("Pressed workout:", data.title);
    // Navigate or trigger action
    switch (data.id) {
      case "1":
        router.push("/pages/Documents");
        break;
      case "2":
        router.push("/pages/Reminders");
        break;
      case "3":
        router.push("/pages/Medications");
        break;
      default:
        break;
    }
  };

  return (
    <View style={{ padding: 5 }}>
      {workoutCards.map((card) => (
        <GenericCard
          key={card.id}
          data={card}
          onPress={handleCardPress}
          style={{ marginBottom: 12 }}
        />
      ))}
    </View>
  );
};

export default WorkoutScreen;
