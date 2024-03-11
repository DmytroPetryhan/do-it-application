import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styles from "./ButtonStyle";

const Button = ({ title, onPres, disabled = true, style }) => {
  return (
    <TouchableOpacity
      disabled={disabled}
      style={[styles.container, { opacity: disabled ? 0.6 : 1 }]}
      onPress={onPres}
    >
      <View>
        <Text style={styles.titleButton}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Button;
