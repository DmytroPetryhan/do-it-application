import React, { useState, useRef, useEffect } from "react";
import { View, TextInput, TouchableOpacity, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import styles from "./PasswordInputStyle";

const PasswordInput = (props) => {
  const { onChangeText, value, ...rest } = props;
  const [secureText, setSecureText] = useState(true);
  //const [password, setPassword] = useState(value);

  const handlePassword = (t) => {
    onChangeText(t);
  };

  const showPassword = () => {
    setSecureText(false);
  };
  const hidePassword = () => {
    setSecureText(true);
  };
  return (
    <View>
      {/* {value.length > 0 && value.length < 4 ? (
        <Text style={styles.passwordWarning}>
          Your password is too short.{"\n"} The minimum length is 4 characters.
        </Text>
      ) : null} */}
      <View style={styles.container}>
        <Ionicons name={"lock-closed"} size={26} color={"black"} />
        <TextInput
          autoCaptialize={"none"}
          keyboardType={"default"}
          secureTextEntry={secureText}
          onChangeText={handlePassword}
          value={value}
          placeholder={"Password"}
          style={styles.input}
          autoCorrect={false}
          {...rest}
        />
        <TouchableOpacity onPressIn={showPassword} onPressOut={hidePassword}>
          <Ionicons
            name={secureText ? "eye-off" : "eye"}
            size={26}
            color={"black"}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default PasswordInput;
