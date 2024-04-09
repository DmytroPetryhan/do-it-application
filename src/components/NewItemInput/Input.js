import { View, TextInput } from "react-native";
import React, { useCallback } from "react";
import { debounce } from "lodash";
import styles from "./InputStyles";
import { THEME } from "../../theme";
import Icon from "react-native-vector-icons/Feather";

const Input = (props) => {
  const {
    placeholder,
    iconName,
    style,
    maxLength,
    multiline,
    onChangeText,
    ...rest
  } = props;

  const debounceHandler = useCallback(
    debounce((text) => onChangeText(text), 500)
  );

  return (
    <View style={[styles.container, style]}>
      <Icon name={iconName} color={THEME.WHITE_COLOR} size={24} />
      <TextInput
        autoCorrect={false}
        returnKeyType="done"
        maxLength={maxLength}
        multiline={multiline}
        placeholder={placeholder}
        placeholderTextColor={THEME.WHITE_TEXT_COLOR}
        onChangeText={debounceHandler}
        style={styles.text}
        {...rest}
      />
    </View>
  );
};

export default Input;
