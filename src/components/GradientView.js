import React from "react";
import { StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { THEME } from "../theme";

export default function ({ children, style }) {
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
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
