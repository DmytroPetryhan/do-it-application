import React from "react";
import { View, Text, TextInput } from "react-native";
import styles from "./SearchStyle";
import { FontAwesome } from "@expo/vector-icons";
import { THEME } from "../../theme";

const Search = ({ onChangeText }) => {
  return (
    <View style={styles.container}>
      <TextInput
        autoCorrect={false}
        style={styles.input}
        maxLength={30}
        placeholder="Search by task title"
        placeholderTextColor={THEME.WHITE_TEXT_COLOR}
        onChangeText={onChangeText}
      />
      <FontAwesome
        style={styles.icon}
        name="search"
        size={24}
        color={THEME.WHITE_COLOR}
      />
    </View>
  );
};

export default Search;
