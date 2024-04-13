import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Entypo } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import styles from "./ItemCartStyle";

const ItemCart = ({ item, onPress, onLongPress }) => {
  const { title, completed, date, time } = item;
  return (
    <TouchableOpacity
      onPress={onPress}
      onLongPress={onLongPress}
      style={styles.container}
    >
      <View style={styles.contentWrap}>
        {completed ? (
          <View style={styles.iconCompleted}>
            <FontAwesome name="check-circle" size={24} color="#3EDA73" />
          </View>
        ) : null}
        <View>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.dateText}>{`${date}  |  ${time}`}</Text>
        </View>
      </View>
      <Entypo name="chevron-right" size={25} color="#0EA5E9" />
    </TouchableOpacity>
  );
};

export default ItemCart;
