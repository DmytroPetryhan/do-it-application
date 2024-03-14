import React, { useState, useCallback } from "react";
import { View, TextInput, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { THEME } from "../../theme";
import { debounce } from "lodash";
import ErrorMessage from "../ErrorMessage";
import styles from "./PasswordInputStyle";

const PasswordInput = ({ onChangeText, value, errorMessage, ...rest }) => {
  const [focus, setFocus] = useState(false);
  const [secureText, setSecureText] = useState(true);

  const visiblePAsswordHandler = (isVisible) => () => setSecureText(isVisible);

  const activeBorderColor =
    focus && errorMessage && value ? THEME.WARNING_RED_COLOR : "transparent";

  const debounceHandler = useCallback(
    debounce((text) => onChangeText(text), 500)
  );
  return (
    <View>
      <View style={[styles.container, { borderColor: activeBorderColor }]}>
        <Ionicons name={"lock-closed"} size={26} color={"black"} />
        <TextInput
          autoCaptialize={"none"}
          keyboardType={"default"}
          secureTextEntry={secureText}
          onChangeText={debounceHandler}
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
      {focus && value ? <ErrorMessage message={errorMessage} /> : null}
    </View>
  );
};

export default PasswordInput;
