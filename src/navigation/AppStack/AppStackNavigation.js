import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MainScreen from "../../screens/Main";
import Login from "../../screens/Login";

const Stack = createNativeStackNavigator();

const globalScreenOptions = {
  headerShown: false,
};

function AppStackNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Main"
        component={MainScreen}
        options={globalScreenOptions}
      />

      <Stack.Screen
        name="login"
        component={Login}
        options={globalScreenOptions}
      />
    </Stack.Navigator>
  );
}

export default AppStackNavigation;
