import React from "react";
import { TouchableOpacity, Text } from "react-native";
import styles from "./NavigationButtonStyles";

const NavigationButton = ({ onPress, title, style, textColor }) => {
  return (
    <TouchableOpacity style={style} onPress={onPress}>
      <Text style={{ ...styles.title, color: textColor }}>{title}</Text>
    </TouchableOpacity>
  );
};

export default NavigationButton;
