import { FlatList, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useNotes } from "../context/NotesContext";
import { Alert } from "react-native";
import { useAtom } from "jotai";
import { counterAtom } from "../stores/Counter";
import { useAtomValue } from "jotai";

const NotesList = () => {
  const { notes, deleteNote } = useNotes();

  const counter = useAtomValue(counterAtom);

  return (
    <View
      style={{
        flex: 1,
        padding: 10,
        backgroundColor: "dodgerblue",
        borderRadius: 20,
      }}
    >
      <FlatList
        data={notes}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              paddingVertical: 8,
            }}
          >
            <Text>
              {item.id} - {item.title}
            </Text>
            <Pressable
              onPress={() => {
                console.log("Delete pressed for", item.id);
                console.log("Counter from Note list ...:", counter);
                Alert.alert(
                  "Delete Note",
                  "Are you sure you want to delete this note?",
                  [
                    {
                      text: "Cancel",
                      style: "cancel",
                    },
                    {
                      text: "Delete",
                      style: "destructive",
                      onPress: () => deleteNote(item.id),
                    },
                  ],
                  { cancelable: true }
                );
                return;
                deleteNote(item.id);
              }}
            >
              <Text style={{ color: "red", marginRight: 16 }}>Delete</Text>
            </Pressable>
          </View>
        )}
      />
    </View>
  );
};

export default NotesList;

const styles = StyleSheet.create({});
