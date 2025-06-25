import * as WebBrowser from "expo-web-browser";
import { useAtom } from "jotai";
import React from "react";
import { FlatList, Pressable, Text, Image, View } from "react-native";
import { newsAtom } from "@/stores/ApiData";

type NewsCardProps = {
  count: number;
};

const NewsCard = ({ count }: NewsCardProps) => {
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
        data={news.slice(0, count)} // Display only the first 5 news items
        keyExtractor={(item, index) => item.id?.toString() || index.toString()}
        renderItem={({ item }) => (
          <Pressable
            onPress={() => handleClick(item.link)}
            className="bg-white mx-5 my-2 border border-gray-200 rounded-xl mb-4 p-4 pb-7"
          >
            <Text className="text-lg font-semibold text-gray-800">
              {item.title}
            </Text>

            <View className="flex-row mt-3 gap-3 items-start">
              <Image
                source={{
                  uri: item.image
                    ? item.image
                    : "https://via.placeholder.com/100?text=No+Image",
                }}
                className="w-[100px] h-[100px] rounded-xl"
                resizeMode="cover"
              />
              <View className="flex-1">
                <Text
                  numberOfLines={5}
                  ellipsizeMode="tail"
                  className="text-sm text-gray-600"
                >
                  {item.content}
                </Text>
              </View>
            </View>
          </Pressable>
        )}
      />
    </>
  );
};

export default NewsCard;
