import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styles from "./ButtonStyle";

const Button = ({ title, onPres, style }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPres}>
      <View>
        <Text style={styles.titleButton}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Button;
