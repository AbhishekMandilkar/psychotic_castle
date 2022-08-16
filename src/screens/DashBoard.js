import { View, Text, Button } from "react-native";
import React from "react";
import Container from "../common/Container";
import { useNavigation } from "@react-navigation/native";

const DashBoard = () => {
  const navigation = useNavigation();
  return (
    <Container>
      <Text style={{ fontFamily: "light", fontSize: 24 }}>DashBoard</Text>
      <Text style={{ fontFamily: "regular", fontSize: 24 }}>DashBoard</Text>
      <Text style={{ fontFamily: "medium", fontSize: 24 }}>DashBoard</Text>
      <Text style={{ fontFamily: "bold", fontSize: 24 }}>DashBoard</Text>
      <Button
        title="Go to login"
        onPress={() => navigation.navigate("login")}
      />
      <Button
        title="Go to settings"
        onPress={() => navigation.navigate("Settings")}
      />
    </Container>
  );
};

export default DashBoard;
