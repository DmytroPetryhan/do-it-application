import "react-native-gesture-handler";
import React, { useCallback } from "react";
import { StatusBar } from "expo-status-bar";
import * as SplashScreen from "expo-splash-screen";
import { useFonts } from "expo-font";
import { View } from "react-native";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import RootNavigation from "./src/navigation/RootNavigation";
import store, { persistor } from "./src/store";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import HomePageScreen from "./src/screens/HomePageScreen";
import NewItemScreen from "./src/screens/NewItemScreen";
SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded, fontError] = useFonts({
    "darumadrop-one": require("./assets/fonts/DarumadropOne-Regular.ttf"),
    "poppins-regular": require("./assets/fonts/Poppins-Regular.ttf"),
    "poppins-bold": require("./assets/fonts/Poppins-Bold.ttf"),
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
    <GestureHandlerRootView style={{ flex: 1 }}>
      <View style={{ flex: 1 }} onLayout={onLayoutRootView}>
        <StatusBar style="light" />
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            {/* <NewItemScreen /> */}
            {/* <HomePageScreen /> */}
            <RootNavigation />
          </PersistGate>
        </Provider>
      </View>
    </GestureHandlerRootView>
  );
}
