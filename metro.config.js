const { getDefaultConfig } = require("expo/metro-config");
const { withNativeWind } = require("nativewind/metro");

const config = getDefaultConfig(__dirname);
// DEFAULT_LOGGER_CONFIG.resolver.sourceExts.push("cjs");

module.exports = withNativeWind(config, { input: "./global.css" });
