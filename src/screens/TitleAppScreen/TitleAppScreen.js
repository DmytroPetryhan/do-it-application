import React, { useRef, useEffect } from "react";
import { Text, View, Image, Animated } from "react-native";
import styles from "./TitleAppScreenStyles";
import checkmark from "../../img/titleAppScreenImage/Checkmark.png";
import GradientContainer from "../../components/GradientContainer";

export default function TitleAppScreen({ navigation }) {
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    fadeIn();
  }, []);

  const fadeIn = () => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 2000,
      useNativeDriver: true,
    }).start(fadeOut);
  };
  const fadeOut = () => {
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 2000,
      useNativeDriver: true,
    }).start(() => navigation.navigate("onboardingScreen"));
  };

  return (
    <GradientContainer>
      <Animated.View style={[styles.container, { opacity: fadeAnim }]}>
        <View style={styles.contentWrap}>
          <Image source={checkmark}></Image>
          <Text style={styles.titleText}>DO IT</Text>
        </View>

        <View>
          <Text style={styles.versionText}>v 1.0.0</Text>
        </View>
      </Animated.View>
    </GradientContainer>
  );
}
