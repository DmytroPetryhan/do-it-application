import React from "react";
import { View, Text } from "react-native";
import styles from "./HorisontalLineStyles";

const HorisontalLine = ({ style }) => {
  return <View style={[styles.container, style]} />;
};

export default HorisontalLine;
