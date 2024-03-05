import React from "react";
import { View, Text, Image } from "react-native";
import styles from "./OnboardingCaruselStyles";

const OnboardingCarusel = ({ image, title, style }) => {
  return (
    <View style={{ ...styles.container, ...style }}>
      <View style={styles.imageWrap}>
        <Image source={image} />
      </View>
      <View style={styles.titleWrap}>
        <Text style={styles.textStyle}>{title}</Text>
      </View>
    </View>
  );
};

export default OnboardingCarusel;
