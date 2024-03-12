import React from "react";
import { View, Text } from "react-native";
import styles from "./ErrorMessageStyle";

const ErrorMessage = ({ message = "Errro r message" }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>{message}</Text>
    </View>
  );
};

export default ErrorMessage;
