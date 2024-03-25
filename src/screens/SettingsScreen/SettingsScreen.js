import React from "react";
import { Button, View, Text } from "react-native";
import styles from "./SettingsScreenStyles";
import { cleareStore } from "../../store/userSlice";
import { useDispatch } from "react-redux";

const SettingsScreen = () => {
  const dispatch = useDispatch();

  return (
    <View style={styles.container}>
      <Text>SettingsScreen</Text>
      <Button title="Log out" onPress={() => dispatch(cleareStore())} />
    </View>
  );
};

export default SettingsScreen;
