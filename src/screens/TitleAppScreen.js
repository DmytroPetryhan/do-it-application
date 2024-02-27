import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import GradientView from "../components/GradientView";
import checkmark from "../img/Checkmark.png";
import { THEME } from "../theme";

export default function TitleAppScreen() {
  return (
    <GradientView style={styles.container}>
      <View style={styles.contentWrap}>
        <Image source={checkmark}></Image>
        <Text style={styles.titleText}>DO IT</Text>
      </View>

      <View>
        <Text style={styles.versionText}>v 1.0.</Text>
      </View>
    </GradientView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "space-around",
  },
  contentWrap: {
    alignItems: "center",
  },
  titleText: {
    margin: 25,
    fontSize: 36,
    fontWeight: "bold",
    color: THEME.MAIN_TEXT_COLOR,
  },
  versionText: {
    fontSize: 20,
    color: THEME.MAIN_TEXT_COLOR,
  },
});
