import React from "react";
import { Text, View } from "react-native";
import styles from "./HomePageScreenStyles";
import { profile } from "../../store/userSlice";
import { useSelector } from "react-redux";

const HomePageScreen = () => {
  const user = useSelector(profile);
  const items = user.items || [];

  return (
    <View style={styles.container}>
      <Text>{user.userName}</Text>
    </View>
  );
};

export default HomePageScreen;
