import React, { useCallback } from "react";
import * as SplashScreen from "expo-splash-screen";
import { useFonts } from "expo-font";
import { LinearGradient } from "expo-linear-gradient";
import { THEME } from "../../theme";
import styles from "./GradientContainerStyles";

SplashScreen.preventAutoHideAsync();

const GradientContainer = ({ children, style }) => {
  const [fontsLoaded, fontError] = useFonts({
    "darumadrop-one": require("../../../assets/fonts/DarumadropOne-Regular.ttf"),
    "poppins-regular": require("../../../assets/fonts/Poppins-Regular.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <LinearGradient
      onLayout={onLayoutRootView}
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
