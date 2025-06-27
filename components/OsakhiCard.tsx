import { View, Text, Image } from "react-native";
import IconButton from "./IconButton";
import { router } from "expo-router";
import * as WebBrowser from "expo-web-browser";

const OSakhiCard = ({ handleOnPress }: any) => {
  // const handleOnPress = (data: any) => {
  //   console.log(data);
  //   router.push(data.screen);
  // };

  const handleClick = () => {
    //WebBrowser.openBrowserAsync("https://1cell-agent.vercel.app/");
    router.push("/agent_screen");
  };

  return (
    <View className="bg-whitex m-auto p-5 border border-gray-100 rounded-xl width-[200px]">
      <View className="">
        <Image
          source={require("@/assets/images/osakhi.png")}
          className="shadow-lg mt-2 border-2 border-red-100 rounded-full w-60 h-60"
          resizeMode="cover"
        />
      </View>

      <View className="flex-row justify-center items-center mt-4">
        <IconButton
          iconName="chatbubble-outline"
          size={30}
          onPress={() => handleOnPress({ screen: "pages/ChatPage" })}
        />
        {/* <IconButton
          iconName="mic-outline"
          size={30}
          onPress={() => handleOnPress({ screen: "documents" })}
        /> */}
        <IconButton
          iconName="videocam-outline"
          size={30}
          onPress={() => handleClick()}
        />
      </View>
    </View>
  );
};

export default OSakhiCard;
