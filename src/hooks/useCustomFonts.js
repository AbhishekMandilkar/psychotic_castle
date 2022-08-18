import { useFonts } from "expo-font";
export default function useCustomFonts() {
  const [fontsLoaded] = useFonts({
    regular: require("../assests/fonts/Poppins-Regular.ttf"),
    bold: require("../assests/fonts/Poppins-Bold.ttf"),
    medium: require("../assests/fonts/Poppins-Medium.ttf"),
    light: require("../assests/fonts/Poppins-Light.ttf"),
  });

  return fontsLoaded;
}
