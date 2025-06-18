import { useEffect } from "react";
import { Alert } from "react-native";
import NetInfo from "@react-native-community/netinfo";

const NetworkChecker = () => {
  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener((state) => {
      if (!state.isConnected) {
        Alert.alert(
          "No Internet",
          "An internet connection is required to use the app.",
          [{ text: "OK" }],
          { cancelable: false }
        );
      }
    });

    return () => unsubscribe();
  }, []);

  return null; // No UI
};

export default NetworkChecker;
