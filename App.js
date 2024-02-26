import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import TitleAppScreen from "./src/screens/TitleAppScreen";
import GradientView from "./src/components/GradientView";

export default function App() {
  return (
    <View style={styles.container}>
      <TitleAppScreen />
      {/* <StatusBar style="auto" /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "yellow",
    flex: 1,
    // alignItems: "center",
    // justifyContent: "center",
  },
});
