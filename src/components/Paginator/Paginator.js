import React from "react";
import styles from "./PaginatorStyle";
import { View } from "react-native";

const Paginator = ({ data, caruselIndex }) => {
  const dot = (d) => (
    <View style={styles.dotWrap}>
      {d.map((_, index) => (
        <View
          key={index}
          style={index === caruselIndex ? styles.dotActive : styles.dot}
        />
      ))}
    </View>
  );

  return <View style={styles.container}>{dot(data)}</View>;
};

export default Paginator;
