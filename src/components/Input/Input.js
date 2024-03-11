import React, { useState, useRef } from "react";
import { View, TextInput } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import styles from "./InputStyle";

const Input = (props) => {
  const [focus, setFocus] = useState(false);
  const { title, image, onChangeText, keyboardType, value, ...rest } = props;
  const activeBorderColor = focus ? "red" : "transparent";

  return (
    <View style={[styles.container, { borderColor: activeBorderColor }]}>
      <Ionicons name={image} size={26} color={"black"} />
      <TextInput
        autoCaptialize={"none"}
        keyboardType={keyboardType}
        onChangeText={onChangeText}
        placeholder={title}
        value={value}
        autoCorrect={false}
        onFocus={() => {
          setFocus(true);
        }}
        onBlur={() => setFocus(false)}
        style={styles.input}
        {...rest}
      />
    </View>
  );
};

export default Input;
