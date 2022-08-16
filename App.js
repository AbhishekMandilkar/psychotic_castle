import * as React from "react";
import { View, Text, ActivityIndicator } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AppStackNavigation from "./src/navigation/AppStack/AppStackNavigation";
import "react-native-gesture-handler";
import useCustomFonts from "./src/hooks/useCustomFonts";

const Stack = createNativeStackNavigator();

function App() {
  const fontsLoaded = useCustomFonts();
  if (!fontsLoaded) {
    return <ActivityIndicator />;
  }
  return (
    <NavigationContainer>
      <AppStackNavigation />
    </NavigationContainer>
  );
}

export default App;
