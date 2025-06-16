import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { createContext, useContext, useEffect, useState } from "react";

export interface Note {
  id: string;
  title: string;
  description: string;
  date: string;
}

interface NoteContextType {
  notes: Note[];
  upsertNote: (note: Note) => void;
  deleteNote: (id: string) => void;
  isLoading: boolean;
}

const NoteContext = createContext<NoteContextType | undefined>(undefined);

export const NoteProvider = ({ children }: { children: React.ReactNode }) => {
  const [notes, setNotes] = useState<Note[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // Load notes on mount
  useEffect(() => {
    const loadNotes = async () => {
      try {
        // console.log("Loading notes from AsyncStorage...");
        const stored = await AsyncStorage.getItem("notes");
        // console.log("Raw stored data:", stored);

        if (stored) {
          const parsedNotes = JSON.parse(stored);
          //   console.log("Parsed notes:", parsedNotes);
          setNotes(parsedNotes);
        } else {
          console.log("No stored notes found");
        }
      } catch (err) {
        console.error("Failed to load notes from storage", err);
      } finally {
        setIsLoading(false);
      }
    };

    loadNotes();
  }, []);

  const saveNotes = async (notesToSave: Note[]) => {
    try {
      //  console.log("Saving notes to AsyncStorage:", notesToSave);
      await AsyncStorage.setItem("notes", JSON.stringify(notesToSave));
      // console.log("Notes saved successfully");
    } catch (err) {
      console.error("Failed to save notes", err);
    }
  };

  const upsertNote = (note: Note) => {
    console.log("Upserting note:", note);
    const existingIndex = notes.findIndex((n) => n.id === note.id);

    let updated: Note[];
    if (existingIndex >= 0) {
      // Update existing note
      //console.log("Updating existing note at index:", existingIndex);
      updated = notes.map((n) => (n.id === note.id ? note : n));
    } else {
      // Add new note
      console.log("Adding new note");
      updated = [...notes, note];
    }

    //console.log("Updated notes array:", updated);
    setNotes(updated);
    saveNotes(updated);
  };

  const deleteNote = (id: string) => {
    console.log("Deleting note with id:", id);
    const updated = notes.filter((note) => note.id !== id);
    //console.log("Notes after deletion:", updated);
    setNotes(updated);
    saveNotes(updated);
  };

  return (
    <NoteContext.Provider value={{ notes, upsertNote, deleteNote, isLoading }}>
      {children}
    </NoteContext.Provider>
  );
};

export const useNotes = () => {
  const context = useContext(NoteContext);
  if (!context) {
    throw new Error("useNotes must be used within a NoteProvider");
  }
  return context;
};
