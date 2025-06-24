import { ScrollView, TouchableOpacity, Text, Button, View } from "react-native";
import React, { use, useEffect, useState } from "react";

import { HeadingDivider } from "@/components/HeadingDivider";
import ReminderForm from "@/components/reminders/ReminderForm";
import RemindersList from "@/components/reminders/RemindersList";

export default function Sandbox() {
  const [showForm, setShowForm] = useState(false);
  const handleFormSubmit = (data: { name: string }) => {
    console.log("Submitted:", data);
  };
  return (
    <View className="flex-1 bg-snow-50">
      <HeadingDivider iconName="albums-outline" title="Interact with OSakhi" />
      <RemindersList></RemindersList>

      {/* <Button title="Open Form" onPress={() => setShowForm(true)} /> */}

      {/* <ReminderForm
        visible={showForm}
        onClose={() => setShowForm(false)}
        onSubmit={handleFormSubmit}
        initialData={{
          title: "Initial title",
          description: "Initial description",
          date: "2023-10-01",
        }}
      /> */}
    </View>
  );
}
