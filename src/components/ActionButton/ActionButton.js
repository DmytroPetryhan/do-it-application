import React from "react";
import { TouchableOpacity, Text } from "react-native";
import styles from "./ActionButtonStyles";
import { FontAwesome } from "react-native-vector-icons";

const ActionButton = (props) => {
  const { title, onPres, iconName, iconColor } = props;
  return (
    <TouchableOpacity style={styles.container} onPress={onPres}>
      <FontAwesome name={iconName} size={24} color={iconColor} />
      <Text style={styles.titleText}>{title}</Text>
    </TouchableOpacity>
  );
};

export default ActionButton;
