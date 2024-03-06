import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, SafeAreaView, Platform } from "react-native";
import GradientContainer from "./src/components/GradientContainer";
import RootNavigation from "./src/navigation/RootNavigation";

export default function App() {
  return (
    <GradientContainer style={styles.container}>
      <SafeAreaView style={styles.androidSafeArea}>
        <StatusBar style="light" />
      </SafeAreaView>
      <RootNavigation />
    </GradientContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  androidSafeArea: {
    height: Platform.OS === "ios" ? 0 : 40,
  },
});
