import { Text, TouchableOpacity } from "react-native";
import React from "react";
import styles from "./ButtonStyles";

const Button = (props) => {
  const { title, onPress, style, textStyle, ...rest } = props;
  return (
    <TouchableOpacity
      style={[styles.container, style]}
      onPress={onPress}
      {...rest}
    >
      <Text style={[styles.titleButton, textStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;
