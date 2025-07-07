import { View, Text, Image } from "react-native";
import IconButton from "./IconButton";
import { router } from "expo-router";
import * as WebBrowser from "expo-web-browser";

import UIButton from "@/components/lib/UIButton";
import { Ionicons } from "@expo/vector-icons";

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
      {/* <View className="border border-blue-600 rounded-full  border-width-2 shadow-lg"> */}
      <Image
        source={require("@/assets/images/osakhi.png")}
        className=" mt-2 border-2 border-gray-600 rounded-full size-60 shadow-xl"
        resizeMode="cover"
      />
      {/* </View> */}

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
