import React from "react";
import { Text, TouchableOpacity } from "react-native";
import styles from "./LogoutButtonStyles";
import { FontAwesome } from "@expo/vector-icons";
import { THEME } from "../../theme";

const LogoutButton = (props) => {
  const { onPress } = props;
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <FontAwesome name="sign-out" size={24} color={THEME.WARNING_RED_COLOR} />
      <Text style={styles.textButton}>Logout</Text>
    </TouchableOpacity>
  );
};

export default LogoutButton;
