import { Text, Pressable } from "react-native";
import React from "react";
import { styles } from "./SwipeActionsButtonStyles";
import { FontAwesome } from "react-native-vector-icons";
import { THEME } from "../../theme";

const SwipeActionsButton = ({ onPress }) => {
  return (
    <Pressable style={styles.container} onPress={onPress}>
      <FontAwesome
        style={styles.icon}
        name={"trash"}
        size={30}
        color={THEME.WHITE_COLOR}
      />
    </Pressable>
  );
};

export default SwipeActionsButton;
