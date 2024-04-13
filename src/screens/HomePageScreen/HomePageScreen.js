import React, { useCallback, useEffect } from "react";
import { View, SafeAreaView } from "react-native";
import styles from "./HomePageScreenStyles";
import { profile } from "../../store/userSlice";
import { userItems } from "../../store/userSlice";
import { userToken } from "../../store/userSlice";
import { useSelector, useDispatch } from "react-redux";
import { fetchUser } from "../../../firebase";
import { signUpUser } from "../../store/userSlice";

import UserInfo from "../../components/UserInfo/UserInfo";
import List from "../../components/List";

const HomePageScreen = () => {
  const dispatch = useDispatch();
  const user = useSelector(profile);
  const allItems = useSelector(userItems);
  const userId = useSelector(userToken);

  const loadUser = useCallback(async () => {
    const requestData = await fetchUser(userId);

    if (requestData.status === 200) {
      const itemList = Object.keys(requestData.items).map((key) => ({
        ...requestData.items[key],
        id: key,
      }));
      dispatch(signUpUser({ user: requestData.user, items: itemList }));
    } else {
      dispatch(signUpUser({ user: {}, items: [] }));
    }
  }, []);

  useEffect(() => {
    loadUser();
  }, []);

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
