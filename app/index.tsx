import { useEffect } from "react";
import { Pressable, Text, View } from "react-native";
import { useNotes } from "./context/NotesContext";
import NotesList from "./components/NotesList";
import { useAtom } from "jotai";
import { counterAtom } from "./stores/Counter";
import IconInput from "./components/IconInput";
import Feather from "react-native-vector-icons/Feather";

export default function Index() {
  const { notes, upsertNote } = useNotes();

  const [counter, setCounter] = useAtom(counterAtom);

  useEffect(() => {
    // upsertNote({
    //   id: "1",
    //   title: "First Note",
    //   description: "This is the first note.",
    //   date: new Date().toISOString(),
    // });
    console.log("Notes loaded: counter value --> ", counter);
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
      <View
        style={{
          width: "100%",
          padding: 20,
          height: 300,
          backgroundColor: "#f5f5f5",
        }}
      >
        <NotesList />
      </View>
      <Pressable
        onPress={() => {
          setCounter((prev) => prev + 1);
          upsertNote({
            id: String(Date.now()),
            title: `Note ${notes.length + 1}`,
            description: `This is note number ${notes.length + 1}.`,
            date: new Date().toISOString(),
          });
        }}
        style={{ padding: 10, backgroundColor: "#f5f5f5", marginTop: 20 }}
      >
        {/* <Text>Add Note</Text> */}
        <IconInput
          iconComponent={Feather}
          iconName="search"
          style={{
            width: "70%",
            height: 60,
            fontSize: 20,
          }}
          /* other props */
        />
        <IconInput
          iconComponent={Feather}
          iconName="settings"
          style={{
            width: "70%",
            height: 60,
            fontSize: 20,
          }}
          /* other props */
        />
      </Pressable>
    </View>
  );
}
