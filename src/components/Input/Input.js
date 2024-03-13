import React, { useState } from "react";
import { View, TextInput } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import styles from "./InputStyle";
import ErrorMessage from "../ErrorMessage";
import { THEME } from "../../theme";

const Input = (props) => {
  const [focus, setFocus] = useState(false);
  const {
    title,
    image,
    onChangeText,
    keyboardType,
    value,
    errorMessage,
    ...rest
  } = props;

  const activeBorderColor =
    focus && errorMessage ? THEME.WARNING_RED_COLOR : "transparent";

  return (
    <View>
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
      {focus && errorMessage ? <ErrorMessage message={errorMessage} /> : null}
    </View>
  );
};

export default Input;
