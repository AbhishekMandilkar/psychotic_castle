import { View, Text, Platform } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native";
import { StatusBar } from "expo-status-bar";
import {
  NAVBAR_HEIGHT,
  SCREEN_HEIGHT,
  STATUSBAR_HEIGHT,
  SCREEN_WIDTH,
} from "../constants/Dimensions";
const Container = ({ children }) => {
  return (
    <SafeAreaView
      style={{
        backgroundColor: "#fff",
        // flex: 1,
        // justifyContent: "space-between",
        // paddingTop: Platform.OS === "android" ? STATUSBAR_HEIGHT : 0,
        // paddingBottom: Platform.OS === "android" ? NAVBAR_HEIGHT : 0,
        height: SCREEN_HEIGHT,
        width: SCREEN_WIDTH,
      }}
    >
      <StatusBar style="dark" />
      <View
        style={{
          paddingHorizontal: SCREEN_WIDTH / 24,
          flex: 1,
        }}
      >
        {children}
      </View>
    </SafeAreaView>
  );
};

export default Container;
