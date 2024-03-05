import { StatusBar } from "expo-status-bar";
import { StyleSheet, SafeAreaView, Platform } from "react-native";
import TitleAppScreen from "./src/screens/TitleAppScreen";
import OnboardingScreen from "./src/screens/OnboardingScreen";
import SignInScreen from "./src/screens/SignInScreen";
import GradientContainer from "./src/components/GradientContainer";
export default function App() {
  return (
    <GradientContainer style={styles.container}>
      <SafeAreaView style={styles.androidSafeArea}>
        <StatusBar style="light" />
      </SafeAreaView>

      {/* <OnboardingScreen /> */}
      {/* <TitleAppScreen /> */}
      <SignInScreen />
    </GradientContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  androidSafeArea: {
    height: Platform.OS === "android" ? 40 : 0,
  },
});
