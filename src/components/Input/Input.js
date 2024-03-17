import React, { useState, useCallback, useRef, useEffect } from "react";
import { View, TextInput } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { THEME } from "../../theme";
import { debounce } from "lodash";
import styles from "./InputStyle";
import ErrorMessage from "../ErrorMessage";

const Input = (props) => {
  const [focus, setFocus] = useState(false);
  const {
    title,
    image,
    onChangeText,
    keyboardType,
    value,
    errorMessage,
    cleareInput,
    ...rest
  } = props;

  const inpRef = useRef();

  useEffect(() => {
    if (cleareInput) inpRef.current?.setNativeProps({ text: "" });
  });

  const activeBorderColor =
    focus && errorMessage && value ? THEME.WARNING_RED_COLOR : "transparent";

  const debounceHandler = useCallback(
    debounce((text) => onChangeText(text), 500)
  );

  return (
    <View>
      <View style={[styles.container, { borderColor: activeBorderColor }]}>
        <Ionicons name={image} size={26} color={"black"} />
        <TextInput
          ref={inpRef}
          autoCaptialize={"none"}
          keyboardType={keyboardType}
          onChangeText={debounceHandler}
          placeholder={title}
          autoCorrect={false}
          onFocus={() => {
            setFocus(true);
          }}
          onBlur={() => setFocus(false)}
          returnKeyType={"done"}
          style={styles.input}
          {...rest}
        />
      </View>
      {focus && value ? <ErrorMessage message={errorMessage} /> : null}
    </View>
  );
};

export default Input;
