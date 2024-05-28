import React, { useState } from "react";
import { View, TextInput, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { THEME } from "../../theme";
import ErrorMessage from "../ErrorMessage";
import { Controller } from "react-hook-form";
import styles from "./InputStyle";

const Input = (props) => {
  const {
    placeholder,
    image,
    keyboardType,
    secureTextEntry,
    rules = {},
    name,
    control,
  } = props;
  const [secureText, setSecureText] = useState(secureTextEntry);

  const visiblePAsswordHandler = (isVisible) => () => setSecureText(isVisible);

  return (
    <Controller
      control={control}
      render={({
        field: { onChange, onBlur, value },
        fieldState: { error },
      }) => (
        <View>
          <View
            style={[
              styles.container,
              { borderColor: error ? THEME.WARNING_RED_COLOR : "transparent" },
            ]}
          >
            <Ionicons name={image} size={26} color={"black"} />
            <TextInput
              autoCaptialize={"none"}
              secureTextEntry={secureText}
              keyboardType={keyboardType}
              onChangeText={onChange}
              placeholder={placeholder}
              autoCorrect={false}
              value={value}
              onBlur={onBlur}
              returnKeyType={"done"}
              style={styles.input}
            />
            {secureTextEntry && (
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
            )}
          </View>
          {error && <ErrorMessage message={error.message} />}
        </View>
      )}
      name={name}
      rules={rules}
    />
  );
};

export default Input;

{
}
