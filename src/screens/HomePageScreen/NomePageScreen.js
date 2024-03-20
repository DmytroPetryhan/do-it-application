import React from "react";
import { Text } from "react-native";
import styles from "./NomePageScreenStyles";
import GradientContainer from "../../components/GradientContainer";
const NomePageScreen = () => {
  return (
    <GradientContainer style={styles.container}>
      <Text>NomePageScreen</Text>
    </GradientContainer>
  );
};

export default NomePageScreen;
