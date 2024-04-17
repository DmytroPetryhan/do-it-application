import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styles from "./SettingsButtonStyles";
import HorisontalLine from "../../components/HorisontalLine";
import { Feather } from "@expo/vector-icons";

import Icon from "react-native-vector-icons/Ionicons";
import { THEME } from "../../theme";

const SettingsButton = (props) => {
  const { title, iconName, onPress } = props;
  return (
    <>
      <TouchableOpacity style={styles.container} onPress={onPress}>
        <View style={styles.iconText}>
          <Icon name={iconName} size={26} color={THEME.WHITE_COLOR} />
          <Text style={styles.text}>{title}</Text>
        </View>
        <Icon
          name="chevron-forward-sharp"
          size={22}
          color={THEME.ARROW_BUTTON}
        />
      </TouchableOpacity>
      <HorisontalLine />
    </>
  );
};

export default SettingsButton;
