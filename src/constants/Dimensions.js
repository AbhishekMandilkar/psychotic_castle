import { Dimensions, StatusBar } from "react-native";

const SCREEN_HEIGHT = Dimensions.get("screen").height;
const SCREEN_WIDTH = Dimensions.get("screen").width;
const WINDOW_HEIGHT = Dimensions.get("window").height;
const NAVBAR_HEIGHT = SCREEN_HEIGHT - WINDOW_HEIGHT + StatusBar.currentHeight;
const STATUSBAR_HEIGHT = StatusBar.currentHeight;

export {
  SCREEN_HEIGHT,
  WINDOW_HEIGHT,
  NAVBAR_HEIGHT,
  STATUSBAR_HEIGHT,
  SCREEN_WIDTH,
};
