// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD3v_2MQX-UnPB8feCNhBhldFw_SOLUTAI",
  authDomain: "expo-auth-3f27f.firebaseapp.com",
  projectId: "expo-auth-3f27f",
  storageBucket: "expo-auth-3f27f.firebasestorage.app",
  messagingSenderId: "932718823176",
  appId: "1:932718823176:web:ea805ed932a9c604738ebd",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});

export { auth };
// export const db = getFirestore(app);
// export const storage = getStorage(app);
