import React from "react";
import { View, SafeAreaView } from "react-native";
import styles from "./HomePageScreenStyles";
import { profile } from "../../store/userSlice";
import { useSelector } from "react-redux";
import UserInfo from "../../components/UserInfo/UserInfo";
import List from "../../components/List";

const HomePageScreen = () => {
  const user = useSelector(profile);
  const allItems = user.items;

  const incompletedItems =
    allItems.filter((item) => item.completed === false) || [];

  const completedItems =
    allItems.filter((item) => item.completed === true) || [];
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <UserInfo name={user.userName} email={user.userEmail} />
        {incompletedItems.length ? (
          <List title="Incomplate Tasks" list={incompletedItems} />
        ) : null}
        {completedItems.length ? (
          <List title="Complate Tasks" list={completedItems} />
        ) : null}
      </View>
    </SafeAreaView>
  );
};

export default HomePageScreen;
