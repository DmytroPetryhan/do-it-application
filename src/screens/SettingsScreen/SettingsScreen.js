import React from "react";
import { View, Text } from "react-native";
import styles from "./SettingsScreenStyles";
import { cleareStore } from "../../store/userSlice";
import { useDispatch } from "react-redux";
import LogoutButton from "../../components/LogoutButton";
import HorisontalLine from "../../components/HorisontalLine";

import { Ionicons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import SettingsButton from "../../components/SettingsButton/SettingsButton";

const SettingsScreen = ({ navigation }) => {
  const dispatch = useDispatch();

  const navigateTo = (path) => () => navigation.navigate(path);
  const logoutHandler = () => dispatch(cleareStore());

  return (
    <View style={styles.container}>
      <View style={styles.textWrap}>
        <SettingsButton
          title="Profile"
          iconName="person-circle-outline"
          onPress={navigateTo("profileScreen")}
        />
        <SettingsButton
          title="About app"
          iconName="information-circle-outline"
          onPress={navigateTo("aboutApp")}
        />
      </View>

      <LogoutButton onPress={logoutHandler} />
    </View>
  );
};

export default SettingsScreen;
