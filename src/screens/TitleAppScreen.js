import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import checkmark from "../img/titleAppScreenImage/Checkmark.png";
import { THEME } from "../theme";

export default function TitleAppScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.contentWrap}>
        <Image source={checkmark}></Image>
        <Text style={styles.titleText}>DO IT</Text>
      </View>

      <View>
        <Text style={styles.versionText}>v 1.0.0</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
