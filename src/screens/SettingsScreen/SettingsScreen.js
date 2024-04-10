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

const SettingsScreen = () => {
  const dispatch = useDispatch();

  const logoutHandler = () => dispatch(cleareStore());

  return (
    <View style={styles.container}>
      <View style={styles.textWrap}>
        <View style={styles.secondContainer}>
          <View style={styles.iconText}>
            <Ionicons name="person-circle-outline" size={26} color="white" />
            <Text style={styles.text}>Profile</Text>
          </View>
          <Feather name="chevron-right" size={26} color="white" />
        </View>

        <HorisontalLine />

        <View style={styles.secondContainer}>
          <View style={styles.iconText}>
            <Entypo name="message" size={26} color="white" />
            <Text style={styles.text}>Conversations</Text>
          </View>
          <Feather name="chevron-right" size={26} color="white" />
        </View>

        <HorisontalLine />

        <View style={styles.secondContainer}>
          <View style={styles.iconText}>
            <Entypo name="light-bulb" size={26} color="white" />
            <Text style={styles.text}>Projects</Text>
          </View>
          <Feather name="chevron-right" size={26} color="white" />
        </View>

        <HorisontalLine />
        <View style={styles.secondContainer}>
          <View style={styles.iconText}>
            <MaterialCommunityIcons
              name="text-box-search"
              size={26}
              color="white"
            />
            <Text style={styles.text}>Terms and Policies</Text>
          </View>
          <Feather name="chevron-right" size={26} color="white" />
        </View>

        <HorisontalLine />
      </View>

      <LogoutButton onPress={logoutHandler} />
    </View>
  );
};

export default SettingsScreen;
