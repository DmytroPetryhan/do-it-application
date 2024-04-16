import React from "react";
import { Text, TouchableOpacity } from "react-native";
import styles from "./BackButtonStyles";
import Icon from "react-native-vector-icons/FontAwesome";
import { THEME } from "../../theme";

const BackButton = (props) => {
  const { onPress } = props;

  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Icon name="angle-left" size={30} color={THEME.BACK_BUTTON_ARROW} />
      <Text style={styles.buttonTitle}>Back</Text>
    </TouchableOpacity>
  );
};

export default BackButton;
