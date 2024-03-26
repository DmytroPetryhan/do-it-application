import React from "react";
import { View, Text, FlatList } from "react-native";
import styles from "./ListStyles";
import ItemCart from "../ItemCart/ItemCart";

const List = ({ title, list }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={list}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={{ rowGap: 17 }}
        renderItem={({ item }) => <ItemCart item={item} />}
      />
    </View>
  );
};

export default List;
