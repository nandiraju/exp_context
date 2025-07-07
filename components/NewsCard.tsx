import * as WebBrowser from "expo-web-browser";
import { useAtom, useAtomValue } from "jotai";
import React, { useEffect } from "react";
import { FlatList, Pressable, Text, Image, View } from "react-native";
import { newsAtom, imagesAtom } from "@/stores/ApiData";

type NewsCardProps = {
  count: number;
};

const NewsCard = ({ count }: NewsCardProps) => {
  const [news, setnews] = useAtom(newsAtom);
  const images = useAtomValue(imagesAtom);
  if (!news || news.length === 0) {
    return (
      <Text className="text-center text-gray-400 mt-10">
        No news available.
      </Text>
    );
  }

  const getRandomImage = () => {
    if (images.results.length === 0) return null;
    const randomIndex = Math.floor(Math.random() * images.results.length);
    console.log("Random Image Index:", randomIndex);
    return images.results[randomIndex].urls.small;
  };

  const handleClick = (url: string) => {
    WebBrowser.openBrowserAsync(url);
  };

  return (
    <>
      <FlatList
        data={count == -1 ? news : news.slice(0, count)}
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
                  uri: item.image ? item.image : getRandomImage(),
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
