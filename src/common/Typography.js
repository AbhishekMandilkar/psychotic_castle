import { View, Text } from "react-native";
import React from "react";
import { H1, H2, H3, P1, P2, P3 } from "../constants/Size";
const Typography = ({
  children,
  regular,
  bold,
  medium,
  light,
  h1,
  h2,
  h3,
  p1,
  p2,
  p3,
}) => {
  const size = h1 ? H1 : h2 ? H2 : h3 ? H3 : p1 ? P1 : p2 ? P2 : p3 ? P3 : P1;
  const variant = regular
    ? "regular"
    : bold
    ? "bold"
    : medium
    ? "medium"
    : light
    ? "light"
    : "regular";
  return (
    <Text style={{ fontFamily: variant, fontSize: size }}>{children}</Text>
  );
};

export default Typography;
