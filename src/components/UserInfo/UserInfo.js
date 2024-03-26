import React from "react";
import { View, Text, Image } from "react-native";
import styles from "./UserInfoStyles";
import usIcon from "../../img/UserIcon/usIcon.png";

const UserInfo = ({ name, email }) => {
  return (
    <View style={styles.container}>
      <Image style={styles.userIcon} source={usIcon} />
      <View style={styles.userInfo}>
        <Text style={styles.nameText}>{name}</Text>
        <Text style={styles.emailText}>{email}</Text>
      </View>
    </View>
  );
};

export default UserInfo;
