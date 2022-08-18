import { View, Text, Button } from "react-native";
import React from "react";
import Container from "../common/Container";
import { useNavigation } from "@react-navigation/native";
import Typography from "../common/Typography";
import getGreetingsBasedOnTime from "../helpers/getGreeting";

const DashBoard = () => {
  const navigation = useNavigation();
  return (
    <Container>
      <Typography h3 bold>
        {getGreetingsBasedOnTime("Abhishek")}
      </Typography>

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
