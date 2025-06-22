import React from "react";
import { View, StyleSheet, ScrollView, SafeAreaView } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import GenericCard, { CardData } from "./CardWithIcon";

const WorkoutScreen = () => {
  const workoutCards: CardData[] = [
    {
      id: "1",
      title: "Full Body Burn",
      type: "Bodyweight",
      icon: <Ionicons name="barbell-outline" size={40} color="#fff" />,
      description: "Creative training using your bodyweight",
      gradientColors: ["#8B5CF6", "#A855F7", "#C084FC"],
    },
    {
      id: "2",
      title: "Strength Training",
      type: "Weights",
      icon: <Ionicons name="fitness-outline" size={40} color="#fff" />,
      description: "Classic exercises including weights",
      gradientColors: ["#06B6D4", "#0891B2", "#0E7490"],
    },
    {
      id: "3",
      title: "Cardio Blast",
      type: "Cardio",
      icon: <Ionicons name="flame-outline" size={40} color="#fff" />,
      description: "Sweat and burn those calories",
      gradientColors: ["#F97316", "#EA580C", "#DC2626"],
    },
  ];

  const handleCardPress = (data: CardData) => {
    console.log("Pressed workout:", data.title);
    // Navigate or trigger action
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={{ padding: 10 }}>
          {workoutCards.map((card) => (
            <GenericCard
              key={card.id}
              data={card}
              onPress={handleCardPress}
              style={{ marginBottom: 12 }}
            />
          ))}
        </View>
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
