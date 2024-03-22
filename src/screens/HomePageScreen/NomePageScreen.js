import React from "react";
import { Button, Text } from "react-native";
import styles from "./NomePageScreenStyles";
import GradientContainer from "../../components/GradientContainer";
import { cleareStore, profile } from "../../store/userSlice";
import { useDispatch, useSelector } from "react-redux";

const NomePageScreen = () => {
  const dispatch = useDispatch();

  const user = useSelector(profile);
  const items = user.items || [];

  return (
    <GradientContainer style={styles.container}>
      <Text>{user.userName}</Text>
      <Button title="Log out" onPress={() => dispatch(cleareStore())} />
    </GradientContainer>
  );
};

export default NomePageScreen;
