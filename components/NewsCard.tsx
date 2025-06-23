import * as WebBrowser from "expo-web-browser";
import { useAtom } from "jotai";
import React from "react";
import { FlatList, Pressable, Text, Image } from "react-native";
import { newsAtom } from "@/stores/ApiData";

const NewsCard = () => {
  const [news, setnews] = useAtom(newsAtom);

  if (news.length === 0) {
    return (
      <Text className="text-center text-gray-400 mt-10">
        No news available.
      </Text>
    );
  }

  const handleClick = (url: string) => {
    WebBrowser.openBrowserAsync(url);
  };

  return (
    <>
      <FlatList
        data={news}
        keyExtractor={(item, index) => item.id?.toString() || index.toString()}
        renderItem={({ item }) => (
          <Pressable
            onPress={() => handleClick(item.link)}
            className="bg-white m-5 p-4 border border-gray-50 rounded-xl"
          >
            <Text className="text-semibold text-lg text-bold">
              {item.title}
            </Text>
            {item.image && (
              <Image
                source={{ uri: item.image }}
                className="mt-2 rounded-xl w-[100px] h-[100px]"
                resizeMode="cover"
              />
            )}
            <Text className="mt-2 text-gray-500 text-sm">{item.content}</Text>
          </Pressable>
        )}
        // ListEmptyComponent={
        //   <Text className="text-center text-gray-400 mt-10">
        //     No news available.
        //   </Text>
        // }
        scrollEnabled={false}
      />
    </>
  );
};

export default NewsCard;
