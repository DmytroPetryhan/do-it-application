import React, { useState } from "react";
import { View, TextInput, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import styles from "./PasswordInputStyle";

const PasswordInput = ({ onChangeText, value, ...rest }) => {
  const [focus, setFocus] = useState(false);
  const [secureText, setSecureText] = useState(true);

  const visiblePAsswordHandler = (isVisible) => () => setSecureText(isVisible);
  const activeBorderColor = focus ? "red" : "transparent";

  return (
    <View style={[styles.container, { borderColor: activeBorderColor }]}>
      <Ionicons name={"lock-closed"} size={26} color={"black"} />
      <TextInput
        autoCaptialize={"none"}
        keyboardType={"default"}
        secureTextEntry={secureText}
        onChangeText={onChangeText}
        value={value}
        placeholder={"Password"}
        style={styles.input}
        autoCorrect={false}
        onFocus={() => {
          setFocus(true);
        }}
        onBlur={() => setFocus(false)}
        {...rest}
      />

      <Pressable
        onPressIn={visiblePAsswordHandler(false)}
        onPressOut={visiblePAsswordHandler(true)}
      >
        <Ionicons
          name={secureText ? "eye-off" : "eye"}
          size={26}
          color={"black"}
        />
      </Pressable>
    </View>
  );
};

export default PasswordInput;
