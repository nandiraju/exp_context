import { WebView } from "react-native-webview";
import Constants from "expo-constants";
import { StyleSheet } from "react-native";

export default function AgentScreen() {
  return (
    <WebView
      style={styles.container}
      //source={{ uri: "https://ai.nandiraju.com/" }}
      source={{ uri: "https://1cell-agent.vercel.app/" }}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
  },
});
