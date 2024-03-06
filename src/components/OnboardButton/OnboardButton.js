import React from "react";
import { View, TouchableOpacity } from "react-native";
import styles from "./OnboardButtonStyle";

const OnboardButton = ({ children, style, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={{ ...styles.container, ...styles.shadow, ...style }}>
        {children}
      </View>
    </TouchableOpacity>
  );
};

export default OnboardButton;
