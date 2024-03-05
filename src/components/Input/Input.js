import React from "react";
import { View, TextInput } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import styles from "./InputStyle";
const Input = (props) => {
  const { title, image, onChangeText, keyboardType, ...rest } = props;
  return (
    <View style={styles.container}>
      <Ionicons name={image} size={26} color={"black"} />
      <TextInput
        autoCaptialize={"none"}
        keyboardType={keyboardType}
        onChangeText={onChangeText}
        placeholder={title}
        style={styles.input}
        autoCorrect={false}
        {...rest}
      />
    </View>
  );
};

export default Input;
