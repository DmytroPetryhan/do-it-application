import React from "react";
import { View, Text } from "react-native";
import styles from "./UserInfoStyles";
import { FontAwesome } from "@expo/vector-icons";

const UserInfo = ({ name, email }) => {
  return (
    <View style={styles.container}>
      <FontAwesome name="user-circle" size={60} color="grey" />
      <View style={styles.userInfo}>
        <Text style={styles.nameText}>{name}</Text>
        <Text style={styles.emailText}>{email}</Text>
      </View>
    </View>
  );
};

export default UserInfo;
