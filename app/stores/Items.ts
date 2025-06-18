import { atomWithStorage } from "jotai/utils";
import { nanoid } from "nanoid";
import { useAtom } from "jotai";

export type Item = {
  id: string;
  title: string;
  description: string;
  timestamp: number;
};

const itemsAtom = atomWithStorage<Item[]>("items", []);

export const useItems = () => {
  const [items, setItems] = useAtom(itemsAtom);

  const addItem = (title: string, description: string = "") => {
    setItems([
      ...items,
      {
        id: nanoid(),
        title,
        description,
        timestamp: Date.now(),
      },
    ]);
  };

  const updateItem = (id: string, updates: Partial<Omit<Item, "id">>) => {
    setItems(
      items.map((item) => (item.id === id ? { ...item, ...updates } : item))
    );
  };

  const deleteItem = (id: string) => {
    setItems(items.filter((item) => item.id !== id));
  };

  return {
    items,
    addItem,
    updateItem,
    deleteItem,
  };
};
