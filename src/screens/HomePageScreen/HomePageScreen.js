import React from "react";
import { View, SafeAreaView } from "react-native";
import styles from "./HomePageScreenStyles";
import { profile } from "../../store/userSlice";
import { useSelector } from "react-redux";
import UserInfo from "../../components/UserInfo/UserInfo";

const HomePageScreen = () => {
  const user = useSelector(profile);
  const items = user.items || [];
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <UserInfo name={user.userName} email={user.userEmail} />
      </View>
    </SafeAreaView>
  );
};

export default HomePageScreen;
