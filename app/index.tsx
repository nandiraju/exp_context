import { useEffect } from "react";
import { Pressable, Text, View } from "react-native";
import { useNotes } from "./context/NotesContext";

export default function Index() {
  const { notes, upsertNote } = useNotes();

  useEffect(() => {
    // upsertNote({
    //   id: "1",
    //   title: "First Note",
    //   description: "This is the first note.",
    //   date: new Date().toISOString(),
    // });
    console.log("Notes loaded:", notes);
  }, []);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Edit app/index.tsx to edit this screen.</Text>
      <Text>Notes Count: {notes.length}</Text>
      <View>
        {notes.map((note) => (
          <Text key={note.id}>
            {note.id} - {note.title}
          </Text>
        ))}
      </View>
      <Pressable
        onPress={() => {
          upsertNote({
            id: String(Date.now()),
            title: `Note ${notes.length + 1}`,
            description: `This is note number ${notes.length + 1}.`,
            date: new Date().toISOString(),
          });
        }}
        style={{ padding: 10, backgroundColor: "#ccc", marginTop: 20 }}
      >
        <Text>Add Note</Text>
      </Pressable>
    </View>
  );
}
