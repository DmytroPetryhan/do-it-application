import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { FontAwesome, Entypo } from "@expo/vector-icons";
import styles from "./ItemCartStyle";
import { THEME } from "../../theme";

const ItemCart = ({ item, onPress }) => {
  const { title, completed, date, time } = item;
  return (
    <TouchableOpacity onPress={onPress(item)} style={styles.container}>
      <View style={styles.contentWrap}>
        {completed && (
          <View style={styles.iconCompleted}>
            <FontAwesome
              name="check-circle"
              size={24}
              color={THEME.ITEM_DONE_COLOR}
            />
          </View>
        )}
        <View>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.dateText}>{`${date}  |  ${time}`}</Text>
        </View>
      </View>
      <Entypo name="chevron-right" size={25} color={THEME.ARROW_BUTTON} />
    </TouchableOpacity>
  );
};

export default ItemCart;
