import { View, TextInput } from "react-native";
import React from "react";
import styles from "./InputStyles";
import { THEME } from "../../theme";
import Icon from "react-native-vector-icons/Feather";

const Input = (props) => {
  const { placeholder, iconName, style, maxLength, multiline } = props;

  return (
    <View style={[styles.container, style]}>
      <Icon name={iconName} color={THEME.WHITE_COLOR} size={24} />
      <TextInput
        autoCorrect={false}
        returnKeyType="done"
        //returnKeyLabel="done"
        maxLength={maxLength}
        multiline={multiline}
        placeholder={placeholder}
        placeholderTextColor={THEME.WHITE_TEXT_COLOR}
        style={styles.text}
      />
    </View>
  );
};

export default Input;
