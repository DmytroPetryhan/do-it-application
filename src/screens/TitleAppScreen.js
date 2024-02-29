import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import checkmark from "../img/titleAppScreenImage/Checkmark.png";
import { THEME } from "../theme";
import GradientContinaer from "../components/GradientContainer/index";

export default function TitleAppScreen() {
  return (
    <GradientContinaer style={styles.container}>
      <View style={styles.contentWrap}>
        <Image source={checkmark}></Image>
        <Text style={styles.titleText}>DO IT</Text>
      </View>

      <View>
        <Text style={styles.versionText}>v 1.0.0</Text>
      </View>
    </GradientContinaer>
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
    color: THEME.WHITE_TEXT_COLOR,
  },
  versionText: {
    fontSize: 20,
    color: THEME.WHITE_TEXT_COLOR,
  },
});
