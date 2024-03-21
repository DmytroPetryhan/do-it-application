import React, { useCallback } from "react";
import { StatusBar } from "expo-status-bar";
import * as SplashScreen from "expo-splash-screen";
import { useFonts } from "expo-font";
import { View } from "react-native";
import { Provider } from "react-redux";
import RootNavigation from "./src/navigation/RootNavigation";
import SignUpScreen from "./src/screens/SignUpScreen";
import SignInScreen from "./src/screens/SignInScreen";
import HomePageScreen from "./src/screens/HomePageScreen";
import store from "./src/store";
SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded, fontError] = useFonts({
    "darumadrop-one": require("./assets/fonts/DarumadropOne-Regular.ttf"),
    "poppins-regular": require("./assets/fonts/Poppins-Regular.ttf"),
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
    <View style={{ flex: 1 }} onLayout={onLayoutRootView}>
      <StatusBar style="light" />
      <Provider store={store}>
        {/* <HomePageScreen /> */}
        {/* <SignUpScreen /> */}
        <RootNavigation />
      </Provider>
    </View>
  );
}
