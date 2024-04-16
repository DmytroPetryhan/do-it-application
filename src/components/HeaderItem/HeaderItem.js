import React from "react";
import { View, Text } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import styles from "./HeaderItemStyles";

const HeaderItem = (props) => {
  const { title, date, time } = props;
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.dateWrap}>
        <Icon name="calendar" size={12} color={"white"} />
        <Text style={styles.date}>{date}</Text>
        <Text style={styles.date}>|</Text>
        <Icon name="clock-o" size={14} color={"white"} />
        <Text style={styles.date}>{time}</Text>
      </View>
    </View>
  );
};

export default HeaderItem;
