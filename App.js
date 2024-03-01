import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import TitleAppScreen from "./src/screens/TitleAppScreen";
import OnboardingScreen from "./src/screens/OnboardingScreen";

export default function App() {
  return (
    <View style={styles.container}>
      <OnboardingScreen />
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
