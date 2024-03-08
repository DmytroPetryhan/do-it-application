import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { THEME } from "../../theme";
import styles from "./GradientContainerStyles";

const GradientContainer = ({ children, style }) => {
  return (
    <LinearGradient
      style={{ ...styles.container, ...style }}
      colors={[THEME.SCREEN_GRADIENT.START, THEME.SCREEN_GRADIENT.END]}
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}
    >
      {children}
    </LinearGradient>
  );
};

export default GradientContainer;
