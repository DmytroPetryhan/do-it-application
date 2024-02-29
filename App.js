import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import TitleAppScreen from "./src/screens/TitleAppScreen";

export default function App() {
  return (
    <View style={styles.container}>
      <TitleAppScreen />
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
