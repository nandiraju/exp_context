/** @type {import('tailwindcss').Config} */
module.exports = {
  presets: [require("nativewind/preset")],
  content: [
    "./app/**/*.{js,jsx,ts,tsx}", // For expo-router
    "./components/**/*.{js,jsx,ts,tsx}",
    "./src/**/*.{js,jsx,ts,tsx}",
    "./App.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["PoppinsRegular"],
        "poppins-semibold": "PoppinsSemiBold",
      },
      boxShadow: {
        sm: "0 1px 1.5px rgba(0, 0, 0, 0.1)",
        md: "0 3px 4.65px rgba(0, 0, 0, 0.15)",
        lg: "0 6px 10px rgba(0, 0, 0, 0.2)",
      },
    },
  },
  plugins: [],
};
