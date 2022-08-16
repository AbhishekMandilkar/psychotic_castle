import {
  useFonts,
  Ubuntu_300Light,
  Ubuntu_300Light_Italic,
  Ubuntu_400Regular,
  Ubuntu_400Regular_Italic,
  Ubuntu_500Medium,
  Ubuntu_500Medium_Italic,
  Ubuntu_700Bold,
  Ubuntu_700Bold_Italic,
} from "@expo-google-fonts/ubuntu";
export default function useCustomFonts() {
  const [fontsLoaded] = useFonts({
    light: Ubuntu_300Light,
    regular: Ubuntu_400Regular,
    medium: Ubuntu_500Medium,

    bold: Ubuntu_700Bold,
  });

  return fontsLoaded;
}
