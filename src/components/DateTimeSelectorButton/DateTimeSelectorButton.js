import React from "react";
import { TouchableOpacity, Text } from "react-native";
import styles from "./DateTimeSelectorButtonStyles";
import Icon from "react-native-vector-icons/FontAwesome";
import { THEME } from "../../theme";

const DateTimeSelectorButton = (props) => {
  const { title, onPress, style, textStyle, iconName } = props;
  return (
    <TouchableOpacity style={[styles.container, style]} onPress={onPress}>
      <Icon
        name={iconName}
        size={20}
        color={THEME.WHITE_COLOR}
        style={styles.icon}
      />
      <Text style={[styles.titleButton, textStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};

export default DateTimeSelectorButton;
