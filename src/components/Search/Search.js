import React, { useCallback } from "react";
import { View, TextInput } from "react-native";
import { debounce } from "lodash";
import styles from "./SearchStyle";
import { FontAwesome } from "@expo/vector-icons";
import { THEME } from "../../theme";

const Search = ({ onChangeText }) => {
  const debounceHandler = useCallback(
    debounce((text) => onChangeText(text), 500)
  );
  return (
    <View style={styles.container}>
      <TextInput
        autoCorrect={false}
        style={styles.input}
        maxLength={20}
        placeholder="Search by task title"
        placeholderTextColor={THEME.WHITE_TEXT_COLOR}
        onChangeText={debounceHandler}
      />
      <FontAwesome
        style={styles.icon}
        name="search"
        size={22}
        color={THEME.WHITE_COLOR}
      />
    </View>
  );
};

export default Search;
