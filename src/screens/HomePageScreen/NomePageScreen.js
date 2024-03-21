import React from "react";
import { Text } from "react-native";
import styles from "./NomePageScreenStyles";
import GradientContainer from "../../components/GradientContainer";
import { profile } from "../../store/userSlice";
import { useSelector } from "react-redux";

const NomePageScreen = () => {
  const user = useSelector(profile);
  const items = user.items || [];

  return (
    <GradientContainer style={styles.container}>
      <Text>{user.userName}</Text>
    </GradientContainer>
  );
};

export default NomePageScreen;
