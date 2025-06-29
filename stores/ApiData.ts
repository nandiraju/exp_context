import { atom } from "jotai";

export const newsAtom = atom(async () => {
  try {
    const res = await fetch(
      "https://us-central1-nandiraju-api.cloudfunctions.net/app/news?source=bing&q=genomics+cancer"
    );
    if (!res.ok) throw new Error("Failed to fetch todos");
    return await res.json(); // will be an array of todos
  } catch (error) {
    console.error("Error fetching news:", error);
    throw error;
  }
});
