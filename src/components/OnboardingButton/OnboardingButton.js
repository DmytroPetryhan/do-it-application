import React from "react";
import { View, TouchableOpacity } from "react-native";
import styles from "./OnboardingButtonStyles";

const OnboardingButton = ({ children, style, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={{ ...styles.container, ...style }}>{children}</View>
    </TouchableOpacity>
  );
};

export default OnboardingButton;
