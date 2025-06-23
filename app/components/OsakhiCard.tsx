import { View, Text, Image } from "react-native";
import IconButton from "./IconButton";
import { router } from "expo-router";

const OSakhiCard = () => {
  const handleOnPress = (data: any) => {
    console.log(data);
    router.push(data.screen);
  };

  return (
    <View className="bg-white border border-gray-100 rounded-xl width-[200px] m-auto p-5">
      <View className="">
        <Image
          source={require("../../assets/images/osakhi.png")}
          className="mt-2 w-60 h-60"
          resizeMode="cover"
        />
      </View>

      <View className="flex-row justify-between items-center mt-4">
        <IconButton
          iconName="chatbubble-outline"
          size={30}
          onPress={() => handleOnPress({ screen: "chat" })}
        />
        <IconButton
          iconName="mic-outline"
          size={30}
          onPress={() => handleOnPress({ screen: "documents" })}
        />
      </View>
    </View>
  );
};

export default OSakhiCard;
