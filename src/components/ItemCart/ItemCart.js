import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Entypo } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import styles from "./ItemCartStyle";

const ItemCart = ({ item, onPress }) => {
  const { title, completed } = item;
  return (
    <View style={styles.container}>
      <View style={styles.contentWrap}>
        {completed ? (
          <View style={styles.iconCompleted}>
            <FontAwesome name="check-circle" size={24} color="#3EDA73" />
          </View>
        ) : null}
        <Text style={styles.title}>{title}</Text>
      </View>
      <TouchableOpacity onPress={onPress}>
        <Entypo name="chevron-right" size={25} color="#0EA5E9" />
      </TouchableOpacity>
    </View>
  );
};

export default ItemCart;
