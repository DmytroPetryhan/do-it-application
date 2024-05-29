import React from "react";
import { View, Text, FlatList } from "react-native";
import styles from "./ListStyles";
import ItemCart from "../ItemCart/ItemCart";
import { useIsFocused } from "@react-navigation/native";
import { userToken } from "../../store/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { toggleLoader, removeItem } from "../../store/userSlice";
import { deleteItem } from "../../../firebase";

const List = ({ title, list, navigationHandler }) => {
  const isFocused = useIsFocused();
  const userId = useSelector(userToken);
  const dispatch = useDispatch();

  if (!isFocused) return;

  const deleteUserItem = (id) => async () => {
    dispatch(toggleLoader(true));
    try {
      const request = await deleteItem(userId, id);
      if (request.status === 200) {
        dispatch(removeItem(id));
      } else {
        alert(request.errorMessade);
      }
    } catch (error) {
      console.error(error);
    } finally {
      dispatch(toggleLoader(false));
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={list}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={{ rowGap: 17 }}
        renderItem={({ item }) => (
          <ItemCart
            item={item}
            navigationHandler={navigationHandler}
            onPress={deleteUserItem}
          />
        )}
      />
    </View>
  );
};

export default List;
