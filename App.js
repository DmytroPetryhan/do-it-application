import React from "react";
import { StatusBar } from "expo-status-bar";
import GradientContainer from "./src/components/GradientContainer";
import RootNavigation from "./src/navigation/RootNavigation";

export default function App() {
  return (
    <GradientContainer>
      <StatusBar style="light" />
      <RootNavigation />
    </GradientContainer>
  );
}
